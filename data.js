/* ------------------------------------------------------------------
   All the content for the Team Projects, Personal Projects and CAD
   pages lives in this file. Edit the text here; the pages update.

   TO ADD A NEW CAD PART:
   1. Save the image into images/cad/ (any size or shape is fine,
      the gallery fits every image into the same 4:3 frame).
   2. Copy one of the { ... } blocks in CAD below and change the text.
      "category" must be "Team" , "Personal" or "Training".
      Optional: "project" (e.g. "lapdesk") puts the part on that project's page;
      "projectOnly: true" keeps it off the CAD gallery, "galleryOnly: true" off the project page.
------------------------------------------------------------------ */

// The order project cards appear in on the home page.
const HOME_ORDER = ["aerospace", "lapdesk", "tbwc", "rocketry", "cubics"];

const TEAM = [
  {
    id: "tbwc",
    club: "ENGG*1100",
    name: "Teddy Bear Wheelchair Challenge",
    short: "TBWC",
    org: "ENGG*1100 Engineering and Design I, University of Guelph",
    role: "Project Manager",
    when: "October to November 2026",
    status: "Completed: 3rd in section",
    summary:
      "Section 19, Team 07: an autonomous, Arduino-controlled wheelchair styled as the \"Teddy's Honey\" pickup truck. It carried a teddy bear through a timed ramp course, launched a yogurt cup into a bin, and placed 3rd in our section.",
    // Card picture on the Team Projects page.
    image: "images/tbwc/team.jpg",
    blurb: "Autonomous Arduino wheelchair built with a five-person team as project manager. Placed 3rd in our section.",
    chips: ["3rd in section", "9.22 s run"],
    // Shown first, beside the title on the project page.
    lead: { image: "images/tbwc/team.jpg", caption: "Section 19, Team 07 with the finished TBWC" },
    video: "images/tbwc/truck-360.mp4",
    poster: "images/tbwc/truck-360-poster.jpg",
    videoCaption: "360° view of the finished \"Teddy's Honey\" TBWC, S19-07",
    gallery: [
      { image: "images/tbwc/truck.jpg", caption: "The finished TBWC: \"Teddy's Honey\" pickup truck" }
    ],
    facts: [
      ["3rd", "in Section 19"],
      ["9.22 s", "Accessibility Speed Run, 26/30"],
      ["26/30", "Recycling Delivery Mission"],
      ["1200 g", "total mass, full marks (20/20)"]
    ],
    roleText:
      "Project manager and team member of a five-person team. I scheduled and ran our meetings, kept the team logbook, and tracked deadlines and design changes from concept to Challenge Day.",
    steps: [
      {
        title: "Problem",
        text: [
          "The Teddy Bear Wheelchair Challenge is the first-year design project in ENGG*1100 at the University of Guelph. Each team designs and builds an autonomous, Arduino-controlled wheelchair that carries a teddy bear through a timed ramp course (the Accessibility Speed Run) and delivers a recyclable item over a 32 cm rim into a bin (the Recycling Delivery Mission).",
          "It also had to stay light, since mass was worth 20 of the 80 performance points, pass a static tipping test on a 30° slope, and pass every teddy bear security and comfort check. As project manager, I had to keep five first-years working to one schedule while all of it came together."
        ]
      },
      {
        title: "Process",
        list: [
          "Picked the layout with weighted decision matrices: rear-wheel drive scored 7.70 against 6.90 for front-wheel drive, and a rubber-band catapult scored 7.95 against 6.80 for a tilting tray, mostly on mass and ease of building.",
          "The build fought back. The wheels kept slipping off and only one axle was long enough for the planned width, so we reworked the chassis and wedged rubber bands into the wheel and pulley holes to take up the play.",
          "The servo horn holes were too small for Meccano bolts. We tried a Meccano strip linkage, a twist tie and a string pull to connect it.",
          "We switched from the tilting tray to the catapult, reconsidered the tray, and kept the catapult once it fired reliably.",
          "After a slow start we moved from online meetings to in-person build sessions in the engineering building. The prototype was finished the night before the demo, with a fix made seconds before it ran.",
          "The ultrasonic sensor gave inaccurate readings and failed twice, so we switched to an IR sensor that detects a black tape line and fires the servo after a timed delay.",
          "The whole drivetrain ran on a single rubber band with no spare, and the right band was only found the night before the challenge."
        ]
      },
      {
        title: "Solution",
        list: [
          "A four-wheel Meccano chassis with rear-wheel drive: one DC motor drives the rear axle through a pulley and rubber-band belt, controlled by an Arduino Uno and an L298N motor controller.",
          "A servo-released rubber-band catapult: rubber bands pre-tension the arm, a single band hooked to an SG90 micro servo holds it back, and when the servo turns, the arm fires a yogurt cup toward the bin.",
          "An IR sensor that spots a black tape line and triggers the launch after a timed delay.",
          "A seat cut from half a tissue box with side rests, which passed every safety check without a seatbelt.",
          "The \"Teddy's Honey\" pickup truck shell: bright yellow body, light blue windows, honey jar and honeycomb graphics, and an S19-07 plate."
        ]
      },
      {
        title: "Results (Challenge Day, Nov 27, 2026)",
        list: [
          "3rd place in Section 19.",
          "Accessibility Speed Run: 9.22 s on the first attempt, 26/30.",
          "Recycling Delivery Mission: 26/30. The yogurt cup landed in the bin on the third attempt, minus a 4-point contact penalty, after scores of 18 and 14 and code tuning between attempts.",
          "Mass: 1200 g, full marks (20/20). Passed the static tipping test and every teddy bear security and comfort test."
        ]
      },
      {
        title: "What I did",
        list: [
          "Project manager: scheduled and ran team meetings, kept the team logbook, and tracked deadlines and design changes.",
          "Built the WBS, RACI role chart, Gantt chart and a risk register of 8 risks with mitigations and outcomes.",
          "Built the front axle and front wheels of the chassis.",
          "Helped brainstorm and sketch the delivery concepts (tilting tray, trapdoor, sliding pusher) and built the weighted decision matrices for the chassis and delivery mechanism.",
          "Designed the dimensioned cutout template for the pickup truck shell and helped cut the body panels.",
          "Ran the static tipping test, and reviewed the Arduino code during sensor troubleshooting.",
          "Wrote the Design Summary and Project Management sections of the team reports."
        ]
      },
      {
        title: "What I learned",
        list: [
          "Test sensors early and keep a fallback: the ultrasonic sensor failed twice before IR line detection worked.",
          "Keep spares of critical parts: one rubber band was a single point of failure for the whole drivetrain.",
          "Decision matrices help, but test results make the final call: we only settled on the catapult once it fired reliably.",
          "Timing-based triggers depend on speed: the TBWC ran slower on Challenge Day, so the release delay had to be tuned live between attempts."
        ]
      },
      {
        title: "Status",
        list: [
          "The challenge is complete. The final design report is due Nov 29, 2026."
        ]
      }
    ],
    tools: ["Project management (WBS, RACI, Gantt, risk register)", "Decision matrices", "Prototyping and testing", "Arduino and sensors", "Mechanical assembly", "Technical writing"]
  },
  {
    id: "aerospace",
    club: "Gryphon Aerospace",
    image: "images/cad/gimbal-assembly.png",
    blurb: "Pitch and yaw gimbal for the UAV's search and 10x zoom cameras, designed start to finish.",
    chips: ["−12.7% modelled mass", "90° / 180°"],
    name: "Two-axis Camera Gimbal",
    short: "UAV camera and gimbal system",
    org: "Gryphon Aerospace Club, Flight Systems Team, University of Guelph",
    role: "Camera Systems Lead",
    video: "images/video/gimbal.mp4",
    poster: "images/video/gimbal-poster.jpg",
    videoCaption: "Two-axis camera gimbal: explode, pitch 0–90°, yaw ±90°",
    facts: [
      ["−12.7%", "modelled mass in 7075-T6, 469 g to 410 g"],
      ["90° / 180°", "pitch and yaw range"],
      ["18", "items in the bill of materials"],
      ["4 screws", "to swap either servo"]
    ],
    when: "Fall 2026 to present",
    status: "In progress",
    summary:
      "Leading the camera system on the club's UAV for the 2027 AEAC student competition, from camera selection to a two-axis gimbal.",
    roleText:
      "Camera Systems Lead. I am responsible for the camera system from requirements and hardware selection through integration, I run the camera work day to day, and I delegate tasks within it.",
    steps: [
      {
        title: "Problem",
        text: [
          "The Flight Systems team is building a UAV for the 2027 AEAC student competition. The mission: the drone must find deer from the air and read their small ear tags.",
          "That needs a camera system that can search a wide area and also read a small tag up close, on a mount that can point the cameras and still be taken apart for servicing."
        ]
      },
      {
        title: "Process",
        list: [
          "Compared several camera architectures, worked out how far away each camera can read a tag, and checked that both work with the onboard Raspberry Pi.",
          "When purchasing rules ruled out the original overseas supplier, found a replacement camera from a US distributor and updated the mount design to suit it.",
          "Prepared a nine-sheet drawing set with an assembly sheet and bill of materials, and modelled every gimbal part in SOLIDWORKS.",
          "Measured the servo and horn, found the horn face sat 2.3 mm higher than assumed, and corrected the servo mounts before any parts were printed.",
          "Took the design through design review and reworked it on the feedback."
        ]
      },
      {
        title: "Solution",
        list: [
          "A two-camera system: a wide-angle camera for search and a 10x optical zoom camera for reading tags.",
          "A two-axis, servo-driven gimbal carrying both cameras, with both rotation axes through the wide lens's no-parallax point.",
          "After review: detachable servo mounts so either servo comes out with four screws, flush horn recesses, reachable M3 screws, and the modelled mass in 7075-T6 aluminium cut from 469 g to 410 g (12.7%).",
          "The updated drawing set GMB-000 (assembly with an 18-item BOM, and an exploded view with a nine-step assembly sequence), short narrated videos, and a 34 second animation of how it assembles and moves."
        ]
      },
      {
        title: "Status and next steps",
        list: [
          "The parts went to print in PETG for fit and motion testing.",
          "Researching a passive vibration isolation mount so motor vibration does not blur the images."
        ]
      }
    ],
    tools: ["SOLIDWORKS", "Engineering drawings", "3D printing", "Raspberry Pi", "Component selection"]
  },
  {
    id: "rocketry",
    club: "Gryphon Rocketry",
    image: "images/cad/airframe-coupler.png",
    blurb: "Recovery hardware and airframe CAD for a high-power solid rocket at Launch Canada 2027.",
    chips: ["3600 lb cords", "SOLIDWORKS"],
    name: "Gryphon Rocketry",
    short: "University of Guelph Rocketry Club",
    org: "Solid and liquid rocket teams, University of Guelph",
    role: "Member, Solid and Liquid Rocket Teams",
    when: "Fall 2026 to present",
    status: "In progress",
    summary:
      "Member of both the solid and liquid rocket teams. On the solid rocket for Launch Canada 2027, I select recovery hardware and model the airframe.",
    roleText:
      "Member of the solid and liquid rocket teams. I completed three component selection tasks and then moved on to airframe and recovery CAD in SOLIDWORKS.",
    steps: [
      {
        title: "Problem",
        text: [
          "The club runs two rocket teams, one building a solid rocket and one building a liquid rocket, and I'm a member of both. The solid team is building a high-power rocket to compete at Launch Canada 2027.",
          "My part is the recovery system, which brings the rocket down safely under drogue and main parachutes. Its hardware has to survive the shock of each parachute opening and fit inside the 4 inch airframe."
        ]
      },
      {
        title: "Process",
        list: [
          "Recovery linkage: compared quick links, swivels, eyebolts and threaded rod, keeping working load, shock load and breaking strength separate.",
          "Compared parachutes and shock cords against the loads the rocket's recovery has to take.",
          "Modelled the airframe tubes and coupler in SOLIDWORKS, driven by a shared variables file, and checked the model's mass against the team's OpenRocket simulation.",
          "Modelled the packed parachutes, shock cords and line cutter to check that the full recovery system fits inside the airframe, and proposed how to split that task between three members."
        ]
      },
      {
        title: "Solution",
        list: [
          "A costed recovery linkage component list in Canadian dollars.",
          "Drogue and main parachutes, and tubular Kevlar shock cords rated 3600 lb against a 1500 lb requirement.",
          "Flagged that the main parachute's packed diameter may be too large for the 4 inch airframe, so the team can check it before ordering."
        ]
      },
      {
        title: "Status and next steps",
        list: [
          "The recovery fit check in the airframe CAD is in progress."
        ]
      }
    ],
    tools: ["SOLIDWORKS", "OpenRocket", "Load ratings", "Component selection"]
  },
  {
    id: "cubics",
    club: "CUBICS",
    image: "images/cubics/fit-model.png",
    gallery: [
      { image: "images/cubics/fit-model.png", caption: "The team's rough 3U fit model, not a final design" }
    ],
    blurb: "Named as Mechanisms and CAD Engineer on the University of Guelph CubeSat application to the CSA.",
    chips: ["3U CubeSat", "Drag sail"],
    name: "CUBICS CubeSat",
    short: "University of Guelph CubeSat team",
    org: "Mechanical and Thermal sub-team, University of Guelph",
    role: "Mechanisms and CAD Engineer (proposed)",
    when: "Fall 2026",
    status: "Application submitted, awaiting CSA decision",
    summary:
      "A student team applying to the Canadian Space Agency's Canadian CubeSat Project with a 3U satellite that would study how leaves lose heat in orbit.",
    roleText:
      "I'm named in the submitted application as Mechanisms and CAD Engineer on the Mechanical and Thermal sub-team, and my narrative CV is part of the submission.",
    steps: [
      {
        title: "Problem",
        text: [
          "CUBICS is the University of Guelph's student CubeSat team. It applied to the Canadian Space Agency's Canadian CubeSat Project with a 3U satellite that would measure how model leaves lose heat in the still air of orbit, research that supports growing plants in space.",
          "If selected, the satellite has to bring itself down within five years, generate its own power, and fit everything inside a 3U frame."
        ]
      },
      {
        title: "Process, if selected",
        list: [
          "The project would start in 2027, with launch planned for 2030–2031.",
          "A sail deployment prototype and a cold deployment of one solar wing by the preliminary design review (2028).",
          "Vibration testing of the mechanisms before the critical design review (2029)."
        ]
      },
      {
        title: "Planned solution, if selected",
        list: [
          "A team-built drag sail of about 1 m² that deorbits the satellite within five years.",
          "Two deployable solar wings, built with the power sub-team.",
          "Layout CAD that fits the payload, bus and boards inside the 3U frame."
        ]
      }
    ]
  }
];

