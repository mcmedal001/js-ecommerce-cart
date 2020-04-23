let addToCart = document.querySelectorAll(".add-to-cart");

let products = [
    {
        name: "Beats Studio3 Wireless Over-Ear Headphones",
        tag: "BeatsStudio3",
        price: 349.95,
        inCart: 0
    },

    {
        name: "High - Performance Wireless Earphones - Red",
        tag: "WirelessRed",
        price: 149.95,
        inCart: 0
    },

    {
        name: "Powerbeats Pro - Totally Wireless Earphones - Navy",
        tag: "PowerbeatsPro",
        price: 249.95,
        inCart: 0
    }
]

for(let i=0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart-count').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-count').textContent = 1;
    }
}