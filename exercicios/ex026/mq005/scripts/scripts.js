
function handleClickBurguer() {
    menu.classList.toggle('menuOpen');
}

const burguer = document.querySelector("#burguer");
const menu = document.querySelector("#menu");

burguer.addEventListener('click', handleClickBurguer);