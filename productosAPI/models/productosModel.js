var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productosSchema = new Schema({
	'user_id' : String,
	'name' : String,
	'precio' : String,
	'cant' : String,
	'direccion' : String,
	'prov' : String,
	'img' : String
});

module.exports = mongoose.model('productos', productosSchema);
