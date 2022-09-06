const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const back = document.querySelector('body');
const headerList = document.querySelector('.menu__body');
const menuContacts = document.querySelector('.contacts__info-menu');


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
    menuContacts.classList.toggle('hide');
    menuContacts.classList.toggle('show');

};

headerList.onclick = function () {
    headerList.classList.remove('active');
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

modalBtn.addEventListener('click', openModalWindow,{once : true});
modalWindowCloser.addEventListener('click',closeModalWindow);

const modalTimerId = setTimeout(openModalWindow, 15000);
modalWindow.addEventListener('click',(e)=>{
    if(e.target === modalWindow)
    closeModalWindow();
});

document.addEventListener('keydown',(e) =>{
    if(e.code === 'Escape' && modalWindow.classList.contains('show'))
    closeModalWindow();
});

/* introduceContainer.addEventListener('resize',()=>{
    const introduceWidth = introduceContainer.clientWidth;
    if (introduceWidth<=850){
        console.log('<850');
    }
}); */
if(headerMenu.classList.contains('active')){
    
}

                