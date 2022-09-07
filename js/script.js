const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const back = document.querySelector('body');
const headerList = document.querySelector('.menu__body');

const modalBtn = document.querySelector('.modal-button');
const modalWindow = document.querySelector('.modal');
const modalWindowCloser = modalWindow.querySelector('.modal__close');

const introduceContainer = document.querySelector('.introduce__container');
let div = document.createElement("div");
    div.classList.add('menu__contacts');

headerBurger.onclick = function(){
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    back.classList.toggle('lock');

    console.log(headerMenu.classList);
    div.innerHTML='<div class="contacts__info-menu"><div class="contact__info-menu"><img src="img/icons/location.png" class="logo-location" alt="location"><span class="contact-location info-text-menu">92 Street St, New Yoark, NY 10013</span></div><div class="contact__info-menu"><img src="img/icons/tel.png" class="logo-telephone" alt="tel"><span class="contact-number info-text-menu">+1 800 235 958 556</span></div><div class="header__button"><button class="modal-button-menu button">Call back</button></div></div>';
    headerMenu.append(div);
};

headerList.onclick = function () {
    headerList.classList.remove('active');
    div.innerHTML='';
    back.classList.toggle('lock');
};

function closeModalWindow(){
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = "";
}

function openModalWindow(){
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
}

modalBtn.addEventListener('click', openModalWindow);
modalWindowCloser.addEventListener('click',closeModalWindow);

const modalTimerId = setTimeout(openModalWindow, 15000,);
modalWindow.addEventListener('click',(e)=>{
    if(e.target === modalWindow)
    closeModalWindow();
});

document.addEventListener('keydown',(e) =>{
    if(e.code === 'Escape' && modalWindow.classList.contains('show'))
    closeModalWindow();
});