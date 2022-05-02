var titulo = document.querySelector(".titulo");
titulo.textContent = "Simulador SISU";

var alunos = document.querySelectorAll(".aluno");

for (var i = 0; i < alunos.length; i++) {

    var alunoo = alunos[i];

    var tdNotaLing = alunoo.querySelector(".notaLing");
    var notaLing = tdNotaLing.textContent;

    var tdNotaCH = alunoo.querySelector(".notaCH");
    var notaCH = tdNotaCH.textContent;

    var tdNotaRed = alunoo.querySelector(".notaRed");
    var notaRed = tdNotaRed.textContent;

    var tdNotaMat = alunoo.querySelector(".notaMat");
    var notaMat = tdNotaMat.textContent;

    var tdNotaCN = alunoo.querySelector(".notaCN");
    var notaCN = tdNotaCN.textContent;

    var notaLingValida = validaNotas(notaLing);
    var notaCHValida = validaNotas(notaCH);
    var notaRedValida = validaNotas(notaRed);
    var notaMatValida = validaNotas(notaMat);
    var notaCNValida = validaNotas(notaCN);

    if (!notaLingValida) {
        notaLingValida = false;
        tdMedia.textContent = "Nota de Linguagens inválido";
        alunoo.classList.add("alunoInvalido");
    }

    if (!notaCHValida) {
        notaCHValida = false;
        tdMedia.textContent = "Nota de Ciências Humanas inválida";
        alunoo.classList.add("alunoInvalido");
    }

    if (!notaRedValida) {
        notaRedValida = false;
        tdMedia.textContent = "Nota de Redação Inválida";
        alunoo.classList.add("alunoInvalido");
    }

    if (!notaMatValida) {
        notaMatValida = false;
        tdMedia.textContent = "Nota de Matemática Inválida";
        alunoo.classList.add("alunoInvalido");
    }

    if (!notaCNValida) {
        notaCNValida = false;
        tdMedia.textContent = "Nota de Ciências da Natureza inválida";
        alunoo.classList.add("alunoInvalido");
    }

    if (notaLingValida && notaCHValida && notaRedValida && notaMatValida && notaCNValida) {
        var media = calculoMedia(notaLing, notaCH, notaRed, notaMat, notaCN);
    }
}

function calculoMedia(notaLing, notaCH, notaRed, notaMat, notaCN){
    media = (notaCH + notaCN + notaLing + notaRed + notaMat) / 5;

    return media.toFixed(2)
}

function validaNotas (nota){
    if (nota >= 0 && nota <= 1000){
        return true;
    }
}