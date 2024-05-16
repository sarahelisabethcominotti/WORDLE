
//Addition of notes to make pop-up work

function input(i) {
    var tbInput = document.getElementById(`tbInput`)
    tbInput.value = tbInput.value + i.value
}


function del() {
    var tbInput = document.getElementById(`tbInput`);
    tbInput.value = tbInput.value.substr(0, tbInput.value.length - 1);
}

function load() {
    var array = new Array();

    while (array.length < 10) {
        var temp = Math.round(Math.random() * 9);
        if (!contain(array, temp)) {
            array.push(temp);
        }
    }
    for (i = 0; i < 10; i++) {
        var btn = document.getElementById("btn" + i);
        btn.value = array[i];
    }
}



// const popup = () => {
//     document.getElementById("popup").style.display = `block`
// }


// popupButton.addEventListener("click", popup);

// function openPopup() {
//     document.getElementById('popup').style.display = 'block';
// }


//KEYBOARD - Assigning event listners to the buttons (elements)

// let row = 1;
// let letter = 1;

const buttonElements = document.querySelectorAll('button');

buttonElements.forEach((element) => {
    element.addEventListner('click', pressKey(element.attributes["btn-primary"].value));
});

function pressKey(key) {
    if (key.toLowerCase() === 'enter') {
    enterWord();
}   else if (key.toLowerCase() === 'backspace') {
    removeLetter();
}   else{
    populateWord(key)
}
}
// console.log(key)
