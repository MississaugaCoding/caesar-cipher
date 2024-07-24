let taCode = document.getElementById('code');
let taDecode = document.getElementById('decode');

taCode.addEventListener('keydown', processKeys);

// why keydown vs keypress??
/*
from mdn: https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event

The keydown and keyup events provide a code indicating which key is pressed, 
while keypress indicates which character was entered.
The keypress event is deprecated.
*/

function processKeys(e) {
    e.preventDefault();
    //console.log('keyCode',e.keyCode);
    //console.log('code',e.code);  
    console.log(`key = ${e.key}`);
    let { key } = e;
    if (key.length === 1) {
        taCode.value += key.toUpperCase();
        taDecode.value += rot13(key.toUpperCase());
    }

}

function rot13(str) {
    //console.log(str);
    let decstr = "";

    for (let i = 0; i < str.length; i++) {
        //console.log(str[i]);
        //console.log(str.charCodeAt(i));
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            //console.log('letter');

            if (str.charCodeAt(i) >= 78) {   //N
                decstr += String.fromCharCode(str.charCodeAt(i) - 13);
            } else {
                decstr += String.fromCharCode(str.charCodeAt(i) + 13);
            }


        } else {
            //console.log('not letter');
            decstr += str.charAt(i);
        }
    }
    //console.log(decstr);
    return decstr;
}



