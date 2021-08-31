import '../sass/main.sass'

$(document).ready(function() {
    // $(".offers-slider").slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     autoplay: false,
    //     prevArrow: document.getElementsByClassName('offers-arrows__item prev-btn')[0],
    //     nextArrow: document.getElementsByClassName('offers-arrows__item next-btn')[0],
    //     responsive: [
    //         {
    //           breakpoint: 493,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             prevArrow: document.getElementsByClassName('offers-arrows__item prev-btn')[0],
    //             nextArrow: document.getElementsByClassName('offers-arrows__item next-btn')[0],
    //             autoplay: true,
    //             autoplaySpeed: 2000,
    //           }
    //         }
    //     ]
    // });

    // $(".feedback-slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     infinite: false,
    //     prevArrow: document.getElementsByClassName('feedback__slider-btn prev-btn')[0],
    //     nextArrow: document.getElementsByClassName('feedback__slider-btn next-btn')[0],
    //     speed: 300,
    // });
});



let body = document.body,
    arrow = document.getElementsByClassName('arrow')[0];

arrow.onclick = function() {
    this.classList.toggle('down');
    document.getElementsByClassName('socials-laptop-s__moving-block')[0].classList.toggle('opened');
}


let openBurgerBtn = document.getElementsByClassName('header__burger-btn')[0],
    closeBurgerBtn = document.getElementsByClassName('header__close-burger-btn')[0],
    menu = document.getElementsByClassName('header__line__right')[0],
    overlay = document.getElementsByClassName('overlay')[0];

    console.log(overlay)

openBurgerBtn.onclick = function() {
    body.classList.add('overflow-hidden');
    overlay.classList.add('opened');
    menu.classList.add('opened');
};

closeBurgerBtn.onclick = function() {
    body.classList.remove('overflow-hidden');
    overlay.classList.remove('opened');
    menu.classList.remove('opened');
}

overlay.onclick = function(event) {
    if (event.target == this) {
        body.classList.remove('overflow-hidden');
        overlay.classList.remove('opened');
        menu.classList.remove('opened');
    }
};

//кнопка наверх----------------------------------------------------------------
// let scrolltoTopLink = document.getElementById('scroll-to-top');
// scrolltoTopLink.addEventListener('mousedown', function (event) {
//     event.preventDefault();
//     let blockID = scrolltoTopLink.getAttribute('href').substr(1);

//     document.getElementById(blockID).scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//     });
// });

// scrolltoTopLink.addEventListener('click', function (event) {
//     event.preventDefault();
// });

// window.onscroll = function(event) {
//     if (pageYOffset >= document.documentElement.clientHeight) {
//         scrolltoTopLink.classList.add('active');
//     } else {
//         scrolltoTopLink.classList.remove('active');
//     }
// };
//кнопка наверх----------------------------------------------------------------




