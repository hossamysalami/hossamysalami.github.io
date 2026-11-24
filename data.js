/* ------------------------------------------------------------------
   All the content for the Team Projects, Personal Projects and CAD
   pages lives in this file. Edit the text here; the pages update.

   TO ADD A NEW CAD PART:
   1. Save the image into images/cad/ (any size or shape is fine,
      the gallery fits every image into the same 4:3 frame).
   2. Copy one of the { ... } blocks in CAD below and change the text.
      "category" must be "Team" , "Personal" or "Training".
------------------------------------------------------------------ */

const TEAM = [
  {
    id: "tbwc",
    name: "Teddy Bear Wheelchair Challenge",
    short: "TBWC",
    org: "ENGG*1100 Engineering and Design I, University of Guelph",
    role: "Project Manager",
    when: "Fall 2026",
    status: "In progress",
    summary:
      "A five-person first-year design project: a small motorized wheelchair that carries a teddy bear through a timed course and launches a recyclable item into a bin.",
    competition: [
      "The Teddy Bear Wheelchair Challenge is the first-year design project in ENGG*1100 at the University of Guelph.",
      "Each team designs and builds a small motorized wheelchair that carries a teddy bear through a timed course and delivers a recyclable item into a bin. Scoring depends partly on keeping the mass low."
    ],
    roleText:
      "Project manager of a five-person team. I set up and ran the team's meetings, tracked deadlines and deliverables, and kept the team on schedule from concept to prototype demo.",
    contributions: [
      "Planned the schedule and task ownership with a WBS, Gantt chart and RACI chart, so every remaining task had one accountable member.",
      "Built the front axle and front wheels of the rolling chassis, and helped rework the chassis width and add wheel retainers when the wheels kept slipping off.",
      "Brainstormed and sketched three delivery concepts (tilting tray, trapdoor, sliding pusher) and helped prototype the servo linkage.",
      "Built weighted decision matrices for the chassis layout (rear-wheel drive was chosen) and for the delivery mechanism (a rubber-band launcher scored highest for simplicity and low mass).",
      "Wrote the introduction, decision-making and team contract review sections of the team prototype report."
    ],
    tools: ["Arduino", "Project planning (WBS, Gantt, RACI)", "Decision matrices", "Hands-on prototyping"]
  },
  {
    id: "aerospace",
    name: "Gryphon Aerospace Club",
    short: "UAV camera and gimbal system",
    org: "Flight Systems Team, University of Guelph",
    role: "Camera Systems Lead",
    video: "images/video/gimbal.mp4",
    poster: "images/video/gimbal-poster.jpg",
    videoCaption: "Two-axis camera gimbal: explode, pitch 0–90°, yaw ±90°",
    when: "Fall 2026 to present",
    status: "In progress",
    summary:
      "Leading the camera system on the club's UAV for the 2027 AEAC student competition, from camera selection to a two-axis gimbal.",
    competition: [
      "The Flight Systems team is building a UAV for the 2027 AEAC student competition.",
      "The mission: the drone must find deer from the air and read their small ear tags."
    ],
    roleText:
      "Camera Systems Lead. I am responsible for the camera system from requirements and hardware selection through integration, I run the camera work day to day, and I delegate tasks within it.",
    contributions: [
      "Compared several camera architectures and chose a two-camera system: a wide-angle camera for search and a 10x optical zoom camera for reading tags.",
      "Worked out how far away each camera can read a tag and checked that both work with the onboard Raspberry Pi.",
      "When purchasing rules ruled out the original overseas supplier, found a replacement camera from a US distributor and updated the mount design to suit it.",
      "Set the layout for a two-axis, servo-driven gimbal carrying both cameras, with both rotation axes through the wide lens's no-parallax point.",
      "Prepared a nine-sheet drawing set with an assembly sheet and bill of materials, and modelled every gimbal part in SOLIDWORKS.",
      "Measured the servo and horn, found the horn face sat 2.3 mm higher than assumed, and corrected the servo mounts before any parts were printed.",
      "Redesigned the gimbal after design review: detachable servo mounts, flush horn recesses, reachable M3 screws, and a printed mass cut from 469 g to 410 g (12.7%).",
      "Produced the updated drawing set GMB-000 (assembly with an 18-item BOM, and an exploded view with a nine-step assembly sequence) and sent the parts to print in PETG for fit and motion testing.",
      "Researching a passive vibration isolation mount so motor vibration does not blur the images.",
      "Made short narrated videos and a 34 second animation explaining how the gimbal assembles and moves."
    ],
    tools: ["SOLIDWORKS", "Engineering drawings", "3D printing", "Raspberry Pi", "Component selection"]
  },
  {
    id: "rocketry",
    name: "Gryphon Rocketry",
    short: "University of Guelph Rocketry Club",
    org: "Solid and liquid rocket teams, University of Guelph",
    role: "Member, Solid and Liquid Rocket Teams",
    when: "Fall 2026 to present",
    status: "In progress",
    summary:
      "Member of both the solid and liquid rocket teams. On the solid rocket for Launch Canada 2027, I select recovery hardware and model the airframe.",
    competition: [
      "The club runs two rocket teams, one building a solid rocket and one building a liquid rocket, and I'm a member of both.",
      "The solid team is building a high-power rocket to compete at Launch Canada 2027.",
      "My work is on the recovery system, which brings the rocket down safely under drogue and main parachutes, and on the airframe CAD."
    ],
    roleText:
      "Member of the solid and liquid rocket teams. I completed three component selection tasks and then moved on to airframe and recovery CAD in SOLIDWORKS.",
    contributions: [
      "Recovery linkage: compared quick links, swivels, eyebolts and threaded rod, separating working load, shock load and breaking strength, and delivered a costed component list in Canadian dollars.",
      "Parachutes and shock cord: selected the drogue and main parachutes and tubular Kevlar shock cords rated 3600 lb against a 1500 lb requirement.",
      "Flagged that the main parachute's packed diameter may be too large for the 4 inch airframe so the team can check before ordering.",
      "Airframe CAD: modelled the airframe tubes and coupler in SOLIDWORKS, driven by a shared variables file, and checked the model's mass against the team's OpenRocket simulation.",
      "Recovery fit check (in progress): modelling the packed parachutes and shock cords to confirm the full recovery system fits inside the airframe, and proposed how to split that task between three members."
    ],
    tools: ["SOLIDWORKS", "OpenRocket", "Load ratings", "Component selection"]
  },
  {
    id: "cubics",
    name: "CUBICS CubeSat",
    short: "University of Guelph CubeSat team",
    org: "Mechanical and Thermal sub-team, University of Guelph",
    role: "Mechanisms and CAD Engineer (proposed)",
    when: "Fall 2026",
    status: "Application submitted, awaiting CSA decision",
    summary:
      "A student team applying to the Canadian Space Agency's Canadian CubeSat Project with a 3U satellite that would study how leaves lose heat in orbit.",
    competition: [
      "CUBICS is the University of Guelph's student CubeSat team. It applied to the Canadian Space Agency's Canadian CubeSat Project with a 3U satellite that would measure how model leaves lose heat in the still air of orbit, research that supports growing plants in space.",
      "If selected, the project would start in 2027, with launch planned for 2030–2031."
    ],
    roleText:
      "I'm named in the submitted application as Mechanisms and CAD Engineer on the Mechanical and Thermal sub-team, and my narrative CV is part of the submission.",
    contributionsTitle: "Planned work, if selected",
    contributions: [
      "A team-built drag sail of about 1 m² that deorbits the satellite within five years",
      "Two deployable solar wings, built with the power sub-team",
      "Layout CAD that fits the payload, bus and boards inside the 3U frame",
      "A sail deployment prototype and a cold deployment of one solar wing by the preliminary design review (2028)",
      "Vibration testing of the mechanisms before the critical design review (2029)"
    ],
    tools: ["SOLIDWORKS", "Mechanism design", "Spacecraft layout"]
  }
];

