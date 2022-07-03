const accItems = document.querySelectorAll('.accordion__item');

for (let i=0; i<accItems.length; i++) {
    accItems[i].addEventListener('click', () => {
        accItems[i].classList.toggle('open');
    })
}