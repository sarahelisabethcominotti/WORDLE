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
