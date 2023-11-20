let pluses =document.querySelectorAll('.open-questions')
pluses.forEach(el=>{
    el.addEventListener('click',()=>{
        let tips = el.closest('.often-questions__elem').querySelector('.tips-questions').classList.toggle('sort-filter__list_hidden')

    })
})