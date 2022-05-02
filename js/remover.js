var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function (event){
    if (event.target.tagName != "TH") event.target.parentNode.remove();
});
