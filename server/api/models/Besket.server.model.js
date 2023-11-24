const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BasketsSchema = new Schema(
    {
        username: String,
        targetname: String,
        targetid: Number,
        targetcounts: {
            type: Number,
            default: 1
        },
        targetprice: 
        {
            type: Number,
            default: 69
        },

    },
    {versionKey: false,timestamps:true}
);
const Baskets = mongoose.model('Baskets', BasketsSchema);
module.exports = Baskets;