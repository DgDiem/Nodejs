var products = [
    { id: 1,  img: 'img/hinh1.webp', name: 'Áo thun', price: 200000 },
    { id: 2,  img: 'img/hinh4.webp', name: 'Áo Polo', price: 350000 },
    { id: 3,  img: 'img/hinh3.webp', name: 'T-Shirt', price: 500000 },
  ];

  var productListDiv = document.getElementById('product-list');
  var productDetailsDiv = document.getElementById('product-details');

  // products.forEach(function(product) {
  //   var productDiv = document.createElement('div');
  //   productDiv.innerHTML = '<img src="' + product.img + '" alt="' + product.name + '" onclick="showDetails(' + product.id + ')">' +
  //                         '<p><strong>' + product.name + '</strong></p>' +
  //                         '<p>Giá: ' + product.price + 'VNĐ</p>';
  //   productListDiv.appendChild(productDiv);
  // });
  products.forEach(function(product) {
    var productDiv = document.createElement('div');
    productDiv.innerHTML = `<div class="col-4">
                              <div class="img-product" onclick="showDetails(${product.id} )" >
                                  <img src="${product.img}" alt="">
                              </div>
                              <div class="name-product">
                                  ${product.name}
                              </div>
                              <div class="price-product">
                                  ${product.price}
                              </div>
                              <div class="btn-product">
                                  <a href="#" class="view"><i class="fa-solid fa-heart"></i></a>
                                  <a href="#" class="add"><i class="fa-solid fa-bag-shopping"></i></a>
                              </div>
                          </div>`;
    productListDiv.appendChild(productDiv);
  });

  function showDetails(productId) {
    var selectedProduct = products.find(function(product) {
      return product.id === productId;
    });
    productDetailsDiv.innerHTML ='<img src="' + selectedProduct.img + '" alt="' + selectedProduct.name + '">' +
                                '<p><strong>' + selectedProduct.name + '</strong></p>' +
                                '<p>Giá: ' + selectedProduct.price + 'VNĐ</p>';
    // Ẩn danh sách sản phẩm và hiển thị chi tiết sản phẩm
    productDetailsDiv.style.display = 'block';
  }