const PERSONAL = [
  {
    id: "lapdesk",
    name: "3D-Printed Folding Lap Desk",
    status: "Designed, ready to print",
    when: "Fall 2026",
    image: "images/lapdesk/render-in-use.png",
    summary:
      "A height-adjustable lap desk that folds flat, designed so every structural part prints on a home 3D printer and the only bought parts are about $19 of bolts and nuts.",
    facts: [
      ["240–320 mm", "height, five settings"],
      ["~49 mm", "thick when folded"],
      ["9", "printed part designs"],
      ["~$19", "of bought hardware"]
    ],
    steps: [
      {
        title: "Problem",
        text: [
          "I wanted a desk for working on my lap or a bed that adjusts in height and folds flat to store, and I wanted to make it myself instead of buying one.",
          "The catch: a 500 × 320 mm top is too big to print in one piece, plastic legs have to lock solidly at each height, and the whole thing had to print without support material and use only cheap hardware-store parts."
        ]
      },
      {
        title: "Design",
        list: [
          "Top: split into four 250 × 160 mm tiles that slide together on dovetails and lock with tapered wedge keys. A 3 mm skin over 13 mm ribs keeps it stiff and light at 16 mm thick. Only two tile designs are needed, each printed twice.",
          "Height: each leg is a Ø20 inner leg sliding in a Ø25 sleeve. A twist ring carries a peg that runs up a groove, then turns 90° into one of five notches, giving 240 to 320 mm in 20 mm steps.",
          "Folding: the legs pivot on M5 bolts through hinge stubs under the top. A sliding collar over each hinge locks the leg upright; slide it down, fold the leg in, and it snaps into a clip. Folded, the desk is about 49 mm thick.",
          "Designed for printing: the dovetail faces sit at 45° so they print without supports, sockets have 0.3 mm clearance, and every part has a print orientation and settings on its drawing."
        ]
      },
      {
        title: "Process",
        list: [
          "Modelled the parts in SOLIDWORKS and produced a 10-sheet drawing set: an assembly sheet with a 13-line bill of materials and assembly notes, plus a fully dimensioned drawing for each of the nine printed parts.",
          "Planned the build order on the drawings, from joining the tiles to fitting the hinges, collars and twist rings, and the folding sequence.",
          "Kept the bought parts to standard M5 bolts, lock nuts and washers from Canadian Tire, about $19 CAD, with roughly 1.5 kg of PETG for the printed parts."
        ]
      },
      {
        title: "Status and next steps",
        list: [
          "The design and drawings are complete.",
          "Next: test-print a 50 mm slice of the dovetail seam to check the fit before printing the full tiles, then print, assemble, and test the height lock and folding."
        ]
      }
    ],
    gallery: [
      { image: "images/lapdesk/render-in-use.png", caption: "In use, set to 280 mm" },
      { image: "images/lapdesk/render-folded.png", caption: "Folded, seen from below" },
      { image: "images/cad/lapdesk-tile-t.png", caption: "Tile T in SOLIDWORKS", bg: "linear-gradient(90deg,#ececec,#dcdcdc)" }
    ],
    drawings: [
      { name: "Lap Desk Assembly", partNo: "LD-00", image: "images/lapdesk/LD-00-Assembly.png" },
      { name: "Tile T (tails)", partNo: "LD-01", image: "images/lapdesk/LD-01-Tile-T.png" },
      { name: "Tile S (sockets)", partNo: "LD-02", image: "images/lapdesk/LD-02-Tile-S.png" },
      { name: "Leg Sleeve", partNo: "LD-03", image: "images/lapdesk/LD-03-Leg-Sleeve.png" },
      { name: "Inner Leg", partNo: "LD-04", image: "images/lapdesk/LD-04-Inner-Leg.png" },
      { name: "Foot Bar", partNo: "LD-05", image: "images/lapdesk/LD-05-Foot-Bar.png" },
      { name: "Sliding Collar", partNo: "LD-06", image: "images/lapdesk/LD-06-Sliding-Collar.png" },
      { name: "Twist Ring", partNo: "LD-07", image: "images/lapdesk/LD-07-Twist-Ring.png" },
      { name: "Lock Peg", partNo: "LD-08", image: "images/lapdesk/LD-08-Lock-Peg.png" },
      { name: "Wedge Key", partNo: "LD-09", image: "images/lapdesk/LD-09-Wedge-Key.png" }
    ],
    tools: ["SOLIDWORKS", "Engineering drawings", "Design for 3D printing", "Mechanism design", "PETG"]
  },
  {
    name: "Quadcopter",
    status: "In progress",
    summary:
      "A quadcopter with a 3D-printed frame, built to learn how drone structures, propulsion and electronics fit together outside of a club setting."
  },
  {
    name: "RC Plane",
    status: "Planned",
    summary:
      "A radio-controlled plane I am designing and building myself, to put wing design, weight and balance, and control surfaces into practice on something that has to fly."
  },
  {
    name: "This portfolio website",
    status: "In progress",
    summary:
      "A site that documents my club and personal projects, with my individual work kept separate from team work."
  }
];

