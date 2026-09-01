var minMoves = function (classroom, energy) {
    const rows = classroom.length, cols = classroom[0].length;
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];

    let start = null;
    const litter = [];
    for (let r=0; r<rows; r++) {
        for (let c=0; c<cols; c++) {
            if (classroom[r][c] === "S") start = [r,c];
            if (classroom[r][c] === "L") litter.push([r,c]);
        }
    }
    const fullMask = (1 << litter.length) - 1;

    const litterMap = new Map();
    litter.forEach(([lr,lc], idx) => litterMap.set(`${lr},${lc}`, idx));

    const seen = Array.from({length:rows},()=>Array.from({length:cols},()=>Array(fullMask+1).fill(-1)));

    const queue = [[start[0], start[1], 0, energy, 0]];
    let head = 0;

    while (head < queue.length) {
        const [r,c,mask,e,steps] = queue[head++];

        if (mask === fullMask) return steps;
        if (seen[r][c][mask] >= e) continue;
        seen[r][c][mask] = e;

        for (const [dr,dc] of directions) {
            const nr = r+dr, nc = c+dc;
            if (nr<0||nr>=rows||nc<0||nc>=cols) continue;
            if (classroom[nr][nc] === "X") continue;

            let ne = e-1;
            if (ne < 0) continue;

            let newMask = mask;
            const key = `${nr},${nc}`;
            if (litterMap.has(key)) newMask |= (1 << litterMap.get(key));
            if (classroom[nr][nc] === "R") ne = energy;

            queue.push([nr,nc,newMask,ne,steps+1]);
        }
    }
    return -1;
};


console.log(minMoves(["L.S", "RXL"], 3)); // Output: -1
console.log(minMoves(["LS", "RL"], 4)); // Output: 4