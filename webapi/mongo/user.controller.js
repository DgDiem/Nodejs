// thực hiện thao tác CRUD với monggo

const userModel = require('./user.model');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
module.exports = { gettAll , insert , updateById, remove, register, login} // ,, getByKey, updateById, remove

// xử lí dữ liệu ở contronller
async function register(body) {
    try {
        //lay du lieu
        const {name, email, pass, phone, role} = body
        //kiem tra email da dc dang ky chua
        let user = await userModel.findOne({email: email}) // kiem tra co trung khong
        if (user) {
            throw new Error ('Email da ton tai')
        }
        // tao ma hoa pass
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(pass, salt);
        // tao user moi
        user = new userModel({name, email, pass:hash, phone, role : role || 0})
        // luu db 
        const result = await user.save()
        return result;
    } catch (error) {
        console.log('loi dang ky', error);
        throw error;
    }
}

async function gettAll (){
    try {
        const result = await userModel.find();
        return result;
    } catch (error) {
        console.log('Lỗi lấy danh sách user', error);
        throw error;
    }
    
}

// thêm danh mục

async function insert (body){
    try {
        const {name, email, pass, phone, role} = body
        // console.log("usergory Name:", name); 
        // console.log("usergory mota:", description); 
        const userNew = new userModel({
            name, email, pass, phone, role
      
        })
        // lưu database
        const result = await userNew.save();
        return result;
    } catch (error) {
        console.log('Lỗi', error);
        throw error
    }
}



// cập nhật danh mục theo id

async function updateById(id, body) {
    try {
        const user = await userModel.findById(id);
        if (!user) {
            throw new Error ('Không tìm thấy danh mục');
        }
        const {name, email, pass, phone, role} = body;
        const result = await userModel.findByIdAndUpdate(
            id,
            {name, email, pass, phone, role},
        )
        return result;
    } catch (error) {
        console.log("lỗi update", error);
        throw error;
    }
    
}







// xóa danh mục theo id
async function remove(id) {
    try {
        const result = await userModel.findByIdAndDelete(id);
        return result;
    } catch (error) {
        console.log('LỖI XÓA USER THEO ID', error);
        throw error;
    }
    
}

async function login(body) {
    try {
        // lấy dữ liệu
        const {email , pass} = body;
        // kiem tra email
        let user = await userModel.findOne({email : email})
        if (!user) {
            throw new Error('Email khong ton tai')
        }
        // kiểm tra pass
        const checkpass = bcrypt.compareSync(pass, user.pass)
        if (!checkpass) {
            throw new Error('Mật khẩu không chính xác')
        }
        //xóa field pass
        delete user._doc.pass
        // tạo token
        const token = jwt.sign(
            {_id : user._id, email : user.email, role : user.role},
            'duongdiem', // key secret
            {expiresIn: 1 * 1 *60 *60 } // thời gian hết hạn của token
        )
        user = {...user._doc, token}
        return user
    } catch (error) {
        console.log('LỖI', error);
        throw error;
    }
}
//muốn xem sản phẩm mới thì người dùng cần đăng nhập để xem sp mới thì mình làm cái kiểm tra bằng token 