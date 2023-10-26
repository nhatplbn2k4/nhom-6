document.addEventListener('DOMContentLoaded', function() {
    hideAllProducts();
});

function hideAllProducts() {
    const products = document.getElementsByClassName('product');
    for (let i = 0; i < products.length; i++) {
        products[i].style.display = 'none';
    }
}

function searchProduct() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();

    const productSection = document.getElementById('productSection');
    const products = productSection.getElementsByClassName('product');

    const message = document.getElementById('message');

    if (searchTerm === '') {
        hideAllProducts(); // Ẩn tất cả sản phẩm nếu ô tìm kiếm trống
        message.style.display = 'none';
    } else {
        let hasResults = false;
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const productName = product.querySelector('h2').textContent.toLowerCase();

            if (productName.includes(searchTerm)) {
                product.style.display = 'block';
                hasResults = true;
            } else {
                product.style.display = 'none';
            }
        }

        if (!hasResults) {
            message.style.display = 'block';
        } else {
            message.style.display = 'none';
        }
    }
}