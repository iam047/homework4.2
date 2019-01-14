const spiralMatrix = (R, C, r0, c0) => {
    let result = [],
        way = [[0, 1], [1, 0], [0, -1], [-1, 0]],
        index = 0,
        maxStep = 1,
        curStep = 0;

    while (result.length < R * C) {
        if (0 <= r0 && r0 < R && 0 <= c0 && c0 < C)
            result.push([r0, c0]);

        if (curStep == maxStep) {
            index = (index + 1) % 4
        } else if (curStep == maxStep * 2) {
            index = (index + 1) % 4;
            maxStep++;
            curStep = 0;
        }
        r0 += way[index][0];
        c0 += way[index][1];
        curStep++
    }

    return result
};

console.log(spiralMatrix(5,6,1,4));
