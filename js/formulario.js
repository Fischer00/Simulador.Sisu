var botaoAdicionar = document.querySelector("#adicionarNota");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var formulario = document.querySelector("#form-adiciona");
    var aluno = obtemAlunoDoFormulario(formulario);
    var alunoTr = montaTr(aluno);
    var erros = validaAluno(aluno);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
    }

    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
    formulario.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function obtemAlunoDoFormulario(formulario) {

    let aluno = {
        nomeAluno: formulario.nome.value,
        notaLing: formulario.notaLing.value,
        notaCH: formulario.notaCH.value,
        notaRed: formulario.notaRed.value,
        notaMat: formulario.notaMat.value,
        notaCN: formulario.notaCN.value,
        media: calculoMedia(formulario.notaLing.value, formulario.notaCH.value, formulario.notaRed.value, formulario.notaMat.value, formulario.notaCN.value),
    }
    return aluno;
}

function montaTr(aluno) {
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");
    alunoTr.appendChild(montaTd(aluno.nomeAluno, "infoNome"));
    alunoTr.appendChild(montaTd(aluno.notaLing, "infoLing"));
    alunoTr.appendChild(montaTd(aluno.notaCH, "infoCH"));
    alunoTr.appendChild(montaTd(aluno.notaRed, "infoRed"));
    alunoTr.appendChild(montaTd(aluno.notaMat, "infoMat"));
    alunoTr.appendChild(montaTd(aluno.notaCN, "infoCN"));
    alunoTr.appendChild(montaTd(aluno.media, "media"));

    if(aluno.media >= 650){
        alunoTr.style.backgroundColor = "#00FA9A";
    }else{
        alunoTr.style.backgroundColor = "#B22222";
    }

    return alunoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}


function validaAluno(aluno) {

    var erros = [];

    if (aluno.nomeAluno.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (aluno.notaLing.length == 0) {
        erros.push("A nota de Linguagens não pode ser em branco");
    }
    if (aluno.notaCH.length == 0) {
        erros.push("A nota de Ciências Humanas não pode ser em branco");
    }

    if (aluno.notaRed.length == 0) {
        erros.push("A nota de Redação não pode ser em branco");
    }

    if (aluno.notaMat.length == 0) {
        erros.push("A nota de matemática não pode ser em branco");
    }

    if (aluno.notaCN.length == 0) {
        erros.push("A nota de Ciências da Natureza não pode ser em branco");
    }


    if (!validaNotas(aluno.notaLing)) {
        erros.push("Sua nota de Linguagens está baixa, tente estudar mais");
    }
    if (!validaNotas(aluno.notaCH)) {
        erros.push("Sua nota de Ciências Humana está baixa, tente estudar mais");
    }
    if (!validaNotas(aluno.notaRed)) {
        erros.push("Sua nota de Redação está baixa, tente estudar mais");
    }
    if (!validaNotas(aluno.notaCN)) {
        erros.push("Sua nota de Ciências da Natureza está baixa, tente estudar mais");
    }
    if (!validaNotas(aluno.notaMat)) {
        erros.push("Sua nota de Matemática está baixa, tente estudar mais");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}