//плавный переход по якорям----------------------------------------------------------------
// let anchors = document.querySelectorAll('a[href*="#"]');
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (event) {
//         event.preventDefault();
//         let blockID = anchor.getAttribute('href').substr(1);

//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// }
//плавный переход по якорям----------------------------------------------------------------


//все окна----------------------------------------------------------------
// let defaultPopups = document.getElementsByClassName('popup'),
//     popupsWindows = document.getElementsByClassName('popup__window'),
//     mouseDownInPopupWindow = false,
//     mouseDownInCloseBtn = false;

// for(let popupWindow of popupsWindows) {
//     popupWindow.onmousedown = function(event) {
//         if (event.target.className == "video-popup__close-btn") {
//             return;
//         }

//         if (event.target.className == "popup__close-btn") {
//             mouseDownInCloseBtn = true;
//         } else {
//             mouseDownInPopupWindow = true;
//         }
//     };
// }

// for(let popup of defaultPopups) {
//     popup.onmouseup = function(event) {
//         if (mouseDownInPopupWindow) {
//             mouseDownInPopupWindow = false;
//             return;
//         }

//         if (mouseDownInCloseBtn && event.target.className != "popup__close-btn") {
//             mouseDownInCloseBtn = false;
//             return;
//         }

//         if (this == document.getElementsByClassName('video-popup')[0] && event.target == this || event.target == document.getElementsByClassName('video-popup__close-btn')[0]) {
//             player.pauseVideo(); //остановка ютуб-видео
//             body.classList.remove('overflow-hidden');
//             $(".popup.video-popup").fadeOut(300);
//             return;
//         }

//         if(event.target == this || event.target.className == "popup__close-btn" && mouseDownInCloseBtn) {
//             mouseDownInCloseBtn = false;
//             body.classList.remove('overflow-hidden');
//             $(this).fadeOut(300);
//         }
//     };
// }
//все окна----------------------------------------------------------------




//открытие окон ----------------------------------------------------------------
// let body = document.getElementsByTagName('body')[0],
//     headerOrderBtn = document.getElementsByClassName('header__order-btn')[0],
//     mainOrderBtn = document.getElementsByClassName('main__order-btn')[0],
//     videoPopupLink = document.getElementsByClassName('main__video-link')[0];

// headerOrderBtn.onclick = mainOrderBtn.onclick = function() {
//     body.classList.add('overflow-hidden');
//     $(".popup.order-popup").fadeIn(300);
// };

// videoPopupLink.onclick = function() {
//     body.classList.add('overflow-hidden');
//     $(".popup.video-popup").fadeIn(300);
// };
//открытие окон ----------------------------------------------------------------


//отправка заказа из модального окна ----------------------------------------------------------
// let confirmOrderBtn = document.getElementsByClassName('order-form__confirm-btn')[0];
// confirmOrderBtn.onclick = function(event) {
//     event.preventDefault();

    
// };
//отправка заказа из модального окна ----------------------------------------------------------


//бургер-меню ----------------------------------------------------------------
// let nav = document.getElementsByClassName('header__nav')[0],
//     openMenuBtn = document.getElementsByClassName('header__open-menu-btn')[0],
//     closeMenuBtn = document.getElementsByClassName('nav__close-menu-btn')[0],
//     anchorLinks = document.getElementsByClassName('nav__item');

// openMenuBtn.onclick = function() {
//     nav.classList.add('menu-opened');
// }

// closeMenuBtn.onclick = function() {
//     nav.classList.remove('menu-opened');
// }

// for (let i = 0; i < anchorLinks.length; i++) {
//     anchorLinks[i].onclick = function() {
//         nav.classList.remove('menu-opened');
//     };
// }
//бургер-меню ----------------------------------------------------------------




//переключатель блока цен----------------------------------------------------------------
// let switcherButtons = document.getElementsByClassName('price__switcher__btn'),
//     activeBtn = switcherButtons[0];

// for (let i = 0; i < switcherButtons.length; i++) {
//     switcherButtons[i].onclick = function() {
//         // console.log(this, activeBtn);
//         activeBtn.classList.remove('active');
//         activeBtn = this;
//         activeBtn.classList.add('active');
//     };
// }
//переключатель блока цен----------------------------------------------------------------


//слайдер отзывов----------------------------------------------------------------
// let feedbackSliderItems = document.getElementsByClassName('feedback-slider__item'),
//     feedbackSliderButtons = document.getElementsByClassName('feedback__slider-btn'),
//     currentSlide = 1;

// if(feedbackSliderItems.length > 1) {
//     console.log(feedbackSliderItems.length)
//     feedbackSliderButtons[1].classList.add('enabled');
// }

// feedbackSliderButtons[0].onclick = function() {
//     if (this.classList.contains('enabled')) {
//         console.log('left');
//         currentSlide--;
//         // feedbackSliderItemsWrap.style.transform = `translateX(${(currentSlide - 1) * -100}%)`;

//         if (currentSlide == 1) {
//             this.classList.remove('enabled');
//         }
//         feedbackSliderButtons[1].classList.add('enabled');
//     }
// }

// feedbackSliderButtons[1].onclick = function() {
//     if (this.classList.contains('enabled')) {
//         // feedbackSliderItemsWrap.style.transform = `translateX(${currentSlide * -100}%)`;
//         currentSlide++;

//         if (currentSlide == feedbackSliderItems.length) {
//             this.classList.remove('enabled');
//         }
//         feedbackSliderButtons[0].classList.add('enabled');
//     }
// }
//слайдер отзывов----------------------------------------------------------------



//faq----------------------------------------------------------------------------------
// let questionsButtons = document.getElementsByClassName('question__plus-btn'),
//     currentQuestion = questionsButtons[0].parentElement;

// for (let i = 0; i < questionsButtons.length; i++) {
//     questionsButtons[i].onclick = function() {
//         currentQuestion.classList.remove('opened');
//         currentQuestion = this.parentElement;
//         currentQuestion.classList.add('opened');
//     };
// }
//faq----------------------------------------------------------------------------------