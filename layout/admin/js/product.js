var sanpham = [
    { id: 1,  img: '/assets/img/ao1.webp', name: 'Áo thun', price: 200000 },
    { id: 2,  img: '/assets/img/ao2.webp', name: 'Áo Polo', price: 350000 },
    { id: 3,  img: '/assets/img/ao3.webp', name: 'T-Shirt', price: 500000 },
  ];
var showSp = document.getElementById('showSanpham');
sanpham.forEach(function(sanpham) {
    var spDiv = document.createElement('tr');
    spDiv.innerHTML = `<tr>
                        <td width="10"><input type="checkbox" name="check1" value="1"></td>
                        <td>${sanpham.id}</td>
                        <td>${sanpham.name}</td>
                        <td><img src="${sanpham.img}" alt="" width="100px;"></td>
                        <td><span class="badge bg-success">Còn hàng</span></td>
                        <td>${sanpham.price} đ</td>                   
                        <td><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                                onclick="myFunction(this)"><i class="fas fa-trash-alt"></i> 
                                </button>
                                <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp" data-toggle="modal"
                                data-target="#ModalUP"><i class="fas fa-edit"></i></button>
                        </td>`;
    showSp.appendChild(spDiv);
  });