const PERSONAL = [
  {
    id: "lapdesk",
    blurb: "Height-adjustable desk that folds flat, with every structural part printed at home.",
    chips: ["240–320 mm", "48.5 mm folded"],
    name: "3D-Printed Folding Lap Desk",
    status: "Designed, ready to print",
    when: "Fall 2026",
    image: "images/lapdesk/parts/assembly-iso.png",
    summary:
      "A height-adjustable lap desk that folds flat, designed so every structural part prints on a home 3D printer and the only bought parts are about $19 of bolts and nuts.",
    facts: [
      ["240–320 mm", "height, five settings"],
      ["48.5 mm", "thick when folded"],
      ["11", "printed part designs"],
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
        title: "Process",
        list: [
          "My first version joined the tiles with dovetails and tapered wedge keys. I reworked the joint into the spline design, so both tiles share one seam profile with no tails or key pockets.",
          "Modelled the tiles, splines and end plug in SOLIDWORKS and produced a 10-sheet drawing set: an assembly sheet with a 15-line bill of materials and assembly notes, plus a dimensioned drawing for every printed part.",
          "Planned the build order on the drawings, from joining the top to fitting the hinges, collars and twist rings, and the folding sequence.",
          "Kept the bought parts to standard M5 bolts, lock nuts and washers from Canadian Tire, about $19 CAD, with the rest printed in PETG."
        ]
      },
      {
        title: "Solution",
        list: [
          "Top: four 250 × 160 mm tiles. Every seam edge has the same V-shaped socket groove, and printed splines slide into the grooves to lock the tiles together: long splines in from each end until they meet in the middle, short splines in from the front and back, then four end plugs close off the grooves. A 3 mm skin over a rib grid keeps the top stiff and light at 16 mm thick.",
          "Two tile designs: Tile S is a mirror of Tile T, and two of each are printed.",
          "Height: each leg is a Ø20 inner leg sliding in a Ø25 sleeve. A twist ring carries a peg that runs up a groove, then turns 90° into one of five notches, giving 240 to 320 mm in 20 mm steps.",
          "Folding: the legs pivot on M5 bolts through hinge stubs under the top. A sliding collar locks each hinge upright and rests on a bump band on the sleeve; push it down past the band, fold the leg in, and it clips under the top. Folded, the desk is 48.5 mm thick.",
          "Designed for printing: 0.3 mm clearance between the splines and grooves, a 0.5 mm chamfer on the seam faces to allow for elephant's foot, no support material, and print settings on every drawing."
        ]
      },
      {
        title: "Status and next steps",
        list: [
          "The design and drawings are complete.",
          "Next: print a 50 mm seam slice and a spline offcut to check the 0.3 mm fit, then print the full set, assemble, and test the height lock and folding."
        ]
      }
    ],
    gallery: [
      { image: "images/lapdesk/parts/assembly-iso.png", caption: "In use, set to 280 mm" },
      { image: "images/lapdesk/parts/assembly-folded.png", caption: "Folded to 240 mm, seen from below" },
      { image: "images/lapdesk/parts/sw-tile-t.png", caption: "Tile T in SOLIDWORKS" }
    ],
    // Parts that are not in the CAD gallery yet (3D views from the drawing set)
    parts: [
      { name: "Leg Sleeve", partNo: "LD-04", image: "images/lapdesk/parts/leg-sleeve.png" }
    ],
    drawings: [
      { name: "Lap Desk Assembly", partNo: "LD-00", image: "images/lapdesk/LD-00-Assembly.png" },
      { name: "Tile T (right-hand)", partNo: "LD-01", image: "images/lapdesk/LD-01-Tile-T.png" },
      { name: "Tile S (left-hand)", partNo: "LD-02", image: "images/lapdesk/LD-02-Tile-S.png" },
      { name: "Splines and End Plug", partNo: "LD-03", image: "images/lapdesk/LD-03-Splines.png" },
      { name: "Leg Sleeve", partNo: "LD-04", image: "images/lapdesk/LD-04-Leg-Sleeve.png" },
      { name: "Inner Leg", partNo: "LD-05", image: "images/lapdesk/LD-05-Inner-Leg.png" },
      { name: "Foot Bar", partNo: "LD-06", image: "images/lapdesk/LD-06-Foot-Bar.png" },
      { name: "Sliding Collar", partNo: "LD-07", image: "images/lapdesk/LD-07-Sliding-Collar.png" },
      { name: "Twist Ring", partNo: "LD-08", image: "images/lapdesk/LD-08-Twist-Ring.png" },
      { name: "Lock Peg", partNo: "LD-09", image: "images/lapdesk/LD-09-Lock-Peg.png" }
    ],
    tools: ["SOLIDWORKS", "Engineering drawings", "Design for 3D printing", "Mechanism design", "PETG"]
  },
  {
    name: "Quadcopter",
    status: "Planned",
    summary:
      "A quadcopter with a 3D-printed frame, to learn how drone structures, propulsion and electronics fit together outside of a club setting."
  },
  {
    name: "RC Plane",
    status: "Planned",
    summary:
      "A radio-controlled plane I plan to design and build myself, to put wing design, weight and balance, and control surfaces into practice on something that has to fly."
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
    // One gallery tile for the five recovery stand-in models; each one is shown on the rocketry page.
    name: "Recovery Fit-Check Models",
    image: "images/cad/main-iris60-packed.png",
    white: true,
    category: "Team",
    galleryOnly: true,
    project: "rocketry",
    madeFor: "Gryphon Rocketry, recovery hardware fit check",
    purpose:
      "Five simplified models of the recovery hardware at its packed size: the 24 inch drogue and 60 inch main parachutes, both Kevlar shock cords, and the Piranha line cutter. They stand in for the real parts in the airframe assembly to check that the whole recovery system fits, including the main parachute I flagged as possibly too wide for the 4 inch airframe.",
    software: "SOLIDWORKS"
  },
  {
    name: "Drogue Parachute, Packed",
    image: "images/cad/drogue-24-packed.png",
    white: true,
    category: "Team",
    projectOnly: true,
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
    projectOnly: true,
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
    projectOnly: true,
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
    projectOnly: true,
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
    projectOnly: true,
    madeFor: "Gryphon Rocketry, recovery hardware fit check",
    purpose:
      "A simplified model of the Piranha line cutter, sized to the real part so it can be placed in the recovery assembly and checked for fit.",
    software: "SOLIDWORKS"
  },
  {
    name: "Lap Desk Tile T",
    image: "images/lapdesk/parts/sw-tile-t.png",
    category: "Personal",
    project: "lapdesk",
    madeFor: "3D-printed folding lap desk, personal project (part LD-01)",
    purpose:
      "One quarter of the lap desk top, 250 × 160 mm. Both seam edges carry the V-shaped socket groove that the splines lock into, a 3 mm skin over a rib grid keeps it stiff and light, and the hinge stub and snap clip carry the folding leg. Two are printed.",
    software: "SOLIDWORKS"
  },
  {
    name: "Lap Desk Tile S",
    image: "images/lapdesk/parts/sw-tile-s.png",
    category: "Personal",
    project: "lapdesk",
    madeFor: "3D-printed folding lap desk, personal project (part LD-02)",
    purpose:
      "The mirror image of Tile T, so the hinge stub and clip land on the other side of the desk. Two are printed, and the four tiles together make the 500 × 320 mm top.",
    software: "SOLIDWORKS"
  },
  {
    name: "Lap Desk Long Spline",
    image: "images/lapdesk/parts/sw-spline-l.png",
    category: "Personal",
    project: "lapdesk",
    madeFor: "3D-printed folding lap desk, personal project (part LD-03A)",
    purpose:
      "A 229.5 mm V-profile key that slides into the long seam from each end until the two meet in the middle, locking the tile pairs together with 0.3 mm clearance.",
    software: "SOLIDWORKS"
  },
  {
    name: "Lap Desk Short Spline",
    image: "images/lapdesk/parts/sw-spline-s.png",
    category: "Personal",
    project: "lapdesk",
    madeFor: "3D-printed folding lap desk, personal project (part LD-03B)",
    purpose:
      "A 134.5 mm version of the spline that slides in from the front and back edges until it stops against the long splines, locking the short seam.",
    software: "SOLIDWORKS"
  },
  {
    name: "Lap Desk End Plug",
    image: "images/lapdesk/parts/sw-end-plug.png",
    category: "Personal",
    project: "lapdesk",
    madeFor: "3D-printed folding lap desk, personal project (part LD-03C)",
    purpose:
      "A 20 mm plug pushed into the outer end of each of the four grooves to hold the splines in. It is 0.1 mm oversize for a snug push fit.",
    software: "SOLIDWORKS"
  },
  {
    name: "Lap Desk Inner Leg",
    image: "images/lapdesk/parts/sw-inner-leg.png",
    category: "Personal",
    project: "lapdesk",
    madeFor: "3D-printed folding lap desk, personal project (part LD-05)",
    purpose:
      "The Ø20 tube that slides inside each leg sleeve to set the desk height. A twist-ring peg runs up the vertical groove, then turns 90° into one of the five notches to lock the desk at 240 to 320 mm in 20 mm steps. The bottom is glued into the foot bar.",
    software: "SOLIDWORKS"
  },
  {
    name: "Lap Desk Foot Bar",
    image: "images/lapdesk/parts/sw-foot-bar.png",
    category: "Personal",
    project: "lapdesk",
    madeFor: "3D-printed folding lap desk, personal project (part LD-06)",
    purpose:
      "Joins the bottoms of a pair of inner legs so each side of the desk stands as one frame. The two sockets take the legs, glued with their grooves facing the same way so both height locks line up.",
    software: "SOLIDWORKS"
  },
  {
    name: "Lap Desk Sliding Collar",
    image: "images/lapdesk/parts/sw-sliding-collar.png",
    category: "Personal",
    project: "lapdesk",
    madeFor: "3D-printed folding lap desk, personal project (part LD-07)",
    purpose:
      "The fold lock. It slides over the hinge stub and the top of the leg sleeve and rests on the sleeve's bump band: pushed up, it holds the leg upright; pushed down past the band, the leg can fold. Both inside edges are chamfered so it slides on smoothly.",
    software: "SOLIDWORKS"
  },
  {
    name: "Lap Desk Twist Ring",
    image: "images/lapdesk/parts/sw-twist-ring.png",
    category: "Personal",
    project: "lapdesk",
    madeFor: "3D-printed folding lap desk, personal project (part LD-08)",
    purpose:
      "The height lock. It sits on the bottom of the leg sleeve and carries the lock peg through the sleeve's window into the inner leg. Turning it 90° moves the peg from the groove into a notch to lock the height, and the tab shows which way it is set.",
    software: "SOLIDWORKS"
  },
  {
    name: "Lap Desk Lock Peg",
    image: "images/lapdesk/parts/sw-lock-peg.png",
    category: "Personal",
    project: "lapdesk",
    madeFor: "3D-printed folding lap desk, personal project (part LD-09)",
    purpose:
      "A Ø6 × 7.2 mm peg pressed into the twist ring's hole so it sits flush. Its chamfered tip runs in the inner leg's groove and drops into a notch to hold the desk height, stopping just short of the notch floor so it doesn't rub.",
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
