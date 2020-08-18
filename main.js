//14 char long
//Numbers, Symbols, Capital Letters, and Lower-Case Letters




const pButton = document.getElementById('password-button');
const passwordhtml = document.getElementById('password');
const test = document.getElementById('cipher');
const num = document.getElementById('offset');
const fin = document.getElementById('finish');
const cButton = document.getElementById('c-button');

const decipher = document.getElementById('decipher');
const offse = document.getElementById('deoffset');
const defin = document.getElementById('definish');
const dButton = document.getElementById('d-button');

    dButton.addEventListener('click', function(){
        caesarDecipher(String(decipher.value),Number(offse.value));
    })

    pButton.addEventListener('click', function(){
        getPassword();
    })

    cButton.addEventListener('click', function(){
        caesarCipher(String(test.value), Number(num.value));
        
    })


function randSym(){
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random()*symbol.length)];
}
function randnum(){
    return String(Math.floor(Math.random() * Math.floor(10)));
}
function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getPassLen(){
    let passlen = [12,13,14,15,16,17,18];

    return String(passlen[Math.floor(Math.random()*passlen.length)]);
}
function randomfunc(){
    return Math.floor(Math.random() * Math.floor(4));
}
function getPassword(){
    let password = '';
    for(var i = 0; i < getPassLen(); i++){
        let funnum = randomfunc()+1;
        if(funnum == 1){
        password += randSym();
        }
        else if(funnum == 2){
        password += randnum(); 
        }
        else if(funnum == 3){
        password += getRandomLowerCase(); 
        }
        else if(funnum == 4){
        password += getRandomUpperCase(); 
        }
    }
    
    passwordhtml.value=password;
}




function caesarCipher(text, offset){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var fullAlphabet = alphabet + alphabet + alphabet;
    var cipherFinish = '';

    for(i=0; i<text.length; i++){
        var letter = text[i];
        var upper = (letter == letter.toUpperCase());
        letter = letter.toLowerCase();
       
        var index = alphabet.indexOf(letter);
        if(index == -1){
          cipherFinish += letter;
        } else {
          index = ((index + offset) + alphabet.length);
          var nextLetter = fullAlphabet[index];
          if(upper) nextLetter = nextLetter.toUpperCase();
          cipherFinish += nextLetter;
        }
    }
    
    fin.value = cipherFinish;
}

function caesarDecipher(text, offset){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var fullAlphabet = alphabet + alphabet + alphabet;
    var decipherFinish = '';
    for(i=0; i<text.length; i++){
        var letter = text[i];
        var upper = (letter == letter.toUpperCase());
        letter = letter.toLowerCase();
       
        var index = alphabet.indexOf(letter);
        if(index == -1){
            decipherFinish += letter;
        } else {
          index = ((index - offset) + alphabet.length);
          var nextLetter = fullAlphabet[index];
          if(upper) nextLetter = nextLetter.toUpperCase();
          decipherFinish += nextLetter;
        }
    }
    defin.value = decipherFinish;
}


