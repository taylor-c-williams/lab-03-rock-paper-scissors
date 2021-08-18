export function getRandomThrow(){
   
    let randomNumber = Math.round(Math.random() * 2);

    if (randomNumber === 2) {
        return 'scissors';
    } 
     if (randomNumber === 1) {
        return 'paper';
    } 
    if (randomNumber === 0) {
       return 'rock';     
    }
}
