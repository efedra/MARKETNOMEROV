const stars = document.querySelectorAll('.star');
let pickStar = false;

stars.forEach(star => {

    star.addEventListener('mouseover', () => {
        if (!pickStar) {
            const currentStar = parseInt(star.getAttribute('data-star'));
            for (let i = 0; i < currentStar; i++) {
                stars[i].querySelector('path').classList.add('active');
            }
        }
    });


    star.addEventListener('mouseout', () => {
        if (!pickStar) {
            stars.forEach(star => star.querySelector('path').classList.remove('active'));
        }

    });

    star.addEventListener('click', () => {
        pickStar = true;
        const currentStar = parseInt(star.getAttribute('data-star'));
        for (let i = 0; i < stars.length ; i++) {
            if (i < currentStar) {
                stars[i].querySelector('path').classList.add('active');
            } else {
                stars[i].querySelector('path').classList.remove('active');
            }
        }
    });
});