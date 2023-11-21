let clearButton = document.querySelector('.clear');

let oneInput = document.querySelectorAll('.input-one-numb')
let searchInput = document.querySelector('.search-number')
let xz = document.querySelector('.input-xz')
let inputs = [...oneInput,searchInput, xz]

clearButton.addEventListener('click',function (){
    inputs.forEach(el=>{
        el.value = null;
    })
})