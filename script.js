/* Renders every page from data.js: the Team, Personal and CAD pages, the
   project pages (project.html?id=...), and the pop-up window. */

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- Pop-up window ---------- */

const modal = document.createElement("dialog");
modal.className = "modal";
modal.innerHTML = '<button class="modal-close" aria-label="Close">&times;</button><div class="modal-content"></div>';
document.body.appendChild(modal);
const modalContent = modal.querySelector(".modal-content");

function openModal(html, wide) {
  modalContent.innerHTML = html;
  modal.classList.toggle("wide", Boolean(wide));
  modal.showModal();
  modal.scrollTop = 0;
  requestAnimationFrame(() => modal.classList.add("open"));
}

function closeModal() {
  if (!modal.open) return;
  modal.querySelectorAll("video").forEach((v) => v.pause());
  modal.classList.remove("open");
  const done = () => modal.open && modal.close();
  modal.addEventListener("transitionend", done, { once: true });
  setTimeout(done, 320);
}

modal.querySelector(".modal-close").addEventListener("click", closeModal);
modal.addEventListener("cancel", (e) => { e.preventDefault(); closeModal(); });
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

/* ---------- Phone menu: tapping Projects opens its submenu instead of leaving the page ---------- */

document.querySelectorAll(".has-sub").forEach((item) => {
  const link = item.querySelector(":scope > a");
  const sub = item.querySelector(".submenu");
  if (!link || !sub) return;
  const all = document.createElement("li");
  all.className = "phone-only";
  all.innerHTML = `<a href="${link.getAttribute("href")}">All projects</a>`;
  sub.prepend(all);
  link.addEventListener("click", (e) => {
    if (!window.matchMedia("(max-width: 720px)").matches) return;
    e.preventDefault();
    item.classList.toggle("open");
  });
  document.addEventListener("click", (e) => { if (!item.contains(e.target)) item.classList.remove("open"); });
});

/* ---------- Projects: one list for team and personal ---------- */

// Every project that has its own page. Personal projects need an id and steps to get one.
const PROJECTS = [
  ...TEAM.map((p) => ({ ...p, kind: "team" })),
  ...PERSONAL.filter((p) => p.id && p.steps).map((p) => ({ ...p, kind: "personal" }))
];
const findProject = (id) => PROJECTS.find((p) => p.id === id);

// Each project has its own page file (so LinkedIn shows the right preview when it's shared).
// A new project without its own file still works through project.html?id=...
const PAGE_FILES = {
  aerospace: "camera-gimbal.html",
  lapdesk: "lap-desk.html",
  rocketry: "rocketry.html",
  tbwc: "wheelchair-challenge.html",
  cubics: "cubesat.html"
};
const projectUrl = (id, anchor) =>
  (PAGE_FILES[id] || `project.html?id=${encodeURIComponent(id)}`) + (anchor ? "#" + anchor : "");

// The project id of the page we are on, so pop-ups there don't link back to it.
const pageProjectId = document.getElementById("project")
  ? document.body.dataset.project || new URLSearchParams(location.search).get("id")
  : null;

// Which project a CAD part belongs to. Set "project" in data.js, or it is worked out from "Made for".
function projectOf(c) {
  if (c.project) return c.project;
  if (/^Gryphon Aerospace/i.test(c.madeFor)) return "aerospace";
  if (/^Gryphon Rocketry/i.test(c.madeFor)) return "rocketry";
  return null;
}

const moreButton = (id, anchor) =>
  id && id !== pageProjectId && findProject(id)
    ? `<div class="actions"><a class="btn small" href="${projectUrl(id, anchor)}">More details &rarr;</a></div>`
    : "";

/* ---------- Home page: live counts and scroll fade-in ---------- */

