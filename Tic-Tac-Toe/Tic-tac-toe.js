let boxes = document.querySelectorAll(".box");
let myGamePage = document.querySelector(".container")
let resetbutt = document.querySelector("#reset");
let pler1 = document.querySelectorAll(".Player1 p");
let pler2 = document.querySelectorAll(".Player2 p");
let tiematch = document.querySelectorAll('.ti p');
let winnerpage = document.querySelector(".playerHeading");
let newGame = document.querySelector(".newgame");
let continueGame = document.querySelector(".continue");
let scorePageHide = document.querySelector(".winner");
const gameContainer = document.querySelector('.gamecontainer');
let winnerHeadingHide = document.querySelector('.winnerHeading');

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let count = 0;
let winOfplayer1 = 0;
let winOfplayer2 = 0;
let tie = 0;
let PlayerX = true;

pler1[0].style.visibility = "hidden";
pler2[0].style.visibility = "hidden";
scorePageHide.classList.add('hideCompletePage');

if (PlayerX) {
    pler1[0].style.visibility = "visible";
} else {
    pler2[0].style.visibility = "visible";
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

const resetGame = () => {
    enableBoxes();
    count = 0;
}

const isWinner = (winner) => {
    winnerHeadingHide.style.visibility = "visible";
    if (winner === 'X') {
        winOfplayer1++;
        pler1[2].innerText = winOfplayer1;
        pler1[4].innerText = winOfplayer1;
        PlayerX = true;
        winnerpage.innerText = 'Player1(x)';
        myGamePage.classList.add('hideCompletePage');
        scorePageHide.classList.remove('hideCompletePage');
    } else {
        winOfplayer2++;
        pler2[2].innerText = winOfplayer2;
        pler2[4].innerText = winOfplayer2;
        PlayerX = false;
        winnerpage.innerText = 'Player2(O)';
        scorePageHide.classList.remove('hideCompletePage');
        myGamePage.classList.add('hideCompletePage');
    }

    disableBoxes();
}

const isCheckWinner = () => {
    for (let pattern of winPatterns) {
        let patval1 = boxes[pattern[0]].innerText;
        let patval2 = boxes[pattern[1]].innerText;
        let patval3 = boxes[pattern[2]].innerText;
        if (patval1 != '' && patval1 != '' && patval1 != '') {
            if (patval1 === patval2 && patval2 === patval3) {
                isWinner(patval1);
                return true;
            }
        }
    }
}

const gameDraw = () => {
    ++tie;

    if (PlayerX) {
        PlayerX = false;
    } else {
        PlayerX = true;
    }
    scorePageHide.classList.remove('hideCompletePage');
    myGamePage.classList.add('hideCompletePage');
    winnerpage.innerText = 'Tie';
    tiematch[1].innerText = tie;
    tiematch[3].innerText = tie;
}

const newGameReset = () => {
    myGamePage.classList.remove('hideCompletePage');
    console.log(winOfplayer1)
    count = 0;
    winOfplayer1 = 0;
    winOfplayer2 = 0;
    tie = 0;
    PlayerX = true;
    enableBoxes();
    pler1[2].innerText = winOfplayer1;
    pler2[2].innerText = winOfplayer2;
    pler1[4].innerText = winOfplayer1;
    pler2[4].innerText = winOfplayer2;
    tiematch[1].innerText = tie;
    tiematch[3].innerText = tie;
    console.log(winOfplayer1)
    scorePageHide.classList.add('hideCompletePage');
}

const continueGameFunc = () => {
    myGamePage.classList.remove('hideCompletePage');
    count = 0;
    enableBoxes();
    scorePageHide.classList.add('hideCompletePage');
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (PlayerX) {
            box.innerText = 'X';
            PlayerX = false;
            pler1[0].style.visibility = "hidden";
            pler2[0].style.visibility = "visible";
        } else {
            box.innerText = 'O';
            PlayerX = true;
            pler1[0].style.visibility = "visible";
            pler2[0].style.visibility = "hidden";
        }
        count++;
        box.disabled = true;
        let isWinner = isCheckWinner();
        if (count === 9 && !isWinner) {
            winnerHeadingHide.style.visibility = "hidden";
            gameDraw();
        }
    })
})

resetbutt.addEventListener('click', resetGame);
newGame.addEventListener('click', newGameReset);
continueGame.addEventListener('click', continueGameFunc);


// ComputerGame


// let numbers = [0,1,2,3,4,5,6,7,8,9];
// const randomNum=()=>{
//     let randomIndex = Math.floor(Math.random() * numbers.length);
//     let randomElement = numbers.splice(randomIndex, 1)[0];
//     console.log("Randomly selected element:", randomElement);
//     // console.log("Array after removal:", numbers);
//     return randomElement;
// }




// const ArrayRemoveIndex=()=>{
//     gameContainer.addEventListener('click', function(event) {
//         // Check if the clicked element is a button with the class 'box'
//         if (event.target.classList.contains('box')) {
//             // Get the index of the clicked button
//             const index = Array.from(gameContainer.children).indexOf(event.target);
//             console.log("Clicked button index:", index);
//             // numbers.remove(index);
//             let indexremove = numbers.indexOf(index);
//             if (index !== -1) {
//                 numbers.splice(indexremove, 1);
//             }
//             console.log(numbers);
//             return index;
//         }
//     });
// }

// let computerPlayer = document.querySelector('button');
// computerPlayer.addEventListener('click',()=>{
//     computerPlayer.disabled=true
    
// })
// if(computerPlayer){
//     console.log(computerPlayer)
// }
// let human=true;
// const computerTern=()=>{
//     ArrayRemoveIndex();
//         let indexofcom = randomNum();
//         console.log("Index for computer move:", indexofcom);
//         const index = indexofcom;
//         const buttonAtIndex = gameContainer.querySelector(`.box:nth-child(${index + 1})`);
//         buttonAtIndex.textContent = "0";
//         human = true;
//         pler1[0].style.visibility = "visible";
//         pler2[0].style.visibility = "hidden";
// }
// boxes.forEach((box) => {
//     box.addEventListener('click', () => {
//         if (human) {
//             box.innerText = 'X';
//             human = false;
//             pler1[0].style.visibility = "hidden";
//             pler2[0].style.visibility = "visible"; 
//             console.log('human')                       
//         }
//         // } else {
//         //     let indexofcom = randomNum();
//         //     const index = indexofcom;
//         //     const buttonAtIndex = gameContainer.querySelector(`.box:nth-child(${index + 1})`);
//         //     buttonAtIndex.textContent = "0";

//         //     human = true;
//         //     pler1[0].style.visibility = "visible";
//         //     pler2[0].style.visibility = "hidden";
//         // }
        
//         // setTimeout(computerTern(), 1000);
//         if(!human){
//             console.log('computer') 
//             computerTern();
//             // human = true;
//             // pler1[0].style.visibility = "visible";
//         //     pler2[0].style.visibility = "hidden";
//         }
//         count++;
//         box.disabled = true;
//         let isWinner = isCheckWinner();
//         if (count === 9 && !isWinner) {
//             gameDraw();
//         }
//     })
// })





