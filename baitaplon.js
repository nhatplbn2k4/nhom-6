
const listImage = document.querySelector('.list-images');
const imgs = listImage.getElementsByTagName('img');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const length = imgs.length;
let current = 0;

const handleChangeSlide = () => {
    if (current == length - 1) {
        current = 0;
    } else {
        current++;
    }

    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;

    const activeItem = document.querySelector('.active');
    if (activeItem) {
        activeItem.classList.remove('active');
    }
    document.querySelector('.index-item-' + current).classList.add('active');
};

let handleEventChangeSlide = setInterval(handleChangeSlide, 4000);

btnRight.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    handleChangeSlide();
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
});

btnLeft.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    if (current == 0) {
        current = length - 1;
    } else {
        current--;
    }

    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;

    const activeItem = document.querySelector('.active');
    if (activeItem) {
        activeItem.classList.remove('active');
    }
    document.querySelector('.index-item-' + current).classList.add('active');

    handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
});