/**************************
* Bismillahir Rahmanir Rahim
* DOM T-08
* Creating & Deleting DOM Element
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

// First: Creating DOM Element

$ = selector => document.querySelector(selector);

let root = $('#root');

let innerDiv = document.createElement("div");
innerDiv.className = 'innerCls';
innerDiv.setAttribute('id', 'innerDivId');

let h1Tag = document.createElement("h1");
h1Tag.className = 'h1Tag text-center';
h1Tag.innerHTML = 'Creating DOM Element';

innerDiv.appendChild(h1Tag);

root.appendChild(innerDiv);


// Second: Creating Another DOM Element
let inputId = $('#inputId');
let ulId = $('#ulId');
inputId.addEventListener('keypress', function(event) {
    if(event.keyCode == 13) {
        // alert("i am clicked");
        // here keyCode 13 means enter keys car code =13; console.dir(event)
        let value = event.target.value;
        // console.log(value);
        let output = createLi(value);
        ulId.appendChild(output);
        event.target.value = "";

    }
});

function createLi(value) {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = value;
    return li;
}

// Creating & Deleting DOM Element

let ginputID = $('#ginputID');
let gulId = $('#gulId');

ginputID.addEventListener('keypress', function(event) {
    if(event.keyCode == 13) {
        let val = event.target.value;
        createLI(gulId, val);
        event.target.value = "";
    }
});

function createLI(gulId, val) {
    let li2 = document.createElement('li');
    li2.className = 'list-group-item d-flex';
    li2.innerHTML = val;

    let span = document.createElement('span');
    span.innerHTML = 'X';
    span.style.color = 'red';
    span.style.cursor = 'pointer';
    span.className = 'ml-auto'; // ml-auto works when d-flex used in upper scope
    span.addEventListener('click', function() {
        gulId.removeChild(li2);
    });

    li2.appendChild(span);

    gulId.appendChild(li2);
}




// index.html
/*
<!-- First: Creating DOM Element -->
<div class="container">
    <div id="root"></div>
</div>

<!-- Second: Creating Another DOM Element -->
<div class="container m-5">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <h4>Enter your desired things below</h4>
            <input id="inputId" type="text" class="form-control mb-3" placeholder="Search here..">
            <ul id="ulId" class="list-group"></ul>
        </div>
    </div>
</div>

<!-- Creating & Deleting DOM Element -->
<div class="container mt-5">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <h1 class="text-center">Google</h1>
            <input class="form-control mb-3" id="ginputID" type="text" placeholder="Search here...">
            <ul id="gulId" class="list-group">

            </ul>
        </div>
    </div>
</div>
*/