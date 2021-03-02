// arrays of objects
const products = [
    {
        id: 1,
        title: 'AC Milan Shirt',
        category: 'seriea',
        price: '59.99',
        img: 'img/shirts/1acmilan.jpg',
    },
    {
        id: 2,
        title: 'Arsenal Shirt',
        category: 'premier',
        price: '49.99',
        img: 'img/shirts/1arsenal.jpg',
    },
    {
        id: 3,
        title: 'Fiorentina Shirt',
        category: 'seriea',
        price: '34.99',
        img: 'img/shirts/1fiorentina.jpg',
    },
    {
        id: 4,
        title: 'Blackburn Shirt',
        category: 'premier',
        price: '44.99',
        img: 'img/shirts/1blackburn.jpg',
    },
    {
        id: 5,
        title: 'Valencia Shirt',
        category: 'laliga',
        price: '29.99',
        img: 'img/shirts/1valencia.jpg',
    },
    {
        id: 6,
        title: 'Sampdoria Shirt',
        category: 'seriea',
        price: '49.99',
        img: 'img/shirts/1sampdoria.jpg',
    },
    {
        id: 7,
        title: 'Bayern Munich Shirt',
        category: 'bundesliga',
        price: '39.99',
        img: 'img/shirts/1bayern.jpg',
    },
    {
        id: 8,
        title: 'Werder Bremen Shirt',
        category: 'bundesliga',
        price: '25.99',
        img: 'img/shirts/1werder.jpg',
    },
    {
        id: 9,
        title: 'Aston Villa Shirt',
        category: 'premier',
        price: '27.99',
        img: 'img/shirts/1astonvilla.jpg',
    },
    {
        id: 10,
        title: 'Inter Milan Shirt',
        category: 'seriea',
        price: '48.99',
        img: 'img/shirts/1intermilan.jpg',
    },
    {
        id: 11,
        title: 'Barcelona Shirt',
        category: 'laliga',
        price: '55.99',
        img: 'img/shirts/1barcelona.jpg',
    },
    {
        id: 12,
        title: 'Atletico Madrid Shirt',
        category: 'laliga',
        price: '29.99',
        img: 'img/shirts/1atletico.jpg',
    },
];

const specialOfferShirts = [
    {
        id: '1',
        title: 'Eric Cantona Shirt',
        desc: '1992-94 Manchester United Third Shirt',
        condition: 'Excellent',
        size: 'Medium',
        images: ['img/sale/1cantona.jpg', 'img/sale/1cantonaback.jpg'],
        oldPrice: '£45.99',
        newPrice: '£35.99',
    },
    {
        id: '2',
        title: 'Paul Gascoigne Shirt',
        desc: '1997-99 Rangers Home Shirt',
        condition: 'Very good',
        size: 'Large',
        images: ['img/sale/1gazza.jpg', 'img/sale/1gazzaback.jpg'],
        oldPrice: '£36.99',
        newPrice: '£28.99',
    },
    {
        id: '3',
        title: 'Alessandro Del Piero Shirt',
        desc: '2002-03 Juventus Home Shirt',
        condition: 'Excellent',
        size: 'Large',
        images: ['img/sale/1delpiero.jpg', 'img/sale/1delpieroback.jpg'],
        oldPrice: '£39.99',
        newPrice: '£31.99',
    },
];

// selections
const storeSection = document.getElementById('store-items');
const offersSection = document.getElementById('special-offers');
const filterBtns = document.querySelectorAll('.filter-btn');

// load all products
window.addEventListener('DOMContentLoaded', function () {
    displayProductItems(products);
    displaySpecialOffers(specialOfferShirts);
});

// listeners on league buttons to filter shirt categories
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const category = e.currentTarget.dataset.id;
        const productCategory = products.filter(function (product) {
            if (product.category === category) {
                return product;
            }
        });
        if (category === 'all') {
            displayProductItems(products);
        } else {
            displayProductItems(productCategory);
        }
    });
});

// mapping function to display regular shirts
function displayProductItems(productItems) {
    let displayProducts = productItems.map(function (item) {
        return `
        <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item">
            <div class="card single-item">
                <div class="img-container">
                    <img src="${item.img}" class="card-img-top store-img" alt="${item.title}">
                    <span class="store-item-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </span>
                </div>
                <div class="card-body">
                    <div class="card-text d-flex justify-content-between">
                        <h5 class="store-item-name" id="store-item-name"> ${item.title}</h5>
                        <h5 class="store-item-value">£ <strong id="store-item-price"
                                class="font-weight-bold">${item.price}</strong></h5>
                    </div>
                </div>
            </div>
        </div>
        `;
    })
    displayProducts = displayProducts.join('');
    storeSection.innerHTML = displayProducts;
}

