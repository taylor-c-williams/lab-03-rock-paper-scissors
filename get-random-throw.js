export function getRandomThrow() {
    let randomNumber = Math.round(Math.random() * 2);
    const sideArray = ['rock', 'paper', 'scissors'];
    return sideArray[randomNumber];
}

export function didUserWin(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (player !== computer) {
        return 'nope';
    }
}

