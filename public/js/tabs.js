let tabsGoods = document.querySelectorAll('.goods_nav div')
let allGoodsSliders = document.querySelectorAll('.goods__slider')


allGoodsSliders.forEach(el => {
    if (el.getAttribute('data-goods') !== '1') {
        el.style.visibility = 'hidden'
    }
})

tabsGoods.forEach(el => {
    el.addEventListener('click', () => {
        if (document.querySelector(`.goods__slider[data-goods="${el.getAttribute('data-goods')}"]`)) {
            let neededSlider = document.querySelector(`.goods__slider[data-goods="${el.getAttribute('data-goods')}"]`);
            console.log(neededSlider)
            neededSlider.style.visibility = 'visible'
            allGoodsSliders.forEach(e => {
                    if (e.getAttribute('data-goods') !== neededSlider.getAttribute('data-goods')) {
                        e.style.visibility = 'hidden'
                    }
                }
            )
        }
    })
})


let tabsTarif = document.querySelectorAll('.tarif-nav div')
let allTarifSliders = document.querySelectorAll('.slider-tarif')


allTarifSliders.forEach(el => {
    if (el.getAttribute('data-tarif') !== '1') {
        el.style.visibility = 'hidden'
    }
})

tabsTarif.forEach(el => {
    el.addEventListener('click', () => {
        let neededSlider = document.querySelector(`.slider-tarif[data-tarif="${el.getAttribute('data-tarif')}"]`);
        neededSlider.style.visibility = 'visible'
        allTarifSliders.forEach(e => {
                if (e.getAttribute('data-tarif') !== neededSlider.getAttribute('data-tarif')) {
                    e.style.visibility = 'hidden'
                }
            }
        )
    })
})


let tabsUslugi = document.querySelectorAll('.uslugi-nav div')
let allUslugiSliders = document.querySelectorAll('.uslugi__body')


allUslugiSliders.forEach(el => {
    if (el.getAttribute('data-uslugi') !== '1') {
        el.style.visibility = 'hidden'
    }
})

tabsUslugi.forEach(el => {
    el.addEventListener('click', () => {
        let neededSlider = document.querySelector(`.uslugi__body[data-uslugi="${el.getAttribute('data-uslugi')}"]`);
        neededSlider.style.visibility = 'visible'
        allUslugiSliders.forEach(e => {
                if (e.getAttribute('data-uslugi') !== neededSlider.getAttribute('data-uslugi')) {
                    e.style.visibility = 'hidden'
                }
            }
        )
    })
})