// mapping function to display special offer shirts 
function displaySpecialOffers(specialOffers) {
    let displayOffers = specialOffers.map(function (item) {
        return `
        <div class="col-11 mx-auto col-md-6 col-lg-4 my-4 text-center">
            <h3 class="py-3">${item.title}</h3>
            <div class="text-muted reduced-spacing">
                <p class="my-2">${item.desc}</p>
                <p class="my-2">Condition: ${item.condition}</p>
                <p class="my-2">Size: ${item.size}</p>
                <p class="mb-3">Was <span class="old-price">${item.oldPrice}</span> Now <span class="new-price">${item.newPrice}</span></p>
                <div class="rel-img-container">
                    <img src="${item.images[1]}" class="img-fluid shirt-img" alt="back of ${item.title}">
                    <img src="${item.images[0]}" class="img-fluid shirt-img-behind" alt="front of ${item.title}"> 
                </div>
                <p class="flip-over mt-2"><i class="fas fa-hand-pointer mr-2"></i>Click image to see reverse</p>
                <button type="button" class="btn btn-order-green mb-3">Order Now</button>

            </div>
        </div>
        `;
    })
    displayOffers = displayOffers.join('');
    offersSection.innerHTML = displayOffers;
}



// IIFE to hide/show shopping cart
(function () {


    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function () {
        cart.classList.toggle('show-cart');
    });
})();



// add to basket function, creates elements in div using innerHTML 
function addToBasket() {
    storeSection.addEventListener('click', function (event) {
        if (event.target.parentNode.className === 'store-item-icon') {
            let fullPath = event.target.parentElement.previousElementSibling.src;
            console.log(fullPath);
            let pos = fullPath.indexOf('shirts') + 6;
            console.log(pos);
            let partPath = fullPath.slice(pos);
            console.log(partPath);

            let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

            let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
            let finalPrice = price.slice(1).trim();

            const item = {};
            item.img = `img/img-cart${partPath}`;
            item.name = name;
            item.price = finalPrice;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'my-3');

            cartItem.innerHTML = `
                <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="${item.name}">
                <div class="item-text">
                    <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                    <span>£</span>
                    <span id="cart-item-price" class="cart-item-price mb-0">${item.price}</span>
                </div>
                <a href="#" id="cart-item-remove" class="cart-item-remove align-self-center">
                    <i class="fas fa-trash"></i>
                </a>
            `;

            const cart = document.getElementById('cart');
            const total = document.querySelector('.cart-total-container');

            cart.insertBefore(cartItem, total);
            alert('Item added to the cart');

            showTotals();
        };
    });
}

addToBasket();


// add listeners in cart to delete items and clear cart, calculate sum
const cart = document.querySelector('.cart');

cart.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-trash')) {
        const cartItem = e.target.parentElement.parentElement;
        cart.removeChild(cartItem);

        showTotals();
    }

    if (e.target.classList.contains('clear-cart')) {
        let cartItemsArr = document.querySelectorAll('.cart-item');

        for (let index = 0; index < cartItemsArr.length; index++) {
            if (cartItemsArr[index].classList.contains('cart-item')) {
                cart.removeChild(cartItemsArr[index]);

                showTotals();
            }
        }
    }
});


// calculate total in shopping cart
function showTotals() {
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

    items.forEach(function (item) {
        total.push(parseFloat(item.textContent));
    });

    const totalMoney = total.reduce(function (total, item) {
        total += item;
        return total;
    }, 0);

    const finalMoney = totalMoney.toFixed(2);

    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;
}


// click event on special offer shirts 
const offers = document.getElementById('offers');

offers.addEventListener('click', function (e) {
    if (e.target.classList.contains('shirt-img')) {
        e.target.nextElementSibling.style.zIndex = '10';
    }
});

offers.addEventListener('click', function (e) {
    if (e.target.classList.contains('shirt-img-behind')) {
        e.target.style.zIndex = '-10';
    }
});


// search bar listener
const searchBar = document.forms['search-shirts'].querySelector('input');

searchBar.addEventListener('keyup', function (e) {

    const term = e.target.value.toLowerCase();
    const shirtCards = document.querySelectorAll('.single-item');

    shirtCards.forEach(function (shirtCard) {
        const title = shirtCard.children[0].nextElementSibling.children[0].children[0].textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            shirtCard.parentNode.style.display = 'block';
        } else {
            shirtCard.parentNode.style.display = 'none';
        }
    });
});