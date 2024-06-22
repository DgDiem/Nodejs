

const getAll = async () =>{
    const response = await fetch('http://localhost:3000/category');
    const data = await response.json();
    console.log(data);
    let show = '';
    let stt = 1;
    data.map(product =>{
        show += `
        <tr>
                <td width="10"><input type="checkbox" name="check1" value="1"></td>
                <td>${stt}</td>
                <td><a href="./detail.html" onclick="getId('${product._id}')">${product.name}</a> </td>
                <td>${product.description}</td>
                <td>
                <a href = "" onclick="deleteCategory('${product._id}')"> 
                <button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                 data-id="${product._id}"><i class="fas fa-trash-alt"></i> 
                </button>
                </a>
                <a href="./editcata.html" onclick="getId('${product._id}')">
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
                      await deleteCategory(id);
                      const productRow = e.target.closest('tr');
                      productRow.remove();
                  } catch (error) {
                      console.log(error);
                  }
                });
        });


}

// Hàm xóa danh mục theo id
async function deleteCategory(id)  {
    try {
        const mess = confirm('Bạn có chắc muốn xóa không?');
        if (mess) {
            const response = await fetch(`http://localhost:3000/category/delete/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                const errorData = await response.json();
                if (errorData.mess === 'Danh mục có sản phẩm không thể xóa') {
                    alert('Danh mục có sản phẩm không thể xóa');
                    throw new Error('Danh mục có sản phẩm không thể xóa');
                } else {
                    throw new Error('Lỗi xóa danh mục theo ID');
                }
            }
    
            const result = await response.json();
            console.log('Deleted Category:', result);

            window.location.reload(); // Reload trang sau khi xóa thành công
        }
    } catch (error) {
        console.log(error);
    }
}



const getId = id =>{
    localStorage.setItem('idpro',id)
}

const insertCatagory = async() => {
    const name = document.getElementById('name').value
    const description = document.getElementById('description').value
    let data = JSON.stringify({
        "name": name,
        "description": description
    })
    const response = await fetch(`http://localhost:3000/category`,{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : data
    })
    console.log(data);
    const result = await response.json()

    console.log(result);
    window.location.href = './catalog.html'
    }



    const showEditPro = async()=>{
        const getPro = async()=> {
            const id = localStorage.getItem('idpro')
            response = await fetch(`http://localhost:3000/category/${id}`);
            const data = await response.json()
            return data
        } 
        const product = await getPro();
        console.log(product);
        let proupdate = ''
        proupdate += `
                    <div class="form-group col-md-3">
                    <label class="control-label">Tên sản phẩm</label>
                    <input class="form-control" type="text" id="name" name= "name" value="${product.name}">
                    </div>
                    <div class="form-group col-md-3">
                    <label class="control-label">Mô tả</label>
                    <input class="form-control" type="text" name="description" id="description"  value="${product.description}">
                    </div>
                    <input class="btn btn-cancel" type="submit" value="Cập nhật danh mục" onclick="updateProduct()">
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
        const description = document.getElementById('description').value
        // let data = new FormData() // xử lý tất cả về form dữ liệu
        // data.append('name', name)
        // data.append('description', description)
        const response = await fetch(`http://localhost:3000/category/${id}`,{
            method : 'PUT',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name,
                description
            })
        })
        console.log(data);
        const result = await response.json()
    
        console.log(result);
        window.location.href = './product.html'
        
        }
    
    