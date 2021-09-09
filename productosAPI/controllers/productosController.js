var ProductosModel = require('../models/productosModel.js');

/**
 * productosController.js
 *
 * @description :: Server-side logic for managing productoss.
 */
module.exports = {

    /**
     * productosController.list()
     */
    list: function (req, res) {
        ProductosModel.find(function (err, productoss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting productos.',
                    error: err
                });
            }

            return res.json(productoss);
        });
    },

    /**
     * productosController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ProductosModel.find({user_id: id}, function (err, productos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting productos.',
                    error: err
                });
            }

            if (!productos) {
                return res.status(404).json({
                    message: 'No such productos'
                });
            }

            return res.json(productos);
        });
    },

    /**
     * productosController.create()
     */
    create: function (req, res) {
        var productos = new ProductosModel({
			user_id : req.params.id,
			nombre : req.body.nombre,
			precio : req.body.precio,
			cantidad : req.body.cantidad,
			direccion : req.body.direccion,
			categoria : req.body.categoria,
			imagen : req.body.imagen
        });

        productos.save(function (err, productos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating productos',
                    error: err
                });
            }

            return res.status(201).json(productos);
        });
    },

    /**
     * productosController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ProductosModel.findOne({_id: id}, function (err, productos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting productos',
                    error: err
                });
            }

            if (!productos) {
                return res.status(404).json({
                    message: 'No such productos'
                });
            }

            productos.user_id = req.body.user_id ? req.body.user_id : productos.user_id;
			productos.name = req.body.name ? req.body.name : productos.name;
			productos.precio = req.body.precio ? req.body.precio : productos.precio;
			productos.cant = req.body.cant ? req.body.cant : productos.cant;
			productos.direccion = req.body.direccion ? req.body.direccion : productos.direccion;
			productos.prov = req.body.prov ? req.body.prov : productos.prov;
			productos.img = req.body.img ? req.body.img : productos.img;
			
            productos.save(function (err, productos) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating productos.',
                        error: err
                    });
                }

                return res.json(productos);
            });
        });
    },

    /**
     * productosController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ProductosModel.findByIdAndDelete({_id:id}, function (err, productos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the productos.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
