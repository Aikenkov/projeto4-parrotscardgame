

let quantidade = prompt('Escolha o número de cartasSelecionadas (4-14)(par)')

function escolherQuantidade() {
    while (quantidade < 4 || quantidade > 14 || quantidade % 2 !== 0) {

        quantidade = prompt('Escolha um número par de 4 a 14')
    }
}
escolherQuantidade()

function comparador() {
    return Math.random() - 0.5;
}

const cartasImagens = ["unicorn", "fiesta", "bobross", "explody", "metal", "revertit", "triplets"];
cartasImagens.sort(comparador);

let cartasSelecionadas = [];

function aleatorizar() {
    for (let i = 0; i < quantidade / 2; i++) {
        cartasSelecionadas.push(cartasImagens[i]);
        cartasSelecionadas.sort(comparador);
        cartasSelecionadas.push(cartasImagens[i]);
        cartasSelecionadas.sort(comparador);
    }
}
aleatorizar()

function distribuir() {
    for (let i = 0; i < cartasSelecionadas.length; i++) {
        let carta = `
        <div class="carta">
            <img src="./images/${cartasSelecionadas[i]}parrot.gif"/>
        </div>`;

        document.querySelector(".game-field").innerHTML += carta;

    }
}
distribuir()