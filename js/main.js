const products = [
  {
    name: "Produto 1",
    description: "Descrição do produto 1",
    price: "R$ 29,90",
    image: "https://via.placeholder.com/300x200?text=Produto+1",
 codex/create-new-product-catalog-from-scratch-al1vk9
    category: "Bebidas",

 main
  },
  {
    name: "Produto 2",
    description: "Descrição do produto 2",
    price: "R$ 59,90",
    image: "https://via.placeholder.com/300x200?text=Produto+2",
 codex/create-new-product-catalog-from-scratch-al1vk9
    category: "Lanches",

 main
  },
  {
    name: "Produto 3",
    description: "Descrição do produto 3",
    price: "R$ 89,90",
    image: "https://via.placeholder.com/300x200?text=Produto+3",
 codex/create-new-product-catalog-from-scratch-al1vk9
    category: "Bebidas",

 main
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

 codex/create-new-product-catalog-from-scratch-al1vk9

  const button = document.createElement("button");
  button.textContent = "Adicionar ao carrinho";

 main
  info.appendChild(title);
  info.appendChild(desc);
  info.appendChild(price);
  card.appendChild(img);
  card.appendChild(info);
 codex/create-new-product-catalog-from-scratch-al1vk9

  card.appendChild(button);
 main

  return card;
}

function renderProducts(list) {
  const container = document.getElementById("product-list");
 codex/create-new-product-catalog-from-scratch-al1vk9
  container.innerHTML = "";

 main
  list.forEach((product) => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

 codex/create-new-product-catalog-from-scratch-al1vk9
function renderCategories(list) {
  const nav = document.getElementById("category-nav");
  const categories = [...new Set(list.map((p) => p.category))];

  const allButton = document.createElement("button");
  allButton.textContent = "Todos";
  allButton.addEventListener("click", () => renderProducts(list));
  nav.appendChild(allButton);

  categories.forEach((cat) => {
    const button = document.createElement("button");
    button.textContent = cat;
    button.addEventListener("click", () => {
      const filtered = list.filter((p) => p.category === cat);
      renderProducts(filtered);
    });
    nav.appendChild(button);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories(products);

document.addEventListener("DOMContentLoaded", () => {
 main
  renderProducts(products);
});
