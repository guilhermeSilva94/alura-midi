function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

while (contador < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contador]

  const instrumento = tecla.classList[1]

  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(idAudio)
  };

  contador++

  tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa')
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }
}