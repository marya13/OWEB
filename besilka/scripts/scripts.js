
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
        if (displayedWord[randomIndex] === "") {
            displayedWord[randomIndex] = currWord[randomIndex];  
            revealedCount++;
        }
    }
}

function updateWordDisplay() {
    wordDisplay.innerHTML = ""; 

    displayedWord.forEach(letter => {
        const listItem = document.createElement("li");
        listItem.classList.add("bukva");
        
        if (letter) {
            listItem.textContent = letter;  
            listItem.classList.add("pogodena");  
        } else {
            listItem.textContent = "";  
        }
        
        wordDisplay.appendChild(listItem);
    });
}


function handleLetterClick(clickedLetter) {
    if (currWord.includes(clickedLetter)) {

        [...currWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                displayedWord[index] = letter;  
            }
        });
        updateWordDisplay();

        if (!displayedWord.includes("")) {
            winGame();
        }
    } else {
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

// Restart the game
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
