let progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
let next1 = document.querySelector('#nxt');
const circles = document.querySelectorAll('.circle');


let currentActive = 1

next1.addEventListener('click', () => {
    console.log(next1);
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('active');

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next1.disabled = true;
    } else {
        prev.disabled = false;
        next1.disabled = false;
    }
};