export function getRandomThrow(){
   
    let randomNumber = Math.round(Math.random() * 2);
    const sideArray = ['rock','paper', 'scissors']
    console.log (sideArray[randomNumber])

}

