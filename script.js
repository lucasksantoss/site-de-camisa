// Função para alertar quando um produto é adicionado ao carrinho
const buttons = document.querySelectorAll('.btn-comprar');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Produto adicionado ao carrinho!");
    });
});