const CAD = [
  {
    name: "Gimbal Assembly",
    image: "images/cad/gimbal-assembly.png",
    category: "Team",
    madeFor: "Gryphon Aerospace Club, two-axis camera gimbal (drawing GMB-000)",
    purpose:
      "The full two-axis gimbal: a yaw stage hanging from the top plate on a 6806 bearing, and an L-bracket carrying the pitch shaft on two 608 bearings, both driven by FrSky servos. The redesign makes both servos removable with four screws each, sets the servo horns into recesses so the screws don't carry the torque, and moves to M3 hardware throughout. Printed mass dropped from 469 g to 410 g (12.7% lighter), and the parts went to the printer in PETG for test fitting.",
    software: "SOLIDWORKS"
  },
  {
    name: "Camera Cradle",
    image: "images/cad/camera-cradle.png",
    category: "Team",
    madeFor: "Gryphon Aerospace Club, two-axis camera gimbal (part GIM-CRADLE-02)",
    purpose:
      "Carries both cameras on the gimbal. The wide-angle camera bolts to the raised pad, whose slots give 5 mm of travel either way to set the lens on the no-parallax point. The 10x zoom camera bolts to the floor, and the boss on the wall has a D-shaped bore for the pitch shaft.",
    software: "SOLIDWORKS"
  },
  {
    name: "Gimbal L-Bracket",
    image: "images/cad/gimbal-l-bracket.png",
    category: "Team",
    madeFor: "Gryphon Aerospace Club, two-axis camera gimbal (part GIM-L-BRK-01)",
    purpose:
      "The main structure of the gimbal. The crossbar hangs from the yaw hub and has a centre hole for the camera cables, the arm holds two 608 bearings for the pitch shaft, and the cage on the side holds the pitch servo.",
    software: "SOLIDWORKS"
  },
  {
    name: "Pitch Coupler Hub",
    image: "images/cad/pitch-coupler.png",
    category: "Team",
    madeFor: "Gryphon Aerospace Club, two-axis camera gimbal (part GIM-PIT-CPL-01)",
    purpose:
      "Joins the pitch servo horn to the 8 mm D-shaft outside the L-bracket arm. The D-shaped bore stops the shaft from slipping and the side hole takes an M3 set screw onto the shaft flat.",
    software: "SOLIDWORKS"
  },
  {
    name: "Top Plate",
    image: "images/cad/top-plate.png",
    category: "Team",
    madeFor: "Gryphon Aerospace Club, two-axis camera gimbal (part GIM-TOP-PLT-01)",
    purpose:
      "The plate the whole gimbal hangs from. The 6806 yaw bearing drops into a pocket in the raised boss and rests on a 1 mm lip, and the hole pattern carries the cap ring, the yaw servo bracket and the future vibration isolation mount.",
    software: "SOLIDWORKS"
  },
  {
    name: "Bearing Cap Ring",
    image: "images/cad/bearing-cap-ring.png",
    category: "Team",
    madeFor: "Gryphon Aerospace Club, two-axis camera gimbal (part GIM-CAP-RNG-01)",
    purpose:
      "Screws onto the top plate boss with three M3 screws and stops the yaw bearing from lifting out. It presses on the bearing's outer race only, and its bore clears the inner race and hub.",
    software: "SOLIDWORKS"
  },
  {
    name: "Yaw Hub",
    image: "images/cad/yaw-hub.png",
    category: "Team",
    madeFor: "Gryphon Aerospace Club, two-axis camera gimbal (part GIM-YAW-HUB-01)",
    purpose:
      "The rotating centre of the yaw axis. Its journal runs in the 6806 bearing, the servo horn screws to the bridge on top, the flange bolts to the L-bracket crossbar, and the two slots pass the camera cables through the middle.",
    software: "SOLIDWORKS"
  },
  {
    name: "Hub Clamp Collar",
    image: "images/cad/hub-clamp-collar.png",
    category: "Team",
    madeFor: "Gryphon Aerospace Club, two-axis camera gimbal (part GIM-HUB-COL-01)",
    purpose:
      "Clamps onto the yaw hub above the bearing and holds the gimbal's weight. The slit and M3 pinch screw let the ring squeeze the hub, and a small step on the bottom rests on the bearing's inner race only.",
    software: "SOLIDWORKS"
  },
  {
    name: "Yaw Servo Bracket",
    image: "images/cad/yaw-servo-bracket.png",
    category: "Team",
    madeFor: "Gryphon Aerospace Club, two-axis camera gimbal (part GIM-YAW-BRK-01)",
    purpose:
      "Holds the yaw servo above the top plate with its output shaft pointing down the yaw axis. The legs clear the cap ring and collar, and the open sides let the USB cables leave the hub.",
    software: "SOLIDWORKS"
  },
  {
    name: "Airframe Tube",
    image: "images/cad/airframe-tube.png",
    category: "Team",
    madeFor: "Gryphon Rocketry, solid rocket for Launch Canada 2027",
    purpose:
      "A body tube of the rocket's airframe. Its dimensions are driven by a shared variables file, so the whole airframe can change in one place, and I assigned its material to check the model's mass against the team's OpenRocket simulation.",
    software: "SOLIDWORKS"
  },
  {
    name: "Airframe Coupler",
    image: "images/cad/airframe-coupler.png",
    category: "Team",
    madeFor: "Gryphon Rocketry, solid rocket for Launch Canada 2027",
    purpose:
      "The coupler that slides inside two airframe tubes to join them. It is driven by the same shared variables file as the tubes, so the fit updates when the airframe dimensions change.",
    software: "SOLIDWORKS"
  },
  {
    name: "Drogue Parachute, Packed",
    image: "images/cad/drogue-24-packed.png",
    white: true,
    category: "Team",
    madeFor: "Gryphon Rocketry, recovery hardware fit check",
    purpose:
      "A simplified model of the 24 inch drogue parachute at its packed size. It stands in for the real parachute in the assembly, to check that the recovery system fits inside the airframe.",
    software: "SOLIDWORKS"
  },
  {
    name: "Drogue Shock Cord, Packed",
    image: "images/cad/drogue-cord-packed.png",
    white: true,
    category: "Team",
    madeFor: "Gryphon Rocketry, recovery hardware fit check",
    purpose:
      "A simplified model of the drogue shock cord at its packed size, used to reserve its space inside the airframe during the recovery fit check.",
    software: "SOLIDWORKS"
  },
  {
    name: "Main Parachute, Packed",
    image: "images/cad/main-iris60-packed.png",
    white: true,
    category: "Team",
    madeFor: "Gryphon Rocketry, recovery hardware fit check",
    purpose:
      "A simplified model of the 60 inch main parachute at its packed size. This is the part I flagged as possibly too large in diameter for the 4 inch airframe, so the model lets the team check it before ordering.",
    software: "SOLIDWORKS"
  },
  {
    name: "Main Shock Cord, Packed",
    image: "images/cad/main-cord-packed.png",
    white: true,
    category: "Team",
    madeFor: "Gryphon Rocketry, recovery hardware fit check",
    purpose:
      "A simplified model of the main shock cord at its packed size, used to reserve its space inside the airframe during the recovery fit check.",
    software: "SOLIDWORKS"
  },
  {
    name: "Piranha Line Cutter",
    image: "images/cad/piranha-cutter.png",
    white: true,
    category: "Team",
    madeFor: "Gryphon Rocketry, recovery hardware fit check",
    purpose:
      "A simplified model of the Piranha line cutter, sized to the real part so it can be placed in the recovery assembly and checked for fit.",
    software: "SOLIDWORKS"
  },
  {
    name: "Lap Desk Tile T",
    image: "images/cad/lapdesk-tile-t.png",
    category: "Personal",
    madeFor: "3D-printed folding lap desk, personal project (part LD-01)",
    purpose:
      "One quarter of the lap desk top, 250 × 160 mm. Dovetail tails along the long edge slide into the matching socket tile, a 3 mm skin over a rib grid keeps it stiff and light, and the hinge stub and snap clip under the top carry the folding leg. Two identical copies are printed.",
    software: "SOLIDWORKS"
  },
  {
    name: "Wing",
    image: "images/cad/wing.png",
    category: "Training",
    madeFor: "SOLIDWORKS training",
    purpose:
      "A wing section recreated from an engineering drawing, to practise reading drawings and building a part from an airfoil profile.",
    software: "SOLIDWORKS"
  },
  {
    name: "Vase",
    image: "images/cad/vase.png",
    category: "Training",
    madeFor: "SOLIDWORKS training",
    purpose:
      "A hollow vase modelled as a training exercise in revolved and shelled geometry, designed to be 3D printed.",
    software: "SOLIDWORKS"
  },
  {
    name: "Counterbored Mounting Block",
    image: "images/cad/counterbored-block.png",
    category: "Training",
    madeFor: "SOLIDWORKS practice",
    purpose:
      "A practice part: a filleted block with two counterbored holes, to practise hole features and edge fillets.",
    software: "SOLIDWORKS"
  }
];

