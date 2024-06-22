let originalList = '';

const getAll = async () => {
    const response = await fetch('http://localhost:3000');
    const data = await response.json();
    console.log(data);
    let show = '';
    data.loadPro.map(product => {
        show += `
        <div class="col-4">
            <div class="img-product">
                <a href="./product-detail.html" onclick="getId('${product._id}')"><img src="http://localhost:3000/images/${product.img}" alt=""></a>
            </div>
            <div class="name-product">
                ${product.name}
            </div>
            <div class="price-product">
                ${product.price}
            </div>
            <div class="btn-product">
                <a href="#" class="view">Mua ngay</a>
                <a href="#" class="add">Thêm vào giỏ</a>
            </div>
        </div>
        `;
    })
    originalList = show; // Lưu danh sách sản phẩm ban đầu
    document.getElementById('showAll').innerHTML = show;
}

const getNew = async () =>{
    const response = await fetch('http://localhost:3000/products/new');
    const data = await response.json();
    console.log(data);
    let show = '';
    let stt = 1;
    data.ProductNew.map(product =>{
        show += `
        <div class="col-4">
                    <div class="img-product">
                    <a href="./product-detail.html" onclick="getId('${product._id}')"><img src="http://localhost:3000/images/${product.img}" alt=""></a>
                    </div>
                    <div class="name-product">
                        ${product.name}
                    </div>
                    <div class="price-product">
                        ${product.price}
                    </div>
                    <div class="btn-product">
                        <a href="#" class="view">Mua ngay</i></a>
                        <a href="#" class="add">Thêm</i></a>
                    </div>
                </div>
        `;
        stt++;
    })
    document.getElementById('showSpNew').innerHTML= show



}

const getAokhoac = async () =>{
    const response = await fetch('http://localhost:3000/category/name/Aokhoac');
    const data = await response.json();
    console.log(data);
    let show = '';
    let stt = 1;
    data.Aokhoac.map(product =>{
        show += `
        <div class="col-4">
                    <div class="img-product">
                    <a href="./product-detail.html" onclick="getId('${product._id}')"><img src="http://localhost:3000/images/${product.img}" alt=""></a>
                    </div>
                    <div class="name-product">
                        ${product.name}
                    </div>
                    <div class="price-product">
                        ${product.price}
                    </div>
                    <div class="btn-product">
                        <a href="#" class="view">Mua ngay</i></a>
                        <a href="#" class="add">Thêm</i></a>
                    </div>
                </div>
        `;
        stt++;
    })
    document.getElementById('showAokhoac').innerHTML= show

}


const getQuan = async () =>{
    const response = await fetch('http://localhost:3000/category/name/Quần');
    const data = await response.json();
    console.log(data);
    let show = '';
    let stt = 1;
    data.Quần.map(product =>{
        show += `
        <div class="col-4">
                    <div class="img-product">
                    <a href="./product-detail.html" onclick="getId('${product._id}')"><img src="http://localhost:3000/images/${product.img}" alt=""></a>
                    </div>
                    <div class="name-product">
                        ${product.name}
                    </div>
                    <div class="price-product">
                        ${product.price}
                    </div>
                    <div class="btn-product">
                        <a href="#" class="view">Mua ngay</i></a>
                        <a href="#" class="add">Thêm</i></a>
                    </div>
                </div>
        `;
        stt++;
    })
    document.getElementById('showQuan').innerHTML= show

}

const getBalo = async () =>{
    const response = await fetch('http://localhost:3000/category/name/Balo');
    const data = await response.json();
    console.log(data);
    let show = '';
    let stt = 1;
    data.Balo.map(product =>{
        show += `
        <div class="col-4">
                    <div class="img-product">
                    <a href="./product-detail.html" onclick="getId('${product._id}')"><img src="http://localhost:3000/images/${product.img}" alt=""></a>
                    </div>
                    <div class="name-product">
                        ${product.name}
                    </div>
                    <div class="price-product">
                        ${product.price}
                    </div>
                    <div class="btn-product">
                        <a href="#" class="view">Mua ngay</i></a>
                        <a href="#" class="add">Thêm</i></a>
                    </div>
                </div>
        `;
        stt++;
    })
    document.getElementById('showBalo').innerHTML= show

}


