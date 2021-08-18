export function getRandomThrow() {
    let randomNumber = Math.round(Math.random() * 2);
    const sideArray = ['rock', 'paper', 'scissors'];
    return sideArray[randomNumber];
}

export function didUserWin(player, computer) {
    if (player === 'rock' && computer === 'rock') {
        return 'draw';
    } else if (player === 'rock' && computer === 'paper') {
        return 'computer';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'player';
    } else if (player === 'paper' && computer === 'rock') {
        return 'player';
    } else if (player === 'paper' &&  computer === 'paper') {
        return 'draw';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'computer';
    } else if (player === 'scissors' && computer === 'rock') {
        return 'computer';
    } else if (player === 'scissors' &&  computer === 'paper') {
        return 'player';
    } else if (player === 'scissors' && computer === 'scissors') {
        return 'draw';
    }
}

