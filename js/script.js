import ilay from './index.js'


// checks password
const passwordCheck = ilay.passwordStrength('Ab1212121212!',{
    minChar: 12,
    capitalLetter: true,
    lowercaseLetter: true,
    stopTwoIdenticalCharacterInRow: true,
    specialChar: true,
    numbers: true,
    stopRisingNumbers:true,
})
console.log(passwordCheck)

const str = 'string'

str.forEach(letter => {
    console.log(letter)
})

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

document.getElementById('btn').addEventListener('click',btn => {
    
    var selection = window.getSelection().getRangeAt(0);

    var selectedText = selection.extractContents();


    var span= document.createElement("span");

    span.style.backgroundColor = "yellow";

    span.appendChild(selectedText);

    selection.insertNode(span);
    
})