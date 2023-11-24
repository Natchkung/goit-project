const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotifySchema = new Schema({
    username: String,
    itemid: Number,
    alert: String,
    targetname: String
    },
    {versionKey: false,timestamps:true}
);
const Notify = mongoose.model('Notifies', NotifySchema);
module.exports = Notify;