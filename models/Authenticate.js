const mongoose = require('mongoose');

//mongoose.connect("mongodb://127.0.0.1/testMG", {useUnifiedTopology: true,useNewUrlParser: true});

let authenticateSchema = new mongoose.Schema({
 clave: String,
 shared_secret: String
})

const Authenticate = mongoose.model('Authenticate', authenticateSchema);

module.exports = Authenticate;
