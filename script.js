let menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
    document.querySelector('.links-list').classList.toggle('active', document.querySelector('.links-list').classList.add("animation-in"));
});

let link = document.querySelectorAll('.link');
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', () => {
        link.forEach(l => l.classList.remove('select-link'));
        link[i].classList.add('select-link');
        document.querySelector('.links-list').classList.remove('active');
    });
}
