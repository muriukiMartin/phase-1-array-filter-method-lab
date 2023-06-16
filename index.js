// Code your solution here
function findMatching(drivers, match) {
    let marchedDrivers = drivers.filter(marchedDrivers => marchedDrivers.toLowerCase() === match.toLowerCase());
    return marchedDrivers;
}

function fuzzyMatch(drivers, letters) {
    let marchedDrivers = drivers.filter(marchedDrivers => marchedDrivers.slice(0,2) === letters.slice(0,2));
    return marchedDrivers;
}

function matchName(drivers, name) {
    let marchedDrivers = drivers.filter(marchedDrivers => marchedDrivers.name === name);
    return marchedDrivers;
}