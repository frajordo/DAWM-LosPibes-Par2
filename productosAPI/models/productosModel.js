var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productosSchema = new Schema({
	'user_id' : String,
	'nombre' : String,
	'precio' : String,
	'cantidad' : String,
	'direccion' : String,
	'categoria' : String,
	'imagen' : String
});

module.exports = mongoose.model('productos', productosSchema);
