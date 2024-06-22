
const getAll = async () =>{
    const response = await fetch('http://localhost:3000');
    const data = await response.json();
    console.log(data);
    let show = '';
    let stt = 1;
    data.loadPro.map(product =>{
        show += `
        <tr>
                <td width="10"><input type="checkbox" name="check1" value="1"></td>
                <td>${stt}</td>
                <td><a href="./detail.html" onclick="getId('${product._id}')">${product.name}</a> </td>
                <td><img src="http://localhost:3000/images/${product.img}" alt="" width="100px;"></td>
                <td>${product.quantity}</td>
                <td>${product.price}</td>
                <td>${product.category.categoryName}</td>
                <td>
                <a href = "" onclick="deleteProduct('${product._id}')"> 
                <button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                 data-id="${product._id}"><i class="fas fa-trash-alt"></i> 
                </button>
                </a>
                <a href="./editpro.html" onclick="getId('${product._id}')">
                    <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp" data-toggle="modal" data-target="#ModalUP">
                        <i class="fas fa-edit"></i>
                    </button>
                </a>
                </td>
        </tr>
        `;
        stt++;
    })
    document.getElementById('showSanpham').innerHTML= show
          // Thêm sự kiện xóa sản phẩm
          const trashButtons = document.querySelectorAll('.trash');
          trashButtons.forEach(button => {
              button.addEventListener('click', async function(e) {
                  e.preventDefault();
                  const id = e.target.getAttribute('data-id');
                  console.log(id);
                  try {
                      await deleteProduct(id);
                      const productRow = e.target.closest('tr');
                      productRow.remove();
                  } catch (error) {
                      console.log(error);
                  }
                });
        });


}

async function deleteProduct(id)  {
    try {
        const mess = confirm('Bạn có chắc muốn xóa không?');
        if (mess) {
            // const id = localStorage.getItem('idpro')
            const response = await fetch(`http://localhost:3000/products/${id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            
            console.log(result);
            window.location.reload(); // Reload trang sau khi xóa thành công
        }
    } catch (error) {
        console.log(error);
    }
        
    }


const getNewPro = async () =>{
    const response = await fetch('http://localhost:3000/products/new');
    const data = await response.json();
    console.log(data);
    let show = '';
    let stt = 1;
    data.ProductNew.map(product =>{
        show += `
        <tr>
                <td width="10"><input type="checkbox" name="check1" value="1"></td>
                <td>${stt}</td>
                <td>${product.name}</td>
                <td><img src="http://localhost:3000/images/${product.img}" alt="" width="100px;"></td>
                <td>${product.quantity}</td>
                <td>${product.price}</td>
                <td>${product.category.categoryName}</td>
                <td><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                        onclick="myFunction(this)"><i class="fas fa-trash-alt"></i> 
                        </button>
                        <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp" data-toggle="modal"
                        data-target="#ModalUP"><i class="fas fa-edit"></i></button>
                </td>
        </tr>
        `;
        stt++;
    })
    document.getElementById('showSpNew').innerHTML= show

}

const getCategory = async () =>{
    const response = await fetch (`http://localhost:3000/category`)
    const data = await response.json()
    console.log(data);
    let show = '';
    data.map(cate =>{
        show += `
        <option value = "${cate._id}">${cate.name}</option>
        `;
    })
    document.getElementById('category').innerHTML= show


}

const getId = id =>{
    localStorage.setItem('idpro',id)
}

const getProDetail = async ()=>{
    const id = localStorage.getItem('idpro')
    const response = await fetch(`http://localhost:3000/products/${id}`)
    const data = await response.json()
    console.log(data);
    document.getElementById('name').innerText = data.name
    document.getElementById('price').innerText = data.price
    document.getElementById('quantity').innerText = data.quantity
    document.getElementById('img').src = `http://localhost:3000/images/${data.img}`
}

const insertProduct = async() => {
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const img = document.getElementById('img').files[0]
    const quantity = document.getElementById('quantity').value
    const description = document.getElementById('description').value
    const category = document.getElementById('category').value
    let data = new FormData() // xử lý tất cả về form dữ liệu
    data.append('name', name)
    data.append('price', price)
    data.append('img', img)
    data.append('quantity', quantity)
    data.append('description', description)
    data.append('category', category)
    const response = await fetch(`http://localhost:3000/products`,{
        method : 'POST',
        body : data
    })
    console.log(data);
    const result = await response.json()

    console.log(result);
    window.location.href = './product.html'
    
    }


const showEditPro = async()=>{
    const getPro = async()=> {
        const id = localStorage.getItem('idpro')
        response = await fetch(`http://localhost:3000/products/${id}`);
        const data = await response.json()
        return data
    } 

    const getCate = async()=>{
        response = await fetch(`http://localhost:3000/category`);
        const data = await response.json()
        return data
    }

    const product = await getPro();
    const category = await getCate();
    console.log(product, category);
    let proupdate = ''
    proupdate += `
                <div class="form-group col-md-3">
                <label for="exampleSelect1" class="control-label">Danh mục</label>
                <select class="form-control" id="category">
                    `;
    category.map(i => {
        if (i._id == product.category.categoryId) {
            proupdate +=`<option value ="${i._id}" selected>${i.name}</option>`
        }else{
            proupdate +=`<option value="${i._id}">${i.name}</option>`
        }
    })
    proupdate += `
                </select>
                </div>
                <div class="form-group col-md-3">
                <label class="control-label">Tên sản phẩm</label>
                <input class="form-control" type="text" id="name" name= "name" value="${product.name}">
                </div>
                <img src="http://localhost:3000/images/${product.img}" alt="" width="100px;">
                <input type="file" name= "img" id="img"> 
                <div class="form-group col-md-3">
                <label class="control-label">Giá bán</label>
                <input class="form-control" type="text" id="price" name="price" value="${product.price}">
                </div>
                <div class="form-group col-md-3">
                <label class="control-label">Số lượng</label>
                <input class="form-control" type="text" name="quantity" id="quantity"  value="${product.quantity}">
                </div>
                <div class="form-group col-md-3">
                <label class="control-label">Mô tả</label>
                <input class="form-control" type="text" name="description" id="description"  value="${product.description}">
                </div>
                <input class="btn btn-cancel" type="submit" value="Cập nhật sản phẩm" onclick="updateProduct()">
    `
    document.getElementById('show').innerHTML = proupdate
}




const updateProduct = async() => {
    const mess = confirm('Ban co chac muon cap nhat khong')
    if(mess){
        window.location.reload()
    }
    const id = localStorage.getItem('idpro')
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const img = document.getElementById('img').files[0]
    const quantity = document.getElementById('quantity').value
    const description = document.getElementById('description').value
    const category = document.getElementById('category').value
    let data = new FormData() // xử lý tất cả về form dữ liệu
    data.append('name', name)
    data.append('price', price)
    data.append('img', img)
    data.append('quantity', quantity)
    data.append('description', description)
    data.append('category', category)
    const response = await fetch(`http://localhost:3000/products/${id}`,{
        method : 'PUT',
        headers : {
            "Accept" : "multipart/form-data"
        },
        body : data
    })
    console.log(data);
    const result = await response.json()

    console.log(result);
    // window.location.href = './product.html'
    
    }


 