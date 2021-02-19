/**************************
* Bismillahir Rahmanir Rahim
* DOM T-06
* Style Document of DOM
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

$ = (selector) => document.querySelector(selector);

let h1Tag = $('#h1Tag');
let pTag = $('#pTag');

h1Tag.style.color = 'salmon';
h1Tag.style.fontSize = '35px'; 
h1Tag.style.borderBottom = '3px solid yellow';

let pStyle = {
    padding: '5px',
    color: 'purple',
    border: '2px solid blue',
    lineHeigth : '1.3'
}

Object.assign(pTag.style, pStyle);

Object.assign($('#anotherP').style, pStyle);
// Here we are not assining into any varible/let