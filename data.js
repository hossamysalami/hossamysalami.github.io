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
      "Prepared a nine-sheet drawing set with an assembly sheet and bill of materials, and modelled the camera cradle, pitch coupler and L-bracket in SOLIDWORKS.",
      "Measured the servo and horn, found the horn face sat 2.3 mm higher than assumed, and corrected the servo mounts before any parts were printed.",
      "Researching a passive vibration isolation mount so motor vibration does not blur the images.",
      "Split the CAD work with a teammate and made short narrated videos explaining how the gimbal moves."
    ],
    tools: ["SOLIDWORKS", "Engineering drawings", "3D printing", "Raspberry Pi", "Component selection"]
  },
  {
    id: "rocketry",
    name: "Gryphon Rocketry",
    short: "University of Guelph Rocketry Club",
    org: "Solid and liquid rocket projects, University of Guelph",
    role: "Team Member, Recovery and Airframe",
    when: "Fall 2026 to present",
    status: "In progress",
    summary:
      "Selecting recovery hardware and modelling the airframe for a high-power solid rocket competing at Launch Canada 2027.",
    competition: [
      "The club is building a high-power solid rocket to compete at Launch Canada 2027.",
      "My work is on the recovery system, which brings the rocket down safely under drogue and main parachutes, and on the airframe CAD."
    ],
    roleText:
      "Team member on the solid and liquid rocket projects. I completed three component selection tasks and then moved on to airframe and recovery CAD in SOLIDWORKS.",
    contributions: [
      "Recovery linkage: compared quick links, swivels, eyebolts and threaded rod, separating working load, shock load and breaking strength, and delivered a costed component list in Canadian dollars.",
      "Parachutes and shock cord: selected the drogue and main parachutes and tubular Kevlar shock cords rated 3600 lb against a 1500 lb requirement.",
      "Flagged that the main parachute's packed diameter may be too large for the 4 inch airframe so the team can check before ordering.",
      "Airframe CAD: modelled the airframe tubes and coupler in SOLIDWORKS, driven by a shared variables file, and checked the model's mass against the team's OpenRocket simulation.",
      "Recovery fit check (in progress): modelling the packed parachutes and shock cords to confirm the full recovery system fits inside the airframe, and proposed how to split that task between three members."
    ],
    tools: ["SOLIDWORKS", "OpenRocket", "Load ratings", "Component selection"]
  }
];

const PERSONAL = [
  {
    name: "Quadcopter",
    status: "In progress",
    summary:
      "A quadcopter with a 3D-printed frame, built to learn how drone structures, propulsion and electronics fit together outside of a club setting."
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
