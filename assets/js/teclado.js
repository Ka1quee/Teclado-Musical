function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);
  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elelemento nao encontrado ou seletor inválido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[2];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
}
