
/* 
let quantidade = prompt('Escolha o número de cartasSelecionadas (4-14)(par)')

function escolherQuantidade() {
    while (quantidade < 4 || quantidade > 14 || quantidade % 2 !== 0) {

        quantidade = prompt('Escolha um número par de 4 a 14')
    }
}
escolherQuantidade() */

quantidade = 6;

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
        <div onclick="virarCarta(this)" class="${i} ${cartasSelecionadas[i]} carta virar">
                    <div class=" face frente">
                        <img src="./images/plantFront.png">
                    </div>
                   
                    <div class="face verso hidden">
                        <img src="./images/${cartasSelecionadas[i]}.gif"/>
                    </div>                  
          </div>
        `;

        document.querySelector(".campo-de-jogo").innerHTML += carta;

    }
}
distribuir()


let cartasViradas = 0;
let vezesViradas = 0;
let totalCartasViradas = 0;

let carta1, carta2;
let id2, id1;
let image1, image2;


function virarCarta(elemento) {

    elemento.classList.remove('virar')
    vezesViradas++;
    setTimeout(function () {
        elemento.querySelector(".verso").classList.remove("hidden");
        elemento.querySelector(".frente").classList.add("hidden");

    }, 100);

    function virarCima(elemento) {
        elemento.classList.remove("virar");

        setTimeout(function () {
            elemento.querySelector(".verso").classList.remove("hidden");
            elemento.querySelector(".frente").classList.add("hidden");
        }, 100)
    }

    function virarBaixo(elemento) {
        elemento.classList.add("virar");

        setTimeout(function () {
            elemento.querySelector(".frente").classList.remove("hidden");
            elemento.querySelector(".verso").classList.add("hidden");
        }, 100)
    }

    verificarPar()
    function verificarPar() {
        if (cartasViradas == 1) {
            carta2 = elemento;
            image2 = elemento.classList[1];
            id2 = elemento.classList[0];
            if (image1 == image2 && id1 !== id2) {
                totalCartasViradas += 2;
                cartasViradas = 0;
            } else {
                cartasViradas = 0;

                function virarCarta1() {
                    virarBaixo(carta1);
                }
                setTimeout(virarCarta1, 1000)

                function virarCarta2() {
                    virarBaixo(carta2);
                }
                setTimeout(virarCarta2, 1000)
            }
        } else if (cartasViradas == 0) {
            carta1 = elemento;
            image1 = elemento.classList[1];
            id1 = elemento.classList[0];
            cartasViradas++;
        }


    }
    parabenizar()
}

function parabenizar() {
    if (totalCartasViradas == quantidade) {
        let mensagem = document.querySelector('.conteudo')
        mensagem.innerHTML = ` <div class="tela-final">
        <div>
            <p>Você ganhou em ${vezesViradas} jogadas!</p>
            <img src="./images/plant5.gif">
        </div>
    </div>`

    }
}


