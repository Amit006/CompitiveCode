let TotalAvailableRoomsCount = 10;
let coupiesRoom = [[5,7],[1,3], [9,10]]

// Nagarro frontEnd interview - > 
// find Empty rooms  Ans should be    -> [4,8] are not booked 

const booked = new Set();
for (const [a, b] of couplesRoom) {
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    for (let i = start; i <= end; i++) {
        booked.add(i);
    }
}

const emptyRooms = [];
for (let i = 1; i <= TotalAvailableRoomsCount; i++) {
    if (!booked.has(i)) {
        emptyRooms.push(i);
    }
}

console.log(emptyRooms); // Output: [4, 8]

