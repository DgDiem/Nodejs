
var danhmuc = [
  { id: 1, name: 'Áo thun' },
  { id: 2, name: 'Áo khoác' },
  { id: 3, name: 'Áo sơ mi' },
  { id: 4, name: 'Quần' },
];

var showDm = document.getElementById('showdm');

danhmuc.forEach(function (sanpham) {
  var dmRow = document.createElement('tr');
  dmRow.innerHTML = `
    <td width="10"><input type="checkbox" name="check1" value="1"></td>
    <td>${sanpham.id}</td>
    <td>${sanpham.name}</td>
    <td><img src="${sanpham.img}" alt="" width="100px;"></td>
    <td>
      <button class="btn btn-primary btn-sm trash" type="button" title="Xóa" onclick="xoaSanPham(${sanpham.id})">
        <i class="fas fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" onclick="suaSanPham(${sanpham.id})">
        <i class="fas fa-edit"></i>
      </button>
    </td>
  `;
  showDm.appendChild(dmRow);
});

function xoaSanPham(idSanPham) {
  var xacNhan = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
  if (xacNhan) {
    danhmuc = danhmuc.filter(function (sanpham) {
      return sanpham.id !== idSanPham;
    });
    capNhatDanhSach();
  }
}

function suaSanPham(idSanPham) {
  var newName = prompt("Nhập tên mới cho sản phẩm:");
  if (newName !== null) {
    danhmuc.forEach(function (sanpham) {
      if (sanpham.id === idSanPham) {
        sanpham.name = newName;
      }
    });
    capNhatDanhSach();
  }
}

function capNhatDanhSach() {
  // Xóa tất cả các hàng cũ
  while (showDm.firstChild) {
    showDm.removeChild(showDm.firstChild);
  }

  // Thêm lại các hàng mới
  danhmuc.forEach(function (sanpham) {
    var dmRow = document.createElement('tr');
    dmRow.innerHTML = `
      <td width="10"><input type="checkbox" name="check1" value="1"></td>
      <td>${sanpham.id}</td>
      <td>${sanpham.name}</td>
      <td><img src="${sanpham.img}" alt="" width="100px;"></td>
      <td>
        <button class="btn btn-primary btn-sm trash" type="button" title="Xóa" onclick="xoaSanPham(${sanpham.id})">
          <i class="fas fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" onclick="suaSanPham(${sanpham.id})">
          <i class="fas fa-edit"></i>
        </button>
      </td>
    `;
    showDm.appendChild(dmRow);
  });
}

