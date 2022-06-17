let quantidade = prompt('Escolha o número de cartas (4-14)(par)')
distribuir()
function distribuir() {
    while (quantidade < 4 || quantidade > 14 || quantidade % 2 !== 0) {

        quantidade = prompt('Escolha o número de cartas (4-14)(par)')
    }
    distribuir()
}

function vira(element) {
    let front = element.querySelector('front-face face');
    front.classList.add('turn')
    let back = element.querySelector('back-face face');
    back.classList.add('turn')




}