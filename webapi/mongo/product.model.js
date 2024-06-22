// kết nối collection categories

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId // khóa chính id

const productSchema = new Schema({
    name : {type : String, require : true}, // require true là bắt buộc / fasle là ko bắt buộc
    img : {type : String , require : true}, 
    price : {type : Number , require : true}, 
    quantity : {type : Number , require : true},

    category : {
        type : {
            categoryId : {type : ObjectId , require : true},
            categoryName : {type : String , require : true},
        },
        require : true
    }, 
    hot : {type : Number, require : false},
    view : {type : Number, require : false},
    description : {type : String , require : true}, 

})

module.exports = mongoose.models.pros || mongoose.model('pros', productSchema) // kiển tra xem nó tồn tại cái model chưa, nếu chưa thì thêm vàos