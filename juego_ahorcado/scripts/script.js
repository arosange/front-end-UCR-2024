const words = ["camion", "laptop", "futbol", "sillon", "camisa"];

let selectedWord=" ";

let hiddenWordArray= [];

let remainingAttemps= 5;

let guessedLetters= [];

let wrongGuesses= 0;

const hangManImag= document.getElementById("hangman-image");
const hiddenWordElement= document.getElementById("hidden-word");
const letterInput= document.getElementById("letter-input");
const guessButton= document.getElementById("guess-btn");
const remainingAttempsElement= document.getElementById("remaining-attemps");
const messageElement= document.getElementById("message");
const restartButton= document.getElementById("restart-btn");


function startGame(){
    selectedWord= words [ Math.floor (Math.random()* words.length)];
    console.log ("Palabra seleccionada: ", selectedWord);
//inicializando la palabra oculta con guiones
    hiddenWordArray= Array (selectedWord.length).fill("_");
    hiddenWordElement.textContent= hiddenWordArray.join(" ");
    remainingAttemps= 5;
    wrongGuesses=0;
    guessedLetters= [];
    hangManImag.src="../media/1.jpeg";
    remainingAttempsElement.textContent= ' ';
    letterInput.focus();
    restartButton.style.display= 'none';
    
}

//Funcion para manejar el intento de adivinar una letra

function guessLetters(){
    const guessedLetter= letterInput.value.toLowerCase();

    if(!guessedLetter ||  guessedLetter.length !==1 || guessedLetters.includes(guessedLetter)){
        
        messageElement.textContent='Por favor ingresa una letra valida';
        letterInput.value='';
        return;
        
    }

    guessedLetters.push(guessedLetter);
    letterInput.value= '';

    //Verificar si la letra esta en la palabra 

    if (selectedWord.includes(guessedLetter)){
        //actualizamos la palabra oculta 

        for (let i = 0; i< selectedWord.length; i++){
            if (selectedWord[i]=== guessedLetter){
                hiddenWordArray[i]= guessedLetter;
            }
        }

        hiddenWordElement.textContent= hiddenWordArray.join(' ');
        // verificar si se gano 

        if (!hiddenWordArray.includes('_')){
            messageElement.textContent= "Felicidades, has ganado";
            restartButton.style.display="inline";
        }
    }
        else {
            wrongGuesses++;
            remainingAttemps--;
            hangManImag.src=`../media/hangman${wrongGuesses}.jpeg`;
            remainingAttempsElement.textContent= `Errores restante ${remainingAttemps}`;

            //verificar si he perdido

            if (remainingAttemps === 0) {
                messageElement.textContent= `Lo siento has perdido, la palabra correcta era ${selectedWord}`;
                restartButton.style.display="inline";
            }
        }
    

}

restartButton.addEventListener('click', startGame);
guessButton.addEventListener('click', guessLetters );

startGame();