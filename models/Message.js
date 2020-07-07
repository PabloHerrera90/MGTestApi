const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/testMG", {useUnifiedTopology: true,useNewUrlParser: true});

let messageSchema = new mongoose.Schema({
 message: String,
 tags: String
})

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
