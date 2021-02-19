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


// index.html

// <!-- 04.Basic Selectors in DOM -->

// <div class="container">
//     <div class="row">
//         <div class="col">
//             <h1 class="text-center" id = "04T-id">04 Basic Selector in DOM</h1>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto accusamus dolor. Fuga, ex dolore? Quibusdam corrupti vero debitis non repellat voluptate vel culpa aspernatur?</p>
//             <button id="04T-btn-id" class="btn btn-primary">Click Me</button>
//         </div>
//     </div>
// </div>
