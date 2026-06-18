/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
    let hPos, mPos, rem, com;

    hPos = 30 * hour;
    mPos = 6 * minutes;

    rem = Math.abs(mPos - hPos);

    com = hour === 12 ? 0 : hour > 12 ? hour - 12 : hour;

    const sub = 30 / (60 / minutes);
    rem = mPos < hPos ? rem + sub : Math.abs(rem - sub);

    return Math.min(rem, 360 - rem);
};

// 180 - 90 = 90 - 15 = 75

// 60 % 30 = 2(90 / 2) =

console.log(angleClock(12, 30)); // 165
console.log(angleClock(3, 30)); // 75
console.log(angleClock(3, 15)); // 7.5