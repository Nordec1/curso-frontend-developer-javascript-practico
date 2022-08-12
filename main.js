const menuEmail = document.querySelector('.navbar-email');
const menuBurguer = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMenuMobile);
menuCarrito.addEventListener('click', toggleShoppingCart);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    menuMobile.classList.remove('active');
    shoppingCartContainer.classList.add('inactive');
};

function toggleMenuMobile() {
    menuMobile.classList.toggle('active');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
};

function toggleShoppingCart() {
    shoppingCartContainer.classList.toggle('inactive');    
    menuMobile.classList.remove('active');
    desktopMenu.classList.add('inactive');
};

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Laptop',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(array) {
    for(product of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name

        productInfoDiv.append(productPrice, productName);
        
        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImage, productInfo);

        cardsContainer.appendChild(productCard);
    };
};

renderProducts(productList);