const gethotPro = async () =>{
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:3000/products/hot`, {
        headers : {
            Authentication: `Bearer ${token}`
        },
        method: 'GET'
    }); 
    // const response = await fetch('http://localhost:3000/products/hot');
    const data = await response.json();
    console.log(data);
    let show = '';
    let stt = 1;
    data.ProductHot.map(product =>{
        show += `
        <div class="col-4">
                    <div class="img-product">
                    <a href="./product-detail.html" onclick="getId('${product._id}')"><img src="http://localhost:3000/images/${product.img}" alt=""></a>
                    </div>
                    <div class="name-product">
                        ${product.name}
                    </div>
                    <div class="price-product">
                        ${product.price}
                    </div>
                    <div class="btn-product">
                        <a href="#" class="view">Mua ngay</i></a>
                        <a href="#" class="add">Thêm</i></a>
                    </div>
                </div>
        `;
        stt++;
    })
    document.getElementById('showSpHot').innerHTML= show



}

const getProView = async () =>{
    const response = await fetch('http://localhost:3000/products/view');
    const data = await response.json();
    console.log(data);
    let show = '';
    let stt = 1;
    data.map(product =>{
        show += `
        <div class="col-4">
                    <div class="img-product">
                    <a href="./product-detail.html" onclick="getId('${product._id}')"><img src="http://localhost:3000/images/${product.img}" alt=""></a>
                    </div>
                    <div class="name-product">
                        ${product.name}
                    </div>
                    <div class="price-product">
                        ${product.price}
                    </div>
                    <div class="btn-product">
                        <a href="#" class="view">Mua ngay</i></a>
                        <a href="#" class="add">Thêm</i></a>
                    </div>
                </div>
        `;
        stt++;
    })
    document.getElementById('showSpView').innerHTML= show



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
    document.getElementById('description').innerText = data.description
    document.getElementById('category').innerText = data.category.categoryName
    // document.getElementById('quantity').innerText = data.ProducDetail.quantity
    document.getElementById('image').src = `http://localhost:3000/images/${data.img}`



}

const getRelated = async () =>{
    const id = localStorage.getItem('idpro')
    const response = await fetch(`http://localhost:3000/products/related/${id}/related`);
    const data = await response.json();
    console.log(data);
    let show = '';
    let stt = 1;
    data.RelatedProducts.map(product =>{
        show += `
        <div class="col-4">
                    <div class="img-product">
                    <a href="./product-detail.html" onclick="getId('${product._id}')"><img src="http://localhost:3000/images/${product.img}" alt=""></a>
                    </div>
                    <div class="name-product">
                        ${product.name}
                    </div>
                    <div class="price-product">
                        ${product.price}
                    </div>
                    <div class="btn-product">
                        <a href="#" class="view">Mua ngay</i></a>
                        <a href="#" class="add">Thêm</i></a>
                    </div>
                </div>
        `;
        stt++;
    })
    document.getElementById('showsplienquan').innerHTML= show



}
const getCategory = async () =>{
    const response = await fetch (`http://localhost:3000/category`)
    const data = await response.json()
    console.log(data);
    let show = '';
    let stt = 1;
    data.LoadCategory.map(cate =>{
        show += `
        <option value = "${cate.id}">${cate.name}</option>
        `;
        stt++;
    })
    document.getElementById('category').innerHTML= show


}


const login = async() =>{
    const email = document.getElementById('email').value
    const pass =  document.getElementById('pass').value
    const data = { email , pass  }
    const response = await fetch(`http://localhost:3000/users/login`,{
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    if (!response.ok) {
        const errorData = await response.json();
        if (errorData.mess === 'Email khong ton tai') {
            alert('Email không tồn tại')
        } else if (errorData.mess === 'Mật khẩu không chính xác') {
            alert('Mật khẩu không chính xác')
        } else {
            alert('Email hoặc mật khẩu không đúng')
        }
    }
    const result = await response.json()

    localStorage.setItem('token', result.token)
    alert('Đăng nhập thành công')
    window.location.href = './index.html'

 }

 const register = async() =>{
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const pass =  document.getElementById('pass').value
    const data = { name, email ,phone , pass  }
    const response = await fetch(`http://localhost:3000/users`,{
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    if (!response.ok) {
        const errorData = await response.json();
        alert('Email đã tồn tại')
        throw new Error(errorData.mess || 'Đăng ký không thành công');
    }

    const result = await response.json()
    console.log('NewUser:', data.NewUser);

    console.log(result);
    // localStorage.setItem('token', result.token)
    alert('Đăng ký thành công')
    window.location.href = './login.html'

 }

//  let currenpage = 1;
//  let totalpage = 0;
//  const next = () =>{
//     if (currenpage < totalpage) {
//         currenpage ++;
//         getAllPage(currenpage)
//     }
//  }
//  const prev = () =>{
//     if (currenpage > 1 ) {
//         currenpage --;
//         getAllPage(currenpage)
//     }
//  }
//  const goTo = (page) =>{
//         currenpage = page;
//         getAllPage(currenpage)
//  }

//  const getAllPage = async (page = currenpage, litmit = 10) =>{
//     const response = await fetch(``)

//  }
async function searchProduct() {
    const name = document.getElementById('searchInput').value;
    const response = await fetch(`http://localhost:3000/products/search/name/${name}`);
    const products = await response.json();
    let show = '';
    if (products.length === 0) {
        show += `
       <h2>Không tìm thấy sản phẩm :(</h2>
        `;
    } else {
        products.forEach(product => {
            show += `
            <div class="col-4">
                <div class="img-product">
                    <a href="./product-detail.html" onclick="getId('${product._id}')"><img src="http://localhost:3000/images/${product.img}" alt=""></a>
                </div>
                <div class="name-product">
                    ${product.name}
                </div>
                <div class="price-product">
                    ${product.price}
                </div>
                <div class="btn-product">
                    <a href="#" class="view">Mua ngay</a>
                    <a href="#" class="add">Thêm vào giỏ</a>
                </div>
            </div>
            `;
        });
    }
    document.getElementById('showAll').innerHTML = show;
}
// Hàm để khôi phục danh sách sản phẩm ban đầu
function restoreOriginalList() {
    document.getElementById('showAll').innerHTML = originalList;
}