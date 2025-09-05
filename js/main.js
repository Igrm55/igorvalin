const products = [
  {
    name: "Produto 1",
    description: "Descrição do produto 1",
    price: "R$ 29,90",
    image: "https://via.placeholder.com/300x200?text=Produto+1",
    category: "Bebidas",
  },
  {
    name: "Produto 2",
    description: "Descrição do produto 2",
    price: "R$ 59,90",
    image: "https://via.placeholder.com/300x200?text=Produto+2",
    category: "Lanches",
  },
  {
    name: "Produto 3",
    description: "Descrição do produto 3",
    price: "R$ 89,90",
    image: "https://via.placeholder.com/300x200?text=Produto+3",
    category: "Bebidas",
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

  info.appendChild(title);
  info.appendChild(desc);
  info.appendChild(price);
  card.appendChild(img);
  card.appendChild(info);

  return card;
}

function renderProducts(list) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  list.forEach((product) => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

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
  renderProducts(products);
});
