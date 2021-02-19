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





// index.html 
/*
<div class="container">
    <h1 id="h1Tag">Style Your Document</h1>
    <p id="pTag">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis vero quod maiores deleniti quisquam fugiat ut accusantium? Ex adipisci corporis fugiat cum deleniti sed id. Fugit nisi provident natus, modi autem aspernatur quo doloribus soluta exercitationem, magni iure, perspiciatis nostrum earum aliquam corrupti cupiditate debitis ipsam nulla in eius.</p>
    <p id="anotherP">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime exercitationem excepturi, impedit earum, enim odit eos sapiente maiores neque numquam dolore labore obcaecati doloribus delectus magni illum omnis libero incidunt!</p>
</div>
*/