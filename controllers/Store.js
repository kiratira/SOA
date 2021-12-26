const m_product = require('../models/product')
const m_user = require('../models/User')

module.exports = {
    index: function (req, res){
        return res.send('Store:index controller');
    },

    getAll: async function (req,res,next){
        return await m_product.find()
            .then(product => res.status(200).json(product))
            .catch(error => res.status(400).json({ error }));
    },

    getOne: function(req, res, next){
        m_product.findById({_id: req.params.id})
            .then(product => res.status(200).json(product))
            .catch(error => res.status(400).json({error}))
    },

    getOneByName: function(req, res, next){
        m_product.findOne({name: req.params.name})
            .then(product => res.status(200).json(product))
            .catch(error => res.status(400).json({error}))
    },

    delete: function(req, res, next) {
        m_product.deleteOne({name: req.params.name})
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
    },
    getTicket: function (req,res, next){
        const validDate = new Date(req.body.ValideDate);
        const ticket = {Expire:validDate};
        m_user.updateOne( {_id: req.user.user_id},{$push: {tickets: ticket}})
            .then(() => res.status(201).json({message: 'Ticket enregistré !'}))
            .catch(error => res.status(400).json({error}))
    }
};