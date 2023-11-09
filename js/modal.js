//Кнопки
let buttonBuy = document.querySelector('.buy-number')
let buttonSale = document.querySelector('.sale-number')
let closeModal = document.querySelectorAll('.close')
let buttonSelect = document.querySelector('.more-numbers')
let buttonComment = document.querySelector('.add-review')

//Модалки
let modalBuy = document.getElementById('modal-buy-number')
let modalSelect = document.getElementById('modal-select-number')
let modalComment = document.getElementById('modal-review')

buttonBuy.addEventListener('click', () => {
    document.querySelector('.modal-buy-number__heading').innerHTML = 'Купить номер';
    openModal(modalBuy);
})
buttonSale.addEventListener('click', () => {
    document.querySelector('.modal-buy-number__heading').innerHTML = 'Продать номер';
    openModal(modalBuy);
})
buttonSelect.addEventListener('click', () => {
    openModal(modalSelect)
})
buttonComment.addEventListener('click', () => {
    openModal(modalComment)
})


function openModal(modal) {
    document.body.style.overflowY = 'hidden'
    modal.style.display = 'flex'
}

closeModal.forEach(el => {
    el.addEventListener('click', () => {
        modalBuy.style.display = 'none'
        modalSelect.style.display = 'none'
        modalComment.style.display = 'none'

        document.body.style.overflowY = 'auto'
    })
})