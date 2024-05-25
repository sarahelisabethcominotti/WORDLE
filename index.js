import {fetchWord} from './fetchWord.js'

const word = await fetchWord()
console.log(`word outside ${word}`)

const wordArray = word.toUpperCase().split('')

console.log(wordArray)


//KEYBOARD - Assigning event listners to the buttons (elements)
const keys = document.querySelectorAll('.key');



            let cellIndex = 1;
            let firstRow = [];
            //let secondRow = []

            keys.forEach(key => {
                key.addEventListener('click', () => {
                    const cell = document.getElementById(`cell${cellIndex}`);
                    if (cell) {
                        cell.textContent = key.textContent.toUpperCase();
                        cell.classList.add("active-cell-border")
                        firstRow.push(cell.textContent);
                        console.log(firstRow);
                        cellIndex++;
                    }
                    
                    //const row1 = document.querySelector(`.row1`).querySelectorAll(`.col > div`)
                    


                    // Check if the first row is complete
                    if (cellIndex === 6) {
                        console.log('First row complete:', firstRow);
                        if (checkArrays(wordArray, firstRow, 0)) {
                            // for (let i = 1; i < firstRow.length + 1; i++) {
                            //     const cell = document.getElementById(`cell${i}`)
                            //     cell.classList.add("correct-cell")
                            // }
                    
                            console.log("you win")
                        } 
                        
                    }

                    if (cellIndex === 11) {
                        let secondRow = firstRow.slice(5,10)
                        console.log('Second row complete:', secondRow);
                        if (checkArrays(wordArray, secondRow, 5)) {
                            // for (let i = 1; i < firstRow.length + 1; i++) {
                            //     const cell = document.getElementById(`cell${i}`)
                            //     cell.classList.add("correct-cell")
                            // }
                    
                            console.log("you win")
                        } 
                    }
                    if (cellIndex === 16) {
                        let thirdRow = firstRow.slice(10,15)
                        console.log('Third row complete:', thirdRow);
                        if (checkArrays(wordArray, thirdRow, 10)) {
                            // for (let i = 1; i < firstRow.length + 1; i++) {
                            //     const cell = document.getElementById(`cell${i}`)
                            //     cell.classList.add("correct-cell")
                            // }
                    
                            console.log("you win")
                        }
                    }
                    if (cellIndex === 21) {
                        let fourthRow = firstRow.slice(15,20)
                        console.log('Fourth row complete:', fourthRow);
                        if (checkArrays(wordArray, fourthRow, 15)) {
                            // for (let i = 1; i < firstRow.length + 1; i++) {
                            //     const cell = document.getElementById(`cell${i}`)
                            //     cell.classList.add("correct-cell")
                            // }
                    
                            console.log("you win")
                        } 
                    }
                    if (cellIndex === 26) {
                        let fifthRow = firstRow.slice(20,25)
                        console.log('Fifth row complete:', fifthRow);
                        if (checkArrays(wordArray, fifthRow, 20)) {
                            // for (let i = 1; i < firstRow.length + 1; i++) {
                            //     const cell = document.getElementById(`cell${i}`)
                            //     cell.classList.add("correct-cell")
                            // }
                    
                            console.log("you win")
                        } 
                    }
                    if (cellIndex === 31) {
                        let sixthRow = firstRow.slice(25,30)
                        console.log('Sixth row complete:', sixthRow);
                        if (checkArrays(wordArray, sixthRow, 25)) {
                            // for (let i = 1; i < firstRow.length + 1; i++) {
                            //     const cell = document.getElementById(`cell${i}`)
                            //     cell.classList.add("correct-cell")
                            // }
                    
                            console.log("you win")
                        } 
                        console.log('Game over');
                    }

                    function checkArrays(array1, array2, index) {
                        for (let i = index; i < index+5; i++) {
                            if (array1[i-index] === array2[i-index]) {
                                const cellContent = document.getElementById(`cell${i+1}`)
                                console.log(array1[i-index], array2[i-index])
                                //console.log(cell)
                                
                                cellContent.classList.add("correct-cell")
                                }
                        else {
                            if (array1.includes(array2[i-index])) {
                                console.log(array1.includes(array2[i-index]))
                                const cellContent = document.getElementById(`cell${i+1}`)
                                console.log(array1[i-index], array2[i-index])
                                //console.log(cell)
                                
                                cellContent.classList.add("correct-letter")

                            }
                         
                        }
                    } }
                });
            });

// keys.forEach(key => {
//     key.addEventListener('click', () => {
//         const cell = document.getElementById(`cell${cellIndex}`)
//         let cellIndex = 1   
//         let firstRow = []
//         // let sedondRow = []
//         // let thirdRow = []
//         // let fourthRow = []
//         // let fifthRow = []
//         // let sixthRow = []
//         // wordArray.forEach(checkLetter) 
//         // function checkLetter() {

//         // }
//         if (cell) {
//         cell.textContent = key.textContent
//         firstRow.push(cell.textContent)
//         console.log(firstRow)
//         cellIndex++;
//             if (cellIndex === 5) {
                
//             }
//             if (cellIndex === 30) {
//                 console.log(`gameover`)
//             }

//         }
//  });

// });

















////////////////////////////INPUT WORD IN CELLS////////////////////////
// function input(i) {
//     var tbInput = document.getElementById(`tbInput`)
//     tbInput.value = tbInput.value + i.value
// }


// function del() {
//     var tbInput = document.getElementById(`tbInput`);
//     tbInput.value = tbInput.value.substr(0, tbInput.value.length - 1);
// }

// function load() {
//     var array = new Array();

//     while (array.length < 10) {
//         var temp = Math.round(Math.random() * 9);
//         if (!contain(array, temp)) {
//             array.push(temp);
//         }
//     }
//     for (i = 0; i < 10; i++) {
//         var btn = document.getElementById("btn" + i);
//         btn.value = array[i];
//     }
// }


















// POP UP FUNCTIONS
var openPopup = document.getElementById("open-popup");
var popupWindow = document.getElementById("popup");
var closeButton = document.getElementById("close-popup");

// open popup
openPopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
});

// close popup
closeButton.addEventListener("click", function() {
  popupWindow.style.display = "none";
});
