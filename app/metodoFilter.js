const botoes = document.querySelectorAll(".btn")
botoes.forEach(btn => btn.addEventListener("click", filtarLivros))

function filtarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorQuantidade() : filtrarPorCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel'){
        const valorTotal = calcularValorTotal(livrosFiltrados);
        exibirValorTotalNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria){
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorQuantidade(){
    return livros.filter(livro => livro.quantidade > 0)
}



function exibirValorTotalNaTela(valorTotal){
    elementoValorTotalDisponivel.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$<span id="valor">${valorTotal},00</span></p>
        </div>
    `
}
