const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema(
    {
        username: String,
        itemid: Number,
        itemname: String,
        itemdetail: String,
        itemstatus: Number,
        itemcounts: {
            type: Number,
            default: 1
        },
        itemprice: 
        {
            type: Number,
            default: 69
        },
        city: {
            type: String,
            default: "Bangkok"
        },
        location: {
            type: String,
            default: "Bangkok"
        },
        image: {
            type: String,
            default: "noimage.jpg"
        }

    },
    {versionKey: false,timestamps:true}
);
const Inventory = mongoose.model('Inventories', InventorySchema);
module.exports = Inventory;