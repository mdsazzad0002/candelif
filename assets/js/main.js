window.onscroll = function () {
    document.querySelector('#navbarSupportedContent').classList.remove('show');
}

function item_cart(val) {
    let cart_item_val = document.querySelector('#item_cart').value;
    cart_item_val = parseInt(cart_item_val) + val;
    document.querySelector('#item_cart').value = Math.abs(cart_item_val);
}