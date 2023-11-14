let lists = document.querySelectorAll('.sort-filter__elem')

lists.forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target.closest('.sort-filter__input')) {
            el.querySelector('.sort-filter__input').classList.toggle('sort-filter__input_active')
            el.querySelector('.sort-filter__list').classList.toggle('sort-filter__list_hidden')
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
        sortFilterList.classList.add('sort-filter__list_hidden');
        sortFilterElem.querySelector('.sort-filter__input').classList.remove('sort-filter__input_active')
    }
});