function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const lista = document.querySelectorAll('.tecla');

let contador = 0;

for (contador < lista.length) {
    const tecla = lista[contador];
    const classe = tecla.classList[1];
    const idAudio = `#som_${classe}`;
    tecla.onclick = function () {
        tocar(idAudio);
    }

    contador = contador + 1;


    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa')
            //console.log(evento.code === 'Enter' || evento.code === 'Space')
        }
        tecla.onkeyup - function () {
            tecla.classList.remove('ativa');

        }


    }