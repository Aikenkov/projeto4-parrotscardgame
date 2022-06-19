let field = document.querySelector('.game-field');
let quantidade = prompt('Escolha o número de cartas (4-14)(par)')
distribuir()
function distribuir() {
    while (quantidade < 4 || quantidade > 14 || quantidade % 2 !== 0) {

        quantidade = prompt('Escolha o número de cartas (4-14)(par)')
    }

}

function vira(element) {
    let front = element.querySelector('front-face face');
    front.classList.add('turn')
    let back = element.querySelector('back-face face');
    back.classList.add('turn')
}

const nomes = ["unicorn", "fiesta", "bobross", "explody", "metal", "revertit", "triplets"];

for (let i = 0; i < quantidade / 2; i++) {
    const cartaTemplate = `
    <div class="carta">
      <img src="./images/${nomes[i]}parrot.gif"/>
      <img src="./images/${nomes[i]}parrot.gif"/>
    </div>
`;

    document.querySelector(".game-field").innerHTML += cartaTemplate;
}
