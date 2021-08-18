export function getRandomThrow(){
   
    let randomNumber = Math.round(Math.random() * 2);
    if (randomNumber === 2 ) {
        console.log('two');
    } else if (randomNumber === 0) {
        console.log('zero');
    } else if (randomNumber === 1) {
        console.log('one'); 
        
    }

    console.log(randomNumber);  
}