const extract = document.querySelector('#counter');

function increment() {
    let value = parseInt(extract.innerText);
    value++;
    extract.innerHTML = value;
}

function decrement() {
    let value = parseInt(extract.innerText);
    value--;
    extract.innerHTML = value;
}