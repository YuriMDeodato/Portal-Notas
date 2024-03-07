var qtdNotas = 4;
function calcular() {
    let notaParcial = 0;
    let notaSoma = 0;
    let mediaFinal = 0;
    //entrada dos dados
    for(let nota = 1; nota <= qtdNotas; nota++){
        notaParcial = Number(document.getElementById("nota$(nota)-1").value);
        notaSoma = notaSoma + notaParcial;
    }

  // let n2 = Number(document.getElementById("nota2-1").value);
  // let n3 = Number(document.getElementById("nota3-1").value);
  // let n4 = Number(document.getElementById("nota4-1").value);
 //processamento dos dados
 
  mediaFinal1 = (notaSoma)/qtdNotas;
  
 //saída de dados
  document.getElementById('media1').innerText = mediaFinal;

}
 