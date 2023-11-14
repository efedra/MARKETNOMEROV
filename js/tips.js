let text = document.querySelector('.link-underline')
let flag = false

text.addEventListener('click', () => {
    flag = !flag;
    if (flag) {
        document.getElementById('tips').style.display = 'grid';
    } else {
        document.getElementById('tips').style.display = 'none';
    }
})

let hideSortFilter =  document.querySelector('.hide-filter')
let flagSortFilter = false

hideSortFilter.addEventListener('click', () => {
    flagSortFilter = !flagSortFilter;
    if (flagSortFilter) {
        document.querySelector('.sort-filter').style.display = 'grid';
    } else {
        document.querySelector('.sort-filter').style.display = 'none';
    }
})