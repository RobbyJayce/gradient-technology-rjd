const bars = document.getElementById('bars');
const menu = document.getElementById('menu');
const xmark = document.getElementById('xmark');

if (bars) {
    bars.addEventListener('click' , () => {
        menu.classList.add('active');
    })
}

if (xmark) {
    xmark.addEventListener('click' , () => {
        menu.classList.remove('active');
    })
}