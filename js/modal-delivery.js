document.addEventListener('DOMContentLoaded', function () {
    let radioButton = document.getElementById('how-delivery2');
    let modal = document.querySelector('.modal-delivery');


    radioButton.addEventListener('click', function () {
        if (radioButton.checked) {
            modal.style.display = 'flex';
            document.body.style.overflowY = 'hidden'

        }
    });

});