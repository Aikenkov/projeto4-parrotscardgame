
/* 
let quantidade = prompt('Escolha o número de cartasSelecionadas (4-14)(par)')

function escolherQuantidade() {
    while (quantidade < 4 || quantidade > 14 || quantidade % 2 !== 0) {

        quantidade = prompt('Escolha um número par de 4 a 14')
    }
}
escolherQuantidade() */

quantidade = 8;

function comparador() {
    return Math.random() - 0.5;
}

const cartasImagens = ["plant1", "plant2", "plant3", "plant4", "plant5", "plant6", "plant7"];
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
        <div onclick="virarCarta(this)" class="carta virar" >
                    <div class="face verso hidden">
                        <img src="./images/${cartasSelecionadas[i]}.gif"/>
                    </div>
                    <div class="face frente">
                        <img src="./images/plantFront.png">
                    </div>
                </div>
        `;

        document.querySelector(".campo-de-jogo").innerHTML += carta;

    }
}
distribuir()


let frente;
let verso;

function virarCarta(elemento) {
    let clicada = elemento.querySelector(".frente").parentNode;
    clicada.classList.toggle("virar");

    frente = elemento.querySelector(".frente");
    verso = elemento.querySelector(".verso");

    setTimeout(esconderFrente, 500);
    setTimeout(esconderVerso, 500);
}

function esconderVerso() {
    if (verso.classList.contains("hidden")) {
        verso.classList.remove("hidden")
    } else {
        verso.classList.add("hidden")
    }
}

function esconderFrente() {
    if (frente.classList.contains("hidden")) {
        frente.classList.remove("hidden")
    } else {
        frente.classList.add("hidden")
    }
}
