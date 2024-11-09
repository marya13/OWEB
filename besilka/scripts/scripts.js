
const zborLista = [
    { word: "Books" },
    { word: "Chair" },
    { word: "Dance" },
    { word: "House" },
    { word: "Piano" },
    { word: "Table" },
    { word: "River" },
    { word: "Apple" },
    { word: "Storm" },
    { word: "Grace" }
];

const tastaturaDiv = document.querySelector(".tastatura");
const wordDisplay = document.querySelector(".zbor-display");
const guessCountElement = document.querySelector(".pogodoci-tekst strong");
const gameOverScreen = document.querySelector(".izgubil");
const gameWonScreen = document.querySelector(".pobedil");
const playAgainButton1 = document.querySelector(".igraj-povtorno");
const playAgainButton2 = document.querySelector(".igraj-pak");

let currWord = "";  
let displayedWord = [];  
let incorrectGuesses = 0;  
const maxGuesses = 5;  

function start() {
    const randomIndex = Math.floor(Math.random() * zborLista.length);
    currWord = zborLista[randomIndex].word.toUpperCase();  
    displayedWord = Array(currWord.length).fill("");  
    incorrectGuesses = 0; 

    revealRandomLetters(); 
    updateWordDisplay();
    gameOverScreen.style.display = "none";  
    gameWonScreen.style.display = "none";
    guessCountElement.textContent = `${incorrectGuesses}/${maxGuesses}`;
}


function revealRandomLetters() {
    let revealedCount = 0;

    while (revealedCount < 2) {
        const randomIndex = Math.floor(Math.random() * currWord.length);
        
            displayedWord[randomIndex] = currWord[randomIndex];  
            revealedCount++;
        
    }
}

function updateWordDisplay() {
    wordDisplay.innerHTML = ""; 

    for (let i = 0; i < displayedWord.length; i++) {
        const listItem = document.createElement("li");
        listItem.classList.add("bukva");

        if (displayedWord[i]) {
            listItem.textContent = displayedWord[i];
            listItem.classList.add("pogodena");
        } else {
            listItem.textContent = "";
        }

        wordDisplay.append(listItem); 
    }
}


function handleLetterClick(clickedLetter) {

    for (let i = 0; i < currWord.length; i++) {
        if (currWord[i] === clickedLetter) {
            displayedWord[i] = clickedLetter;
        }
    }    
        updateWordDisplay();

        if (!displayedWord.includes("")) {
            winGame();
        }
     else {
        incorrectGuesses++;
        guessCountElement.textContent = `${incorrectGuesses}/${maxGuesses}`; 
        if (incorrectGuesses >= maxGuesses) {
            endGame();
        }
    }
}

function winGame() {

    gameWonScreen.style.display = "flex";  
    gameWonScreen.querySelector("p strong").textContent = currWord;
} 


function endGame() {
    gameOverScreen.style.display = "flex";
    gameOverScreen.querySelector("p strong").textContent = currWord;  
}


function setupKeyboard() {
    for (let i = 65; i <= 90; i++) {  
        const button = document.createElement("button");
        const letter = String.fromCharCode(i);
        button.innerText = letter;
        tastaturaDiv.appendChild(button);
        button.addEventListener("click", () => handleLetterClick(letter));
    }
}

// Restart 
playAgainButton1.addEventListener("click", function() {
    gameWonScreen.style.display = "none";  
    start();  
});
playAgainButton2.addEventListener("click", function() {
    gameOverScreen.style.display = "none"; 
    start();  
});

setupKeyboard();
start();
