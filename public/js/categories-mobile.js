let buttonCategories = document.querySelector('.filter-mobile')
let modalCategories = document.querySelector('.categories-filter-mobile')
let closeCategories = document.querySelector('.categories-filter-mobile__head svg')

buttonCategories.addEventListener('click', () => {
    modalCategories.style.display = 'block'
    document.body.style.overflow = 'hidden'
})

closeCategories.addEventListener('click', () => {
    modalCategories.style.display = 'none'
    document.body.style.overflow = 'auto'
})