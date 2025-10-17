/*Cette fonction permet de déclencher l'affichage du menu sur mobile*/
let menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
    document.querySelector('.links-list').classList.toggle('active', document.querySelector('.links-list').classList.add("animation-in"));
});

/*Cette fonction permet d'ajouter la classe "select-link" au lien cliqué*/
let link = document.querySelectorAll('.link');
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', () => {
        link.forEach(l => l.classList.remove('select-link'));
        link[i].classList.add('select-link');
        // Ferme le menu après la sélection d'un lien
        document.querySelector('.links-list').classList.remove('active');
    });
}
