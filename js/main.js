const products = [
  {
    name: "Produto 1",
    description: "Descrição do produto 1",
    price: "R$ 29,90",
    image: "https://via.placeholder.com/300x200?text=Produto+1",
  },
  {
    name: "Produto 2",
    description: "Descrição do produto 2",
    price: "R$ 59,90",
    image: "https://via.placeholder.com/300x200?text=Produto+2",
  },
  {
    name: "Produto 3",
    description: "Descrição do produto 3",
    price: "R$ 89,90",
    image: "https://via.placeholder.com/300x200?text=Produto+3",
  },
];

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;

  const info = document.createElement("div");
  info.className = "product-info";

  const title = document.createElement("h2");
  title.textContent = product.name;

  const desc = document.createElement("p");
  desc.textContent = product.description;

  const price = document.createElement("div");
  price.className = "product-price";
  price.textContent = product.price;

  const button = document.createElement("button");
  button.textContent = "Adicionar ao carrinho";

  info.appendChild(title);
  info.appendChild(desc);
  info.appendChild(price);
  card.appendChild(img);
  card.appendChild(info);
  card.appendChild(button);

  return card;
}

function renderProducts(list) {
  const container = document.getElementById("product-list");
  list.forEach((product) => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
