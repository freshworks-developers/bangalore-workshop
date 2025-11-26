let client;

init();

async function init() {
  client = await app.initialized();
  client.events.on('app.activated', renderText);
}

async function renderText() {
  const products = await fetchProducts();
  renderProducts(products);
}

async function fetchProducts() {
  try {
    const productsResponse = await client.request.invokeTemplate(
      "fakeStoreGetProducts", {});
    
    const productsJSON = JSON.parse(productsResponse.response);
    return productsJSON.data
  } catch (err) {
    // Handle the error
    console.error(err);
  }
}

function renderProducts(products) {
  const container = document.getElementById('product-container');
  
  container.innerHTML = products.map(product => `
    <div class="fw-card-1 fw-p-24 fw-flex fw-flex-row">
      <section class="fw-flex-grow">
        <h5 class="fw-type-h5 fw-my-0">${product.name}</h5>
        <img height="60" width="60" src="${product.images['2']['url']}" alt="${product.title}">
        <p class="fw-type-xs fw-my-0">${product.description}</p>
        <strong>$${product.price}</strong>
      </section>
      <section class="fw-flex-grow-0">
        <fw-button color="secondary" class="fw-type-h6">Change Status</fw-button>
      </section>
    </div>
  `).join('');
}

