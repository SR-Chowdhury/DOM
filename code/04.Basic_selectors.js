/**************************
* Bismillahir Rahmanir Rahim
* DOM T-04
* Basic Selectors of DOM
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

let h1_id = document.getElementById('04T-id');
let btn_id = document.getElementById('04T-btn-id');
let colors = ['red', 'green', 'blue'];
let i = 0;

btn_id.addEventListener('click', function() {
    h1_id.style.color = colors[i];
    if(i> colors.length) {
        i = 0;
    } else {
        i++;
    }
});

