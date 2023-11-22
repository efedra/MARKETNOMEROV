let tabsScroll = document.querySelectorAll('.t02-main__elem');
let gridsScroll = document.querySelectorAll('._grid-tabs')

tabsScroll.forEach(el=>{
    el.addEventListener('click',()=>{
        el.classList.add('t02-main__elem_active')
        let neededGrid = document.querySelector(`._grid-tabs[data-scroll="${el.getAttribute('data-scroll')}"]`)
        neededGrid.classList.add('t02-grid_active')
        tabsScroll.forEach(scroll=>{
            if(scroll!==el){
                scroll.classList.remove('t02-main__elem_active')
            }
        })
        gridsScroll.forEach(scroll=>{
            if(scroll.getAttribute('data-scroll')!==neededGrid.getAttribute('data-scroll')){
                scroll.classList.remove('t02-grid_active')
            }
        })
    })
})