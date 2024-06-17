
/* tabs */
const tabsBtn = document.querySelectorAll('.tabs__btn--item');
const tabsItem = document.querySelectorAll('.tabs__content--item');

tabsBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(el => el.classList.remove('tabs__btn--active'));
        e.currentTarget.classList.add('tabs__btn--active');
        
        tabsItem.forEach(el => el.classList.remove('tabs__content--active'));
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content--active');
    });
});




/* burger */

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
    menuBtn.classList.toggle('burger--active');
    body.classList.toggle('stop-scroll');
});


const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});