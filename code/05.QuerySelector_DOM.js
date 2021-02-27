/**************************
* Bismillahir Rahmanir Rahim
* DOM T-05
* Query Selector in DOM
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

let h1_id = document.querySelector('#h1-tag');

// Now we are minimizing document.querySelector('#....); by making a funciton
function $(selector) {
    return document.querySelector(selector);
}

// let btn_id = document.querySelector('#btn-id');
let btn_id = $('#btn-id');
let colors = ['yellow', 'purple', 'salmon'];
let x = 0;

btn_id.addEventListener('click', function() {
    h1_id.style.color = colors[x];
    if(x> colors.length) {
        x = 0;
        h1_id.style.color = colors[x];

    } else {
        x++;
    }
});

let btnId2 = $('#btn-id-2');
let pTag = $('#pTag');
btnId2.addEventListener('click', function(){
    pTag.style.color = 'salmon';
});



// index.html
/* <div class="container">
<div class="row">
    <div class="col">
        <h1 class="text-center" id = "h1-tag">04 Query Selector in DOM</h1>
        <p id="pTag">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto accusamus dolor. Fuga, ex dolore? Quibusdam corrupti vero debitis non repellat voluptate vel culpa aspernatur?</p>
        <button id="btn-id" class="btn btn-primary">Click Me</button>
        <button id="btn-id-2" class="btn btn-success">Click Me</button>
    </div>
</div>
</div> */