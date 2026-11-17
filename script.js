/* Renders the Team, Personal and CAD pages from data.js and runs the pop-up window. */

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
  modal.classList.remove("open");
  const done = () => modal.open && modal.close();
  modal.addEventListener("transitionend", done, { once: true });
  setTimeout(done, 320);
}

modal.querySelector(".modal-close").addEventListener("click", closeModal);
modal.addEventListener("cancel", (e) => { e.preventDefault(); closeModal(); });
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

/* ---------- Home page: live counts and scroll fade-in ---------- */

const counts = { team: TEAM.length, drawings: DRAWINGS.length, cad: CAD.length };
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

/* ---------- Gimbal drawings ---------- */

const EXTS = [".png", ".webp", ".jpg", ".jpeg", ".svg"];

const drawingImg = (d) =>
  `<img data-base="${esc(d.image)}" data-i="0" src="${esc(d.image + EXTS[0])}" alt="Orthographic drawing of ${esc(d.name)}">`;

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

const drawingGrid = document.getElementById("drawing-gallery");
if (drawingGrid) {
  DRAWINGS.sort((a, b) => a.image.localeCompare(b.image)); // follow the 00, 01, 02... sheet numbers
  drawingGrid.innerHTML = DRAWINGS.map((d, i) => `
    <button class="tile" data-drawing="${i}" aria-label="Open ${esc(d.name)} drawing">
      <span class="frame sheet">${drawingImg(d)}</span>
      <span class="tile-caption"><strong>${esc(d.name)}</strong><span class="label">${esc(d.partNo)}</span></span>
    </button>`).join("");

  drawingGrid.addEventListener("click", (e) => {
    const tile = e.target.closest("[data-drawing]");
    if (!tile) return;
    const d = DRAWINGS[tile.dataset.drawing];
    openModal(`
      <div class="modal-sheet">
        <span class="frame sheet">${drawingImg(d)}</span>
        <div class="modal-body">
          <p class="label">Orthographic drawing &middot; ${esc(d.partNo)}</p>
          <h2>${esc(d.name)}</h2>
          <h4>Purpose</h4>
          <p>${esc(d.purpose)}</p>
          <h4>Made for</h4>
          <p>Gryphon Aerospace Club, two-axis camera gimbal. Drawn by me as part of the gimbal drawing set, before the parts were modelled in SOLIDWORKS.</p>
        </div>
      </div>`, true);
  });
}

/* ---------- Team projects ---------- */

const teamGrid = document.getElementById("team-grid");
if (teamGrid) {
  teamGrid.innerHTML = TEAM.map((p) => `
    <article class="card lift">
      <span class="status">${esc(p.status)}</span>
      <h3>${esc(p.name)}</h3>
      <p class="label">${esc(p.role)}</p>
      <p>${esc(p.summary)}</p>
      <button class="btn small" data-team="${esc(p.id)}">Details</button>
    </article>`).join("");

  teamGrid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-team]");
    if (!btn) return;
    const p = TEAM.find((x) => x.id === btn.dataset.team);
    openModal(`
      <div class="modal-body">
        <p class="label">${esc(p.when)} &middot; ${esc(p.status)}</p>
        <h2>${esc(p.name)}</h2>
        <p class="sub">${esc(p.org)}</p>
        <h4>The competition</h4>
        ${p.competition.map((t) => `<p>${esc(t)}</p>`).join("")}
        <h4>My role: ${esc(p.role)}</h4>
        <p>${esc(p.roleText)}</p>
        <h4>What I did</h4>
        <ul>${p.contributions.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        <h4>Tools and skills</h4>
        <p>${p.tools.map(esc).join(" &middot; ")}</p>
        ${p.id === "aerospace" ? '<div class="actions"><a class="btn small" href="cad.html#drawings">See the gimbal drawings</a><a class="btn small ghost" href="cad.html">See the CAD parts</a></div>' : ""}
      </div>`);
  });
}

/* ---------- Personal projects ---------- */

const personalGrid = document.getElementById("personal-grid");
if (personalGrid) {
  personalGrid.innerHTML = PERSONAL.map((p) => `
    <article class="card">
      <span class="status">${esc(p.status)}</span>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.summary)}</p>
    </article>`).join("");
}

/* ---------- CAD gallery ---------- */

const gallery = document.getElementById("cad-gallery");
if (gallery) {
  const filters = document.getElementById("cad-filters");
  const cats = ["All", ...new Set(CAD.map((c) => c.category))];
  let current = "All";

  const draw = () => {
    filters.innerHTML = cats.map((c) =>
      `<button class="chip ${c === current ? "on" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
    gallery.innerHTML = CAD.map((c, i) => ({ c, i }))
      .filter(({ c }) => current === "All" || c.category === current)
      .map(({ c, i }) => `
        <button class="tile" data-cad="${i}" aria-label="Open ${esc(c.name)}">
          <span class="frame"><img src="${esc(c.image)}" alt="CAD render of ${esc(c.name)}" loading="lazy"></span>
          <span class="tile-caption"><strong>${esc(c.name)}</strong><span class="label">${esc(c.category)}</span></span>
        </button>`).join("");
  };
  draw();

  filters.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-cat]");
    if (chip) { current = chip.dataset.cat; draw(); }
  });

  gallery.addEventListener("click", (e) => {
    const tile = e.target.closest("[data-cad]");
    if (!tile) return;
    const c = CAD[tile.dataset.cad];
    openModal(`
      <div class="modal-cad">
        <span class="frame"><img src="${esc(c.image)}" alt="CAD render of ${esc(c.name)}"></span>
        <div class="modal-body">
          <p class="label">${esc(c.category)}</p>
          <h2>${esc(c.name)}</h2>
          <h4>Purpose</h4>
          <p>${esc(c.purpose)}</p>
          <h4>Made for</h4>
          <p>${esc(c.madeFor)}</p>
          <h4>Software</h4>
          <p>${esc(c.software)}</p>
        </div>
      </div>`);
  });
}
