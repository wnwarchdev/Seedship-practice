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

const events = {
  name: "PROTOPLANETARY DISC",
  description: `The seedship's course takes it close to a newly-formed star that is still surrounded by a protoplanetary disc: a whirling chaos of incandescent gas and molten rocks that the young star's gravity has gathered from the star-forming cloud, and which is now undergoing the countless violent collisions that will eventually form it into a planetary system. There can be no home for humanity here, but passing through the disc would give the AI enough data about planet formation to upgrade one of its scanners. It is a dangerous region, however, and passing through would risk collision with a planetesimal.`,
};