// Team projects that are actually under way (a submitted application doesn't count yet).
const counts = {
  team: TEAM.filter((p) => !/^Application/i.test(p.status)).length,
  drawings: DRAWINGS.length + PERSONAL.reduce((n, p) => n + (p.drawings ? p.drawings.length : 0), 0),
  cad: CAD.filter((c) => !c.projectOnly).length
};
document.querySelectorAll("[data-count]").forEach((el) => {
  el.textContent = counts[el.dataset.count];
});

const fadeTargets = document.querySelectorAll(".home-hero ~ section .wrap");
if (fadeTargets.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  fadeTargets.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
}

/* ---------- Drawings ---------- */

const EXTS = [".png", ".webp", ".jpg", ".jpeg", ".svg"];
const hasExt = (path) => /\.[a-z0-9]{2,4}$/i.test(path);

// Gimbal drawings in data.js have no file extension, so try each type in turn.
const drawingImg = (d, lazy) => hasExt(d.image)
  ? `<img src="${esc(d.image)}" alt="Orthographic drawing of ${esc(d.name)}"${lazy ? ' loading="lazy"' : ""}>`
  : `<img data-base="${esc(d.image)}" data-i="0" src="${esc(d.image + EXTS[0])}" alt="Orthographic drawing of ${esc(d.name)}">`;

/* If a drawing file is missing, try the other file types, then show a placeholder. */
document.addEventListener("error", (e) => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement) || !img.dataset.base) return;
  const next = Number(img.dataset.i) + 1;
  if (next < EXTS.length) {
    img.dataset.i = next;
    img.src = img.dataset.base + EXTS[next];
  } else {
    const note = document.createElement("span");
    note.className = "missing";
    note.textContent = "Drawing image not added yet";
    img.replaceWith(note);
  }
}, true);

// Newest gimbal set (GMB-000 sheets) first, then the earlier sheets in 00, 01, 02... order.
const rank = (d) => (d.image.includes("/GMB-") ? "0" : "1") + d.image;
DRAWINGS.sort((a, b) => rank(a).localeCompare(rank(b)));

// The drawing set for a project: the gimbal sheets live in DRAWINGS, others on the project.
const drawingsFor = (p) => p.drawings || (p.id === "aerospace" ? DRAWINGS : []);

const drawingTiles = (list) => list.map((d, i) => `
  <button class="tile" data-drawing="${i}" aria-label="Open ${esc(d.name)} drawing">
    <span class="frame sheet">${drawingImg(d, true)}</span>
    <span class="tile-caption"><strong>${esc(d.name)}</strong><span class="label">${esc(d.partNo)}</span></span>
  </button>`).join("");

