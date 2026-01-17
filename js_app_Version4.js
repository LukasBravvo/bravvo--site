// Dados de exemplo — altere ou carregue via API
const whatsapp = "5522992291720";

const produtos = [
  {
    nome: "Camiseta Bravvo Preta",
    preco: 79.9,
    img: "https://via.placeholder.com/600x600?text=Camiseta+Preta",
  },
  {
    nome: "Camiseta Bravvo Branca",
    preco: 79.9,
    img: "https://via.placeholder.com/600x600?text=Camiseta+Branca",
  },
  {
    nome: "Bermuda Moletom",
    preco: 89.9,
    img: "https://via.placeholder.com/600x600?text=Bermuda+Moletom",
  }
];

function formatBRL(value){
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function criarCard(prod){
  const card = document.createElement('article');
  card.className = 'produto';

  const img = document.createElement('img');
  img.src = prod.img;
  img.alt = prod.nome;
  img.loading = 'lazy';
  card.appendChild(img);

  const h4 = document.createElement('h4');
  h4.textContent = prod.nome;
  card.appendChild(h4);

  const preco = document.createElement('p');
  preco.className = 'preco';
  preco.textContent = formatBRL(prod.preco);
  card.appendChild(preco);

  const a = document.createElement('a');
  a.className = 'btn';
  a.href = gerarLinkWhats(prod);
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.setAttribute('aria-label', `Comprar ${prod.nome} pelo WhatsApp`);
  a.textContent = 'Comprar no WhatsApp';

  card.appendChild(a);

  return card;
}

function gerarLinkWhats(prod){
  const mensagem =
`Olá, quero comprar:
${prod.nome}
Valor: ${formatBRL(prod.preco)}`;
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

function carregar(){
  const area = document.getElementById('produtos');
  const vazio = document.getElementById('vazio');

  if(!produtos || produtos.length === 0){
    vazio.hidden = false;
    return;
  }

  produtos.forEach(p => {
    const card = criarCard(p);
    area.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', carregar);