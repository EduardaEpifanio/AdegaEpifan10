let carrinho = [];

function adicionar(item) {
  carrinho.push(item);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  carrinho.forEach(produto => {
    const li = document.createElement("li");
    li.textContent = produto;
    lista.appendChild(li);
  });
}

function enviarPedido() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  const numero = "5599999999999"; // 👈 Coloque seu número aqui com DDD e código do país (ex: 55)
  const mensagem = `Olá! Gostaria de pedir:\n\n${carrinho.join('\n')}`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, '_blank');
}
