# Building a simple Ecommerce App with Fakestore API

[Fakestore API](https://fakestoreapi.com/) is a Fake store rest API for your e-commerce or shopping website prototype.

We will be using [Products](https://fakestoreapi.com/products) endpoint for our use case

1. Ensure you have followed the steps given in [getting started guide](../../step-1/getting_started.md)
2. Create a new directory to `store-app` directory from CLI and navigate to it
3. Run command `fdk run` to run the app
4. Change `index.html` section body to
   existing html
   ```html
    <body>
    <div class="main">
        <p>Utilize this template code to build your App</p>
        <p id="apptext"></p>
    </div>
    </body>
   ```
   new html
   ```html
    <body>
        <div class="main">
        <div id="product-container"></div>
        </div>
    </body>
   ```
5. Create new file with name `requests.json` under `config`
6. Add below content to `requests.json`
   ```js
    {
        "fakeStoreGetProducts": {
        "schema": {
            "method": "GET",
            "host": "<%= iparam.hostName %>",
            "path": "/products",
            "headers": {
            "Content-Type": "application/json"
            }
        },
        "options": {
            "maxAttempts": 3,
            "retryDelay": 1000
        }
        }
    }   
    ```
7. Include request template in `manifest.json` using snippet below
   ```json
    "location": {
        "full_page_app": {
          "url": "index.html",
          "icon": "styles/images/icon.svg"
        }
      },
      "requests": {
        "fakeStoreGetProducts": {}
      }
   ```
8. Update `iparams.json` with below snippet
    ```json
    {
        "hostName": {
        "display_name": "Host Name",
        "description": "Enter the API host name",
        "type": "text",
        "required": true
        }
    }
    ```
9.  In your `app.js` change the sections as below
    Old content
    ```js
    async function init() {
    client = await app.initialized();
    client.events.on('app.activated', renderText);
    }

    async function renderText() {
    let products = await fetchProducts();
    renderProducts(products);
    }
    ```
10. Add `fetchProducts()` definition as below
    ```js
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
    ```
11. Add `renderProducts(products)` definition
    ```js
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
    ```
12. Run the app using `fdk run`
13. Navigate to `http://localhost:10001/custom_configs` and add iparam value as `fakestoreapi.com`
14. Navigate to your product page - https://[subdomain].[product].com/a/apps/indev-storeapp?dev=true Eg: https://paidappdemo.freshdesk.com/a/apps/indev-storeapp?dev=true
15. Verify your app changes