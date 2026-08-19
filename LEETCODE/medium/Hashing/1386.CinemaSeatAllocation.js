/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {

    // const GroupSeat = [[2, 3, 4, 5], [4, 5, 6, 7], [6, 7, 8, 9]];

    // const Board = Array.from({ length: n+1 }, (e) => new Array(11).fill(1));


    // for (let i = 0; i < reservedSeats.length; i++) {
    //     const [row, column] = reservedSeats[i];
    //     Board[row][column] = 0;
    // }

    // let count = 0;
    // for (let j = 1; j <= n; j++) {
    //     for (let k = 0; k < GroupSeat.length; k++) {
    //         const row = Board[j];
    //         const seat1 = GroupSeat[k][0], seat2 = GroupSeat[k][1], seat3 = GroupSeat[k][2], seat4 = GroupSeat[k][3];
    //         if (row[seat1] && row[seat2] && row[seat3] && row[seat4]) {
    //             count++;
    //             k++;
    //         }

    //     }
    // }


    // return count++;

    // Map approach is best 
    const map = new Map();

    // Collect reserved seats per row
    for (let [row, seat] of reservedSeats) {
        if (!map.has(row)) map.set(row, new Set());
        map.get(row).add(seat);
    }

    let count = 0;

    // Rows without reservations → 2 families each
    count += (n - map.size) * 2;

    // Rows with reservations → check blocks
    for (let [row, seats] of map.entries()) {
        let left = ![2, 3, 4, 5].some(s => seats.has(s));
        let middle = ![4, 5, 6, 7].some(s => seats.has(s));
        let right = ![6, 7, 8, 9].some(s => seats.has(s));

        if (left && right) {
            count += 2;
        } else if (left || middle || right) {
            count += 1;
        }
    }

    return count;

};

console.log(maxNumberOfFamilies(3, [[1, 2], [1, 3], [1, 8], [2, 6], [3, 1], [3, 10]])); // Output: 4
console.log(maxNumberOfFamilies(2, [[2, 1], [1, 8], [2, 6]])); // Output: 2