const containerAll = document.querySelectorAll('.panel');

console.log(containerAll);

containerAll.forEach(element => {
    element.addEventListener('click', function () {
        removeActiveClasses();
        element.classList.add('active');
    });
})

function removeActiveClasses() {
    containerAll.forEach(element => {
        element.classList.remove('active');
    });
}