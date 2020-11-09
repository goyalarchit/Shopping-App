const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//SECTION  collection and schema for Products
let ProductSchema = new Schema({
    product_name: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"],
        unique: true
    },
    price: {
        type: Number,
        required: [true, "can't be blank"]
    },
    stocked: {
        type: Number,
        required: [true, "can't be blank"],
    },
    placed: {
        type: Number,
        required: true,
    },
    orders:[{
        cust_user_name:{ type : String,  },
        cust_first_name:{ type : String,  },
        cust_last_name: { type : String, },
        cust_qty:{ type : Number, },
        cust_paid:{ type : Number, }
    }],
    status: {
        type: String,
        required: [true,"can't be blank"]
    },
    reviews: [{
        Author:{ type : String, },
        comment:{ type : String, },
        rating: { type : Number}
    }]
}, {
    collection: 'Product'
});

module.exports = mongoose.model('Product', ProductSchema);