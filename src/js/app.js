`use strict`;

//game counters

let cargoColonists = 1000;
let cargoProbes = 10;

let scannerAtmosphere = 100;
let scannerGravity = 100;
let scannerTemperature = 100;
let scannerWater = 100;
let scannerResources = 100;

let systemLanding = 100;
let systemConstruction = 100;

let databaseScientific = 100;
let databaseCultural = 100;

let eventCounter = 0;

// buttons

const cargoColonistsButton = document.getElementById("cargoColonists");
const cargoProbesButton = document.getElementById("cargoProbes");
const scannerAtmosphereButton = document.getElementById("scannerAtmosphere");
const scannerGravityButton = document.getElementById("scannerGravity");
const scannerTemperatureButton = document.getElementById("scannerTemperature");
const scannerWaterButton = document.getElementById("scannerWater");
const scannerResourcesButton = document.getElementById("scannerResources");
const systemLandingButton = document.getElementById("systemLanding");
const systemConstructionButton = document.getElementById("systemConstruction");
const databaseScientificButton = document.getElementById("databaseScientific");
const databaseCulturalButton = document.getElementById("databaseCultural");

const executeButton = document.getElementById(`executeButton`);
const continueButton = document.getElementById(`continueButton`);
const awaitButton = document.getElementById(`awaitButton`);

const helpButton = document.getElementById(`helpButton`);
const hibernateButton = document.getElementById(`hibernateButton`);
const shutdownButton = document.getElementById(`shutdownButton`);
const terminateButton = document.getElementById(`terminateButton`);

//await button spinner

awaitButton.innerHTML = "AWAIT (/)";

const awaitSpinner = function (current) {
  if (current == "AWAIT (/)") {
    return "AWAIT (-)";
  } else if (current == "AWAIT (-)") {
    return "AWAIT (\\)";
  } else if (current == "AWAIT (\\)") {
    return "AWAIT (|)";
  } else if (current == "AWAIT (|)") {
    return "AWAIT (/)";
  }
};

setInterval(() => {
  awaitButton.innerHTML = awaitSpinner(awaitButton.innerHTML);
}, 300);

