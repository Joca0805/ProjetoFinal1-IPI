var lista_de_produtos = []


while(true){

    var opcao = prompt(`
    Bem vindo ao cadastro de produtos! :)
    
    1. Cadastrar novo produto
    2. Editar produto
    3. Remover produto
    4. Visualizar todos os produtos
`)

if(opcao == 1) {
    var produto = Cadastrar()
    lista_de_produtos.push(produto)

}else if(opcao == 2){
    //codigo para editar produto
    var i = prompt("Digite o indice do produto que deseja editar de 0 à " + (lista_de_produtos.length - 1));
    var produtoEditar = prompt("Digite o novo nome do produto: " + lista_de_produtos[i]);
    lista_de_produtos[i] = produtoEditar;
}else if(opcao == 3){
    //codigo para remover
    var i = prompt("Digite o indice do produto que deseja editar de 0 à " + (lista_de_produtos.length - 1));
    lista_de_produtos.splice(i,1);

}else if(opcao == 4){
    //codigo para visualizar
    alert(lista_de_produtos.join("\n"));
}else{
    alert("Nunhuma das opções foi selecionada!")
}

function Cadastrar() {
    var produto = prompt("Digite o nome do produto");
    return produto;
}
}