function openDrawing(d, projectId) {
  const p = findProject(projectId);
  openModal(`
    <div class="modal-sheet">
      <span class="frame sheet">${drawingImg(d)}</span>
      <div class="modal-body">
        <p class="label">Orthographic drawing &middot; ${esc(d.partNo)}</p>
        <h2>${esc(d.name)}</h2>
        ${d.purpose ? `<h4>Purpose</h4><p>${esc(d.purpose)}</p>` : ""}
        ${p ? `<h4>Made for</h4><p>${esc(p.name)}. Drawn by me as part of the project's drawing set.</p>` : ""}
        <p class="hint"><a href="${esc(hasExt(d.image) ? d.image : d.image + EXTS[0])}" target="_blank" rel="noopener">Open the sheet full size &nearr;</a></p>
        ${moreButton(projectId, "drawings")}
      </div>
    </div>`, true);
}

// Clicking a drawing tile inside a grid opens it; the grid says which project and list it shows.
function wireDrawingGrid(grid, list, projectId) {
  grid.innerHTML = drawingTiles(list);
  grid.addEventListener("click", (e) => {
    const tile = e.target.closest("[data-drawing]");
    if (tile) openDrawing(list[tile.dataset.drawing], projectId);
  });
}

const drawingGrid = document.getElementById("drawing-gallery");
if (drawingGrid) wireDrawingGrid(drawingGrid, DRAWINGS, "aerospace");

const lapdeskGrid = document.getElementById("lapdesk-drawings");
if (lapdeskGrid) wireDrawingGrid(lapdeskGrid, drawingsFor(findProject("lapdesk")), "lapdesk");

/* ---------- CAD parts ---------- */

const cadTile = (c, i, label) => `
  <button class="tile" data-cad="${i}" aria-label="Open ${esc(c.name)}">
    <span class="frame${c.white ? " sheet" : ""}"><img src="${esc(c.image)}" alt="CAD render of ${esc(c.name)}" loading="lazy"></span>
    <span class="tile-caption"><strong>${esc(c.name)}</strong><span class="label">${esc(label)}</span></span>
  </button>`;

function openCad(c) {
  openModal(`
    <div class="modal-cad">
      <span class="frame${c.white ? " sheet" : ""}"><img src="${esc(c.image)}" alt="CAD render of ${esc(c.name)}"></span>
      <div class="modal-body">
        <p class="label">${esc(c.category)}</p>
        <h2>${esc(c.name)}</h2>
        <h4>Purpose</h4>
        <p>${esc(c.purpose)}</p>
        <h4>Made for</h4>
        <p>${esc(c.madeFor)}</p>
        <h4>Software</h4>
        <p>${esc(c.software)}</p>
        ${moreButton(projectOf(c), "cad")}
      </div>
    </div>`);
}

const gallery = document.getElementById("cad-gallery");
if (gallery) {
  const filters = document.getElementById("cad-filters");
  const cats = ["All", ...new Set(CAD.map((c) => c.category))];
  let current = "All";

  const draw = () => {
    filters.innerHTML = cats.map((c) =>
      `<button class="chip ${c === current ? "on" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
    gallery.innerHTML = CAD.map((c, i) => ({ c, i }))
      .filter(({ c }) => !c.projectOnly && (current === "All" || c.category === current))
      .map(({ c, i }) => cadTile(c, i, c.category)).join("");
  };
  draw();

  filters.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-cat]");
    if (chip) { current = chip.dataset.cat; draw(); }
  });

  gallery.addEventListener("click", (e) => {
    const tile = e.target.closest("[data-cad]");
    if (tile) openCad(CAD[tile.dataset.cad]);
  });
}

/* ---------- Shared project write-up pieces ---------- */

const factsList = (p) => p.facts
  ? `<ul class="spot-facts">${p.facts.map(([a, b]) => `<li><strong>${esc(a)}</strong><span>${esc(b)}</span></li>`).join("")}</ul>`
  : "";

