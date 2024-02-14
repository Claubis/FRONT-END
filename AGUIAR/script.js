
// Ajuste para os feedbacks

const allStar = document.querySelectorAll('.rating .star');
const ratingValue = document.querySelector('.rating input');

allStar.forEach((item, idx) => {
    item.addEventListener('click', function () {
        ratingValue.value = idx + 1;

        allStar.forEach((star, index) => {
            if (index <= idx) {
                star.classList.add('bxs-star');
                star.classList.remove('bx-star');
            } else {
                star.classList.add('bx-star');
                star.classList.remove('bxs-star');
            }
        });
    });
});


