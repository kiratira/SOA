const product = require('../models/product');
const m_product = require('../models/product')

module.exports = {
    index: function (req, res){
        res.send('Store:index controller');
    },

    getAll: function (req,res,next){
        m_product.find()
            .then(product => res.status(200).json(product))
            .catch(error => res.status(400).json({ error }));
    },

    getOne: function(req, res, next){
        m_product.findById({_id: req.params.id})
            .then(product => res.status(200).json(product))
            .catch(error => res.status(400).json({error}))
    },

    delete: function(req, res, next) {
        m_product.deleteOne({_id: req.params.id})
            .then(() => res.status(200).json({message: 'Produit supprime !'}))
            .catch(error => res.status(400).json({ error }))
    },

    update: function(req, res, next) {
        m_product.findOneAndUpdate({_id:req.params.id}, req.body)
        .then(() => m_product.findById({_id: req.params.id}))
            .then(product => res.status(200).json(product))
            .catch(error => res.status(400).json({error}))
    },

    newProduct: function (req,res,next){
        const product = new m_product({...req.body});

        product.save()
            .then(() => res.status(201).json({message: 'Produit enregistré !'}))
            .catch(onerror => res.status(400).json({onerror}));
    }
};