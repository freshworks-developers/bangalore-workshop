var client;

init();

async function init() {
  client = await app.initialized();
  client.events.on('app.activated', renderText);
}

async function renderText() {
  let products = await fetchProducts();
  renderProducts(products);
}

async function fetchProducts() {
  try {
    let productsResponse = await client.request.invokeTemplate(
      "fakeStoreGetProducts", {});
    let productsJSON = JSON.parse(productsResponse.response);
    return productsJSON
  } catch (err) {
    // Handle the error
    console.error(err);
  }
}

function renderProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  products.forEach((product) => {
    // Create all elements
    const productCard = document.createElement('div');
    const leftSection = document.createElement('section');
    const h5 = document.createElement('h5');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const strong = document.createElement('strong');
    const rightSection = document.createElement('section');
    const fwButton = document.createElement('fw-button');

    // Set attributes and content for elements
    productCard.className = 'fw-card-1 fw-p-24 fw-flex fw-flex-row';

    leftSection.className = 'fw-flex-grow';

    h5.className = 'fw-type-h5 fw-my-0';
    h5.textContent = product.title;

    img.height = 60;
    img.width = 60;
    img.src = product.image;

    p.className = 'fw-type-xs fw-my-0';
    p.textContent = product.description;

    strong.textContent = `$${product.price}`;

    rightSection.className = 'fw-flex-grow-0';

    fwButton.setAttribute('color', 'secondary');
    fwButton.className = 'fw-type-h6';
    fwButton.textContent = 'Change Status';

    // Append elements to their respective containers
    leftSection.appendChild(h5);
    leftSection.appendChild(img);
    leftSection.appendChild(p);
    leftSection.appendChild(strong);

    rightSection.appendChild(fwButton);

    productCard.appendChild(leftSection);
    productCard.appendChild(rightSection);

    container.appendChild(productCard);
  });
}