/* ------------------------------------------------------------------
   Orthographic drawings for the gimbal. Save each drawing image into
   images/Drawings/ using the file name shown in "image" below
   (.png, .webp or .jpg all work, leave the extension off here).
------------------------------------------------------------------ */

const DRAWINGS = [
  {
    name: "Gimbal Assembly",
    partNo: "GMB-000 Sheet 1",
    image: "images/Drawings/GMB-000-Sheet1-Assembly",
    purpose:
      "The assembly sheet: front, top and right views of the finished gimbal with an 18-item bill of materials. This version came out of design review feedback: detachable servo mounts, horn recesses so the horns sit flush, reachable screws and M3 hardware throughout."
  },
  {
    name: "Gimbal Assembly, Exploded",
    partNo: "GMB-000 Sheet 2",
    image: "images/Drawings/GMB-000-Sheet2-Exploded",
    purpose:
      "The exploded view along the yaw and pitch axes with the nine-step assembly sequence, from melting in the 20 heat-set inserts to fitting the camera cradle. Either servo can be taken out by removing one plate held by four screws."
  },
  {
    name: "Gimbal Assembly, First Version",
    partNo: "GIM-ASSY-01",
    image: "images/Drawings/00-Gimbal-Assembly",
    purpose:
      "The assembly sheet for the whole gimbal: front and right views, the full parts list of 19 items, and the nine-step assembly order. The origin is the wide lens's no-parallax point, where the yaw and pitch axes meet, and the sheet checks that the pitch swing clears the crossbar with about 6 mm to spare."
  },
  {
    name: "Top Plate",
    partNo: "GIM-TOP-PLT-01",
    image: "images/Drawings/02-Top-Plate",
    purpose:
      "The plate the gimbal hangs from. The 6806 yaw bearing drops into a pocket and rests on a 1 mm lip, and the plate carries the cap ring, the yaw servo bracket and placeholder holes for the vibration isolation mount."
  },
  {
    name: "Bearing Cap Ring",
    partNo: "GIM-CAP-RNG-01",
    image: "images/Drawings/03-Bearing-Cap-Ring",
    purpose:
      "Screws onto the top plate boss and stops the 6806 bearing from lifting out. It touches the outer race only, and its bore clears the inner race and hub."
  },
  {
    name: "Yaw Servo Bracket",
    partNo: "GIM-YAW-BRK-01",
    image: "images/Drawings/05-Yaw-Servo-Bracket",
    purpose:
      "Holds the yaw servo above the top plate with its output shaft pointing down the yaw axis. Open sides let the USB cables leave the hub."
  },
  {
    name: "Yaw Hub",
    partNo: "GIM-YAW-HUB-01",
    image: "images/Drawings/01-Yaw-Hub",
    purpose:
      "The rotating centre of the yaw axis. Its journal runs in the 6806 bearing, the servo horn screws to the bridge on top, the flange bolts to the L-bracket crossbar, and the slots pass the camera cables through the middle."
  },
  {
    name: "Hub Clamp Collar",
    partNo: "GIM-HUB-COL-01",
    image: "images/Drawings/04-Hub-Clamp-Collar",
    purpose:
      "Clamps onto the yaw hub above the bearing and holds the gimbal's weight. A slit and an M3 pinch screw let the ring squeeze the hub, and a small step makes it rest on the bearing's inner race only."
  },
  {
    name: "L-Bracket",
    partNo: "GIM-L-BRK-01",
    image: "images/Drawings/06-L-Bracket",
    purpose:
      "The main structure. The crossbar hangs from the yaw hub, the arm holds two 608 bearings on the pitch axis, and the cage holds the pitch servo. The crossbar sits 77 mm above the pitch axis so the cradle can swing underneath."
  },
  {
    name: "Pitch Coupler Hub",
    partNo: "GIM-PIT-CPL-01",
    image: "images/Drawings/07-Pitch-Coupler-Hub",
    purpose:
      "Joins the pitch servo horn to the 8 mm D-shaft, locked with an M3 set screw on the flat. The D-bore is 0.4 mm over the shaft, to be test-printed and adjusted."
  },
  {
    name: "Camera Cradle",
    partNo: "GIM-CRADLE-02",
    image: "images/Drawings/08-Camera-Cradle",
    purpose:
      "Revision 2 of the cradle, updated for the replacement wide camera. The slotted pad sets the wide lens on the no-parallax point, the zoom camera bolts to the floor, and the pitch axis runs through the D-bore."
  }
];
