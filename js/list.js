let lists = document.querySelectorAll('.sort-filter__elem')

lists.forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target.closest('.sort-filter__input')) {
            el.querySelector('.sort-filter__input').classList.toggle('sort-filter__input_active')
            if(el.querySelector('.sort-filter__list')){
                el.querySelector('.sort-filter__list').classList.toggle('sort-filter__list_hidden')
            }
        }
    })
})

let elemList = document.querySelectorAll('.sort-filter__list-elem')

elemList.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('sort-filter__list-elem_active')
        elemList.forEach(elAll => {
            if (elAll !== el) {
                elAll.classList.remove('sort-filter__list-elem_active')
            }
        })
    })
})

document.addEventListener('click', (event) => {
    const sortFilterElem = document.querySelector('.sort-filter__elem');
    const sortFilterList = document.querySelector('.sort-filter__list');

    if (!sortFilterElem.contains(event.target)) {
        sortFilterElem.querySelector('.sort-filter__input').classList.remove('sort-filter__input_active')
        sortFilterList.classList.add('sort-filter__list_hidden');

    }

    const selectFilterElem = document.querySelector('.select-options__elem');
    const selectFilterList = document.querySelector('.select-options__list');
    const selectFilterInput = document.querySelector('.goods-input__search');

    if (!selectFilterElem.contains(event.target)) {
        selectFilterElem.classList.remove('select-options__elem_active')
            selectFilterList.classList.add('sort-filter__list_hidden');
            selectFilterInput.classList.add('sort-filter__list_hidden');
    }
});

//ВЫБЕРИТЕ РЕГИОН

let listsSelectOptions = document.querySelectorAll('.select-options__full-list')

listsSelectOptions.forEach(list=>{
    list.addEventListener('click',(e)=>{
        if (e.target.closest('.select-options__elem')) {
            list.querySelector('.select-options__elem').classList.toggle('select-options__elem_active')
            if( list.querySelector('.select-options__list') && list.querySelector('.goods-input__search')){
                list.querySelector('.goods-input__search').classList.toggle('sort-filter__list_hidden')
                list.querySelector('.select-options__list').classList.toggle('sort-filter__list_hidden')
            }
        }
    })
})