let buttonMobile = document.querySelector('.mobile-nav')
let closeMobile = document.querySelector('.mobile-nav__close')
let modalWindow = document.querySelector('.modal-mobile-nav')

buttonMobile.addEventListener('click',()=>{
    modalWindow.style.display = 'block'
    document.body.style.overflowY = 'hidden'
})

closeMobile.addEventListener('click',()=>{
    modalWindow.style.display = 'none'
    document.body.style.overflowY = 'auto'
})