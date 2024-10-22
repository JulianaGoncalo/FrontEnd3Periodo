const nomeLivro = "Orgulho e preconceito";
const anoLivro = 2005
const autor = "Jane Austen";

const nomeFilme = "Orgulho e preconceito";
const anoFilme = 2008
const diretor = "Joe Wrigth";

const livro = {
    nome: "Orgulho e preconceito",
    ano: 2005,
}



function logAula(nome, horas){
    
    console.log(nome, horas);
    const aula = "Front-end";
    const aula2 = "backend";
    return aula + nome;
    

}

// logAula("javascript",40);
// logAula("html");

const retorno = logAula("html", 50)
console.log(retorno);
