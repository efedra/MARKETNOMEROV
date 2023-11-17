//Кнопки
let buttonBuy = document.querySelector('.buy-number')
let buttonSale = document.querySelector('.sale-number')
let closeModal = document.querySelectorAll('.close')


let allCurrentPhone = document.querySelectorAll('.select-buttons')

let buttonComment = document.querySelector('.add-review')
let buttonCart = document.querySelector('.basket')

//Модалки
let modalBuy = document.getElementById('modal-buy-number')
let modalSelect = document.getElementById('modal-select-number')
let modalComment = document.getElementById('modal-review')
let modalCart = document.querySelector('.modal-basket')

if (buttonBuy) {
    buttonBuy.addEventListener('click', () => {
        document.querySelector('.modal-buy-number__heading').innerHTML = 'Купить номер';
        openModal(modalBuy);
    })
}

if (buttonSale) {
    buttonSale.addEventListener('click', () => {
        document.querySelector('.modal-buy-number__heading').innerHTML = 'Продать номер';
        openModal(modalBuy);
    })
}

if (allCurrentPhone) {
    allCurrentPhone.forEach(el=>{
        el.addEventListener('click', () => {
            openModal(modalSelect)
        })
    })
}

if (buttonComment) {
    buttonComment.addEventListener('click', () => {
        openModal(modalComment)
    })
}

if (buttonCart) {
    buttonCart.addEventListener('click', () => {
        openModal(modalCart);
    })
}

function openModal(modal) {
    document.body.style.overflowY = 'hidden'
    modal.style.display = 'flex'
}


closeModal.forEach(el => {
    el.addEventListener('click', () => {
        if (modalBuy) {
            modalBuy.style.display = 'none'
        }
        if (modalSelect) {
            modalSelect.style.display = 'none'
        }
        if (modalComment) {
            modalComment.style.display = 'none'
        }
        if (modalCart) {
            modalCart.style.display = 'none'
        }


        document.body.style.overflowY = 'auto'
    })
})