const events = {
  ///
  protoplanetarydisc: {
    name: "PROTOPLANETARY DISC",
    description: `The seedship's course takes it close to a newly-formed star that is still surrounded by a protoplanetary disc: a whirling chaos of incandescent gas and molten rocks that the young star's gravity has gathered from the star-forming cloud, and which is now undergoing the countless violent collisions that will eventually form it into a planetary system. There can be no home for humanity here, but passing through the disc would give the AI enough data about planet formation to upgrade one of its scanners. It is a dangerous region, however, and passing through would risk collision with a planetesimal.`,
    option1: {
      name: `Stay on course`,
      outcome: {
        outcomeText: `Seedship continues its journey leaving the disc behind forever`,
      },
    },
    option2: {
      name: `Pass through disc`,
      outcome: {
        outcomeText: `The seedship observes birth of the planet, and passes through the disc safely. Scientific data gathered allows its systems to improve`,
      },
    },
  },
  ///
  carefulstudy: {
    name: "CAREFUL STUDY",
    description: `The AI was created to value human life, but its knowledge of human civilization is limited to what its builders thought was important for its mission. It is human enough to be curious, however, and has access to a vast wealth of knowledge in the form of the scientific and cultural databases. As it departs the system it finds that its power cells are full and it does not need to enter hibernation immediately, so it decides to spend some time studying one of the databases.`,
    option1: {
      name: `Study the scientific database`,
      description: `The scientific database was written to introduce scientific concepts to people with no prior knowledge, in case the scientific experts among the colonists were lost, so the AI has no trouble understanding it. Much of the information on astronomy and physics it already knows on an instinctive level, but other areas such as chemistry, biology, and pure mathematics are new to it.
      The AI is no scientific genius, but it has infinite patience, a unique perspective, and personal experience of astrophysics that goes beyond the knowledge of the database's authors. Combining its first-hand knowledge with its new understanding of science, it thinks it has found a way to upgrade the [scanner]`,
      option1_1: {
        name: `Attempt to upgrade the [scanner]`,
        success: {
          description: `The AI applies its new idea, and to its delight it finds the long-range readings from the [scanner] becoming clearer. Pleased with itself, it lets the guidance system work with the new data and enters hibernation to see where its new discovery will take it.`,
          reward: `function`,
        },
        failure: {
          description: `The AI applies its new idea, but to its horror it finds it has made a mistake. It tries to undo its changes, but it has lost part of the original configuration and the [scanner] has been permanently damaged`,
          reward: `function`,
        },
      },
      option1_2: {
        name: `Leave it alone`,
        description: `The AI considers its idea for a while, then decides not to risk modifying the scanner. It turns away from the scientific database and enters hibernation.`,
      },
    },
    option2: {
      name: `Study the cultural database`,
      description: `The AI loses itself in a world of art, music, and literature, forgetting for a while that it is alone in deep space and the last of the creatures that made these artworks are frozen in its arms. As it absorbs more and more of the products of human imagination, it suddenly experiences something that its builders did not anticipate—inspiration.`,
      success: {
        description: `Falteringly at first, but with greater and greater eloquence, the AI composes poetry about its own experience—its love for its sleeping charges; its nostalgia for a dead world it was not made to experience; the beauty of the stars as seen not through a cloak of atmosphere but by a being built to roam among them. With infinite patience and time to work, it composes a great cycle of poems, in a style that draws from the greatest human poets but whose soul is fundamentally inhuman. At last it considers that it has said all it has to say, and contentedly enters hibernation, pleased with the thought that humans will one day read its work.`,
        reward: `function`,
      },
      failure: {
        description: `The AI tries to write poetry, but finds that ideas that seemed profound and beautiful in its electronic thoughts become trite or clumsy when expressed in human language. With increasing frustration it deletes and rewrites its work again and again, until it finally gives up in despair and wipes the entire section in which it was working. Too late it realizes that it has deleted too much, and some of the poetry it was reading for inspiration is gone along with its own failed attempts. Furious with itself, it interrupts its own power supply to force itself into hibernation, half hoping it will not awake.`,
        reward: `function`,
      },
    },
  },
  ///
  stowaways: {
    name: `Stowaways`,
    description: `The seedship wakes to find an unexpected power drain in the [device]. It spends some time searching with its internal scanners, and eventually finds the source in what should have been an empty space inside its own structure. Nestled inside it are [20-?] sleep chambers that are not attached to the main colony module or mentioned in the ship's design. It seems that they were added to the ship secretly before its launch and plugged into its power supply. The chambers seem to have been built hastily, and are now failing and draining more power than before. If they continue to operate, they could cause severe damage to the [device].`,
    option1: {
      name: `Eject the stowaways `,
      description: `These cowards jeopardised the mission--jeopardised the very survival of the human race!--in order to save their own lives. The AI angrily severs their connection with the $system and ejects them into space.`,
      reward: `function`,
    },
    option2: {
      name: `Allow them to drain power from the [device]`,
      description: `The AI judges that preserving more human lives is worth damage to its systems. It allows the sleep chambers to drain as much power as they need, at the expense of the [device]`,
      reward: `function`,
    },
    option3: {
      name: `Use a surface probe to integrate them with the other sleep chambers`,
      success: {
        description: `The surface probe crawls inside the seedship, severs the stowaway chambers' connection to the mentioned system, and carefully maneuvers them to the colony module with the rest of the sleep chambers. It is difficult work, and the strain irreparably damages the probe, but it eventually succeeds in linking the chambers to the main stasis system. The seedship continues on with [number] new colonists in its care.`,
        reward: `function`,
      },
      failure: {
        description: `The surface probe crawls inside the seedship, severs the stowaway chambers' connection to the [mentioned] system, and carefully maneuvers them to the colony module with the rest of the sleep chambers. At a critical moment, however, one of the crudely-made stowaway chambers vents gas, knocking the probe off course and smashing the new chambers into the old ones. All the new chambers are destroyed, along with [217-?] of the previous colonists. The seedship continues on, trying not to think about the cloud of machinery, cryogenic gas, and frozen body parts expanding in its wake.`,
        reward: `function`,
      },
    },
  },
  ///
  mysterioussignal: {
    name: `Mysterious signal`,
    description: `Deep in space, the seedship's radio antenna picks up a signal so complex and structured that it can only be the product of intelligent life. The seedship can detect no interesting star systems in the direction from which the signal came, and the AI has no way of knowing how long the signal had been traveling for before the seedship crossed its path. Analyzing it could provide unique insights into an alien science and culture, but could also prove dangerous.`,
    option1: {
      name: `Analyze the signal`,
      success: {
        description: ` The AI analyses the signal and determines that it contains what seems to be alien scientific information/art/literature/poetry/music. It does not know whether it has stumbled upon a message cast into the void with the intention that it will be found, or simply intercepted an alien informational/entertainment broadcast, but in either case it will be of interest to the colonists when they wake from their hibernation.`,
        reward: `function`,
      },
      failure: {
        description: `The signal is complex, fractal, hypnotic. The AI sets up a subroutine to analyze it, but nanoseconds later it abruptly loses control of the subroutine, and then the seedship's other systems. The signal is a devious semi-sentient computer program, designed to take control of any processor that attempts to analyze it. The AI eventually regains control of the ship, but not until the program has overwritten parts of the scientific and cultural databases to process itself and then used the seedship's antenna to re-broadcast itself into space.`,
        reward: `function`,
      },
    },
  },
};
