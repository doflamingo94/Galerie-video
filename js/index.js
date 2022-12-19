let framed = document.querySelector('.vid');
let link = [...document.querySelectorAll('.vignette a')];
console.log(link);

for (const value of link) {
    value.addEventListener('click', event => {
        event.preventDefault();
        framed.setAttribute('src', `${value.dataset.url}`);
    })
}
