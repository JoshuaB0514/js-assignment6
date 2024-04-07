//getTimeOfDay
function getTimeOfDay(time) {
    if (isMorning(time)) {
        return "Morning";
    } else if (isAfternoon(time)) {
        return "Afternoon";
    } else {
        return "Evening";
    }
}

// isMorning
function isMorning(time) {
    return time >= 4 && time < 12;
}

// isAfternoon
function isAfternoon(time) {
    return time >= 12 && time < 17;
}

//isEvening
function isEvening(time) {
    return time >= 17 || time < 4;
}

module.exports = { getTimeOfDay, isMorning, isAfternoon, isEvening }