const stepBlock = (s, n, h) => `
  <div class="step">
    <${h}><span class="step-no">${n + 1}</span>${esc(s.title)}</${h}>
    ${(s.text || []).map((t) => `<p>${esc(t)}</p>`).join("")}
    ${s.list ? `<ul>${s.list.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
  </div>`;

// The written part of a project: competition, role and contributions for team projects,
// or the numbered Problem / Design / Process / Status steps for personal ones.
// h is the heading level to use, so the project page keeps a proper h1 > h2 > h3 outline.
function writeUp(p, h = "h3") {
  if (p.steps) {
    const role = p.roleText ? `<p class="role-line"><strong>My role:</strong> ${esc(p.roleText)}</p>` : "";
    return role + p.steps.map((s, n) => stepBlock(s, n, h)).join("");
  }
  return `
    <${h}>The competition</${h}>
    ${p.competition.map((t) => `<p>${esc(t)}</p>`).join("")}
    <${h}>My role: ${esc(p.role)}</${h}>
    <p>${esc(p.roleText)}</p>
    <${h}>${esc(p.contributionsTitle || "What I did")}</${h}>
    <ul>${p.contributions.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
}

const galleryFigures = (p) => p.gallery
  ? `<div class="modal-gallery">${p.gallery.map((g) => `
      <figure><span class="frame"${g.bg ? ` style="background:${esc(g.bg)}"` : ""}><img src="${esc(g.image)}" alt="${esc(g.caption)}"></span><figcaption class="label">${esc(g.caption)}</figcaption></figure>`).join("")}</div>`
  : "";

const subLine = (p) => p.kind === "team" ? esc(p.org) : "Personal project";

// Pop-up version of a project: a short summary, with the full write-up on its page.
function openProject(p) {
  const cadCount = CAD.filter((c) => projectOf(c) === p.id && !c.galleryOnly).length + (p.parts ? p.parts.length : 0);
  const sheetCount = drawingsFor(p).length;
  const onPage = [
    "the full write-up",
    p.video ? "the animation" : p.gallery ? "pictures" : null,
    cadCount ? `${cadCount} CAD parts` : null,
    sheetCount ? `${sheetCount} drawings` : null
  ].filter(Boolean);
  // Quick look: the problem, my role, and the top of the solution.
  const solution = p.steps ? p.steps.find((s) => /solution/i.test(s.title)) : null;
  const highlights = p.steps
    ? `<h4>Problem</h4>${(p.steps[0].text || []).map((t) => `<p>${esc(t)}</p>`).join("")}
       ${p.roleText ? `<h4>My role</h4><p>${esc(p.roleText)}</p>` : ""}
       ${solution && solution.list ? `<h4>${esc(solution.title)}</h4><ul>${solution.list.slice(0, 3).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}`
    : `<h4>My role: ${esc(p.role)}</h4><p>${esc(p.roleText)}</p>
       <h4>${esc(p.contributionsTitle || "Highlights")}</h4>
       <ul>${p.contributions.slice(0, 3).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
  openModal(`
    <div class="modal-body">
      <p class="label">${esc(p.when || "")} &middot; ${esc(p.status)}</p>
      <h2>${esc(p.name)}</h2>
      <p class="sub">${subLine(p)}</p>
      <p>${esc(p.summary)}</p>
      ${factsList(p)}
      ${highlights}
      <div class="actions">
        <a class="btn" href="${projectUrl(p.id)}">More details &rarr;</a>
      </div>
      <p class="hint">The project page has ${onPage.join(", ").replace(/, ([^,]*)$/, " and $1")}.</p>
    </div>`);
}

// A project card: clicking the card opens the pop-up, the Details button goes to the page.
const projectCard = (p, extraClass, imageHtml, labelHtml) => `
  <article class="card lift clickable${extraClass}" data-project="${esc(p.id)}" tabindex="0" aria-label="Quick look at ${esc(p.name)}">
    ${imageHtml}
    <span class="status">${esc(p.status)}</span>
    <h3>${esc(p.name)}</h3>
    ${labelHtml}
    <p>${esc(p.summary)}</p>
    <div class="card-actions">
      <a class="btn small" href="${projectUrl(p.id)}">Details &rarr;</a>
    </div>
  </article>`;

function wireCards(grid) {
  const open = (e) => {
    if (e.target.closest("a")) return;
    const card = e.target.closest("[data-project]");
    if (card) openProject(findProject(card.dataset.project));
  };
  grid.addEventListener("click", open);
  grid.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(e); } });
}

/* ---------- Team projects page ---------- */

const teamGrid = document.getElementById("team-grid");
if (teamGrid) {
  teamGrid.innerHTML = PROJECTS.filter((p) => p.kind === "team")
    .map((p) => projectCard(p, p.image ? " has-image" : "",
      p.image ? `<span class="frame card-image"><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy"></span>` : "",
      `<p class="label">${esc(p.role)}</p>`)).join("");
  wireCards(teamGrid);
  // Old links like team.html#aerospace still open the pop-up.
  const fromHash = findProject(location.hash.slice(1));
  if (fromHash) openProject(fromHash);
}

/* ---------- Personal projects page ---------- */

