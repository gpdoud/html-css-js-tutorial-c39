let census = [
    18897109, 12828837, 9461105, 6371773, 5965343,
    5946800, 5582170, 5564635, 5268860, 4552402,
    4335391, 4296250, 4224851, 4192887, 3439809,
    3279833, 3095313, 2812896, 2783243, 2710489,
    2543482, 2356285, 2226009, 2149127, 2142508,
    2134411
]

const sum_census = () => {
    counter = 1;
    while (true) {
        let sum = 0;
        if (counter & 0b1) sum += census[0];
        if (counter & 0b10) sum += census[1];
        if (counter & 0b100) sum += census[2];
        if (counter & 0b1000) sum += census[3];
        if (counter & 0b10000) sum += census[4];
        if (counter & 0b100000) sum += census[5];
        if (counter & 0b1000000) sum += census[6];
        if (counter & 0b10000000) sum += census[7];
        if (counter & 0b100000000) sum += census[8];
        if (counter & 0b1000000000) sum += census[9];
        if (counter & 0b10000000000) sum += census[10];
        if (counter & 0b100000000000) sum += census[11];
        if (counter & 0b1000000000000) sum += census[12];
        if (counter & 0b10000000000000) sum += census[13];
        if (counter & 0b100000000000000) sum += census[14];
        if (counter & 0b1000000000000000) sum += census[15];
        if (counter & 0b10000000000000000) sum += census[16];
        if (counter & 0b100000000000000000) sum += census[17];
        if (counter & 0b1000000000000000000) sum += census[18];
        if (counter & 0b10000000000000000000) sum += census[19];
        if (counter & 0b100000000000000000000) sum += census[20];
        if (counter & 0b1000000000000000000000) sum += census[21];
        if (counter & 0b10000000000000000000000) sum += census[22];
        if (counter & 0b100000000000000000000000) sum += census[23];
        if (counter & 0b1000000000000000000000000) sum += census[24];
        if (counter & 0b10000000000000000000000000) sum += census[25];
        console.log(`Counter is ${counter}; Sum is ${sum}`);
        counter++;
    }
    return sum;
}

const loaded = () => {
    console.log(sum_census());
}