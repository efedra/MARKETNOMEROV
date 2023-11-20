document.addEventListener('DOMContentLoaded', () => {
    let counters = document.querySelectorAll('.modal-basket__count-manage')


    counters.forEach(counter => {
        let minus = counter.children[0]
        let value = counter.children[1]
        let plus = counter.children[2]

        minus.addEventListener('click', () => {
            value.innerHTML= parseInt(value.innerHTML) - 1
        })
        plus.addEventListener('click', () => {
            value.innerHTML= parseInt(value.innerHTML) + 1
        })
    })
})