const personalGrid = document.getElementById("personal-grid");
if (personalGrid) {
  // Projects with their own page get a full card; the rest go in the short list below.
  personalGrid.innerHTML = PERSONAL.filter((p) => findProject(p.id)).map((p) => {
    const img = p.image ? `<span class="frame card-image"><img src="${esc(p.image)}" alt="Render of the ${esc(p.name)}" loading="lazy"></span>` : "";
    return projectCard(findProject(p.id), p.image ? " has-image" : "", img, "");
  }).join("");
  wireCards(personalGrid);

  const moreList = document.getElementById("personal-more");
  const smaller = PERSONAL.filter((p) => !findProject(p.id));
  if (moreList && smaller.length) {
    moreList.innerHTML = smaller.map((p) => `
      <li><span class="status">${esc(p.status)}</span><strong>${esc(p.name)}</strong><span>${esc(p.summary)}</span></li>`).join("");
  } else if (moreList) {
    document.getElementById("personal-more-section").remove();
  }
  const fromHash = findProject(location.hash.slice(1));
  if (fromHash) openProject(fromHash);
}

/* ---------- Project page (project.html?id=...) ---------- */

const projectRoot = document.getElementById("project");
if (projectRoot) {
  const p = findProject(pageProjectId);
  if (!p) {
    projectRoot.innerHTML = `
      <section class="page-head"><div class="wrap">
        <p class="label crumbs"><a href="projects.html">Projects</a></p>
        <h1>Project not found</h1>
        <p class="lede">That project link doesn't match any project. Pick one below.</p>
        <div class="actions">${PROJECTS.map((x) => `<a class="btn ghost" href="${projectUrl(x.id)}">${esc(x.name)}</a>`).join("")}</div>
      </div></section>`;
  } else {
    document.title = `${p.name} | Hossam Ismail`;
    const listPage = p.kind === "team" ? ["team.html", "Team Projects"] : ["personal.html", "Personal Projects"];
    const cad = CAD.map((c, i) => ({ c, i })).filter(({ c }) => projectOf(c) === p.id && !c.galleryOnly);
    const extraParts = p.parts || [];
    const drawings = drawingsFor(p);
    const others = PROJECTS.filter((x) => x.id !== p.id);

    const jump = [
      p.video || p.gallery ? ["media", p.video ? "Animation" : "Pictures"] : null,
      ["overview", "Overview"],
      cad.length || extraParts.length ? ["cad", `CAD models (${cad.length + extraParts.length})`] : null,
      drawings.length ? ["drawings", `Drawings (${drawings.length})`] : null
    ].filter(Boolean);

    projectRoot.innerHTML = `
      <section class="page-head project-head">
        <div class="wrap${p.lead ? " head-grid" : ""}">
          <div>
          <p class="label crumbs"><a href="projects.html">Projects</a> / <a href="${listPage[0]}">${listPage[1]}</a> / ${esc(p.name)}</p>
          <h1>${esc(p.name)}</h1>
          <p class="lede">${esc(p.summary)}</p>
          <p class="project-meta">
            <span class="status">${esc(p.status)}</span>
            ${p.role ? `<span><strong>Role:</strong> ${esc(p.role)}</span>` : ""}
            <span>${subLine(p)}</span>
            ${p.when ? `<span>${esc(p.when)}</span>` : ""}
          </p>
          <nav class="jump" aria-label="On this page">${jump.map(([a, t]) => `<a href="#${a}">${esc(t)}</a>`).join("")}</nav>
          </div>
          ${p.lead ? `<figure class="lead-photo"><img src="${esc(p.lead.image)}" alt="${esc(p.lead.caption)}"><figcaption class="label">${esc(p.lead.caption)}</figcaption></figure>` : ""}
        </div>
      </section>

      ${p.video || p.gallery ? `
      <section class="section" id="media">
        <div class="wrap">
          <h2 class="sr-only">${p.video ? "Animation" : "Pictures"}</h2>
          ${p.video ? `<figure class="modal-video project-video">
            <video src="${esc(p.video)}" poster="${esc(p.poster || "")}" width="1280" height="720" autoplay muted loop playsinline controls preload="metadata" aria-label="${esc(p.videoCaption || "Project animation")}"></video>
            <figcaption class="label">${esc(p.videoCaption || "")}</figcaption>
          </figure>` : ""}
          ${galleryFigures(p)}
        </div>
      </section>` : ""}

      <section class="section" id="overview">
        <div class="wrap project-overview">
          <p class="label">Overview</p>
          <h2>Problem, process and solution</h2>
          ${factsList(p)}
          <div class="prose">${writeUp(p, "h3")}</div>
          ${p.tools ? `<h3 class="tools-title">Tools and skills</h3><p class="tags">${p.tools.map((t) => `<span>${esc(t)}</span>`).join("")}</p>` : ""}
        </div>
      </section>

      ${cad.length || extraParts.length ? `
      <section class="section tinted" id="cad">
        <div class="wrap">
          <p class="label">CAD models</p>
          <h2>Parts</h2>
          <p class="hint">Click a part to see what it does.</p>
          <div class="gallery" id="project-cad">
            ${cad.map(({ c, i }) => cadTile(c, i, "SOLIDWORKS")).join("")}
            ${extraParts.map((x, j) => `
              <button class="tile" data-part="${j}" aria-label="Open ${esc(x.name)}">
                <span class="frame sheet"><img src="${esc(x.image)}" alt="3D view of the ${esc(x.name)}" loading="lazy"></span>
                <span class="tile-caption"><strong>${esc(x.name)}</strong><span class="label">${esc(x.partNo)}</span></span>
              </button>`).join("")}
          </div>
        </div>
      </section>` : ""}

      ${drawings.length ? `
      <section class="section" id="drawings">
        <div class="wrap">
          <p class="label">Orthographic drawings</p>
          <h2>Drawing set</h2>
          <p class="hint">Click a sheet to open it larger.</p>
          <div class="gallery" id="project-drawings"></div>
        </div>
      </section>` : ""}

      <section class="section">
        <div class="wrap">
          <p class="label">More projects</p>
          <h2 class="sr-only">More projects</h2>
          <div class="grid three other-projects">
            ${others.map((x) => `
              <a class="card now" href="${projectUrl(x.id)}">
                <p class="label">${x.kind === "team" ? "Team project" : "Personal project"}</p>
                <h3>${esc(x.name)}</h3>
                <span class="arrow">View project &rarr;</span>
              </a>`).join("")}
          </div>
        </div>
      </section>`;

    const cadGrid = document.getElementById("project-cad");
    if (cadGrid) {
      cadGrid.addEventListener("click", (e) => {
        const tile = e.target.closest("[data-cad]");
        if (tile) return openCad(CAD[tile.dataset.cad]);
        const part = e.target.closest("[data-part]");
        if (!part) return;
        const x = extraParts[part.dataset.part];
        openModal(`
          <div class="modal-cad">
            <span class="frame sheet"><img src="${esc(x.image)}" alt="3D view of the ${esc(x.name)}"></span>
            <div class="modal-body">
              <p class="label">${esc(p.name)} &middot; ${esc(x.partNo)}</p>
              <h2>${esc(x.name)}</h2>
              <p>${esc(x.note || "3D view from the project's drawing set. The full dimensions are on its drawing below.")}</p>
              ${drawings.length ? `<div class="actions"><a class="btn small ghost" href="#drawings" onclick="closeModal()">See the drawings</a></div>` : ""}
            </div>
          </div>`);
      });
    }

    const drawGrid = document.getElementById("project-drawings");
    if (drawGrid) wireDrawingGrid(drawGrid, drawings, p.id);

    // Jump straight to #cad or #drawings when the link asks for it (the page is built after load).
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) requestAnimationFrame(() => target.scrollIntoView());
    }
  }
}

/* ---------- Respect "reduce motion": don't autoplay animations ---------- */

if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("video[autoplay]").forEach((v) => { v.removeAttribute("autoplay"); v.pause(); });
}
