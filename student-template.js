"use strict";

// 1. Изменение текста заголовка.
function changeTitle(text) {
  const el = document.getElementById('main-title');
  el.textContent = text;
  return el.textContent;
}

// 2. Показать / скрыть информационный блок.
function toggleInfo() {
  const el = document.getElementById('info-block');
  el.classList.toggle('hidden');
  return !el.classList.contains('hidden');
}

// 3. Изменение ссылки.
function updateLink(url, label) {
  const link = document.getElementById('main-link');
  link.textContent = label;
  link.setAttribute('href', url);
  return link;
}

// 4. Динамический пункт списка.
function addListItem(text) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;

  const btn = document.createElement('button');
  btn.textContent = 'Удалить';
  btn.addEventListener('click', () => li.remove());

  li.appendChild(span);
  li.appendChild(btn);

  document.getElementById('task-list').appendChild(li);
  return li;
}

// 5. Карточка товара.
function createProductCard(product) {
  const article = document.createElement('article');
  article.classList.add('product-card');

  const h3 = document.createElement('h3');
  h3.textContent = product.name;

  const p = document.createElement('p');
  p.textContent = `Цена: ${product.price} ₸`;

  article.appendChild(h3);
  article.appendChild(p);
  return article;
}

// 6. Вывод массива товаров.
function renderProducts(products) {
  const container = document.getElementById('products');
  container.innerHTML = '';
  products.forEach((product) => {
    container.appendChild(createProductCard(product));
  });
  return products.length;
}

window.domLab = {
  changeTitle,
  toggleInfo,
  updateLink,
  addListItem,
  createProductCard,
  renderProducts,
};