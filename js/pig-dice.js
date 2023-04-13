
const play = () => {
    let game = 0;
    let die = roll();
    if(die == 1) return game;
    while(die != 1) {
        game += die
        die = roll();
    }
    console.log(game)
    return game;
}

const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
}