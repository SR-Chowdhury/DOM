/**************************
* Bismillahir Rahmanir Rahim
* DOM T-07
* Working with Event in DOM
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

$ = selector => document.querySelector(selector);

let toggleBtn = $('#toggleBtn');
let para = $('.para');

let flag = false;

toggleBtn.addEventListener('click', function() {

    if(flag) {
        para.style.visibility = 'hidden';
        flag = false;
        toggleBtn.innerHTML = 'Show';
    }
    else {
        para.style.visibility = 'visible';
        flag = true;
        toggleBtn.innerHTML = 'Hide';
    }
});



// index.html
/*
<div class="container">
    <div id="toggleBtn" class="button btn btn-success">Show </div>
    <p class="para" style="visibility: hidden;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi eaque hic, saepe libero error voluptatum harum est adipisci maxime omnis dolor officiis sequi atque obcaecati commodi. Magnam, voluptas maiores? Similique?</p>
</div>
*/