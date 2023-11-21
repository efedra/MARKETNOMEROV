document.addEventListener('DOMContentLoaded', function () {
    let radioButton = document.getElementById('how-delivery2');
    let modal = document.querySelector('.modal-delivery');


    radioButton.addEventListener('click', function (e) {
        e.stopPropagation();
        if (radioButton.checked) {
            modal.style.display = 'flex';
            document.body.style.overflowY = 'hidden'
        }
    });

    //Закрытие модального окна
    document.addEventListener('click', (e) => {
        if (!modal.querySelector('.modal-delivery__window').contains(e.target)) {
            modal.style.display = 'none'
            document.body.style.overflowY = 'auto'
        }
    })
});