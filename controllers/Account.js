const m_user = require('../models/User');

module.exports = {
    index: function (req , res ) {
        res.send (' Account: index controller ') ;
    },

    getAll: function (req,res,next){
        m_user.find()
            .then(users => res.status(200).json(users))
            .catch(error => res.status(400).json({ error }));
    },

    getOneByEmail: function(req, res, next){
        m_user.findOne({email: req.params.email}, '-_id -__v')
            .then(user => res.status(200).json(user))
            .catch(error => res.status(400).json({error}))
    },

    getOne: function(req, res, next){
        m_user.findById({_id: req.params.id}, '-_id -__v')
            .then(user => res.status(200).json(user))
            .catch(error => res.status(400).json({error}))
    },

    

    delete: async function(req, res, next) {
        await m_user.deleteOne({email: req.params.id})
            .then(() => res.status(200).json({message: 'Utilisateur supprime !'}))
            .catch(error => res.status(400).json({ error }))
    },

    update: function(req, res, next) {
        m_user.findOneAndUpdate({_id:req.params.id}, req.body)
        .then(() => m_user.findById({_id: req.params.id}))
            .then(user => res.status(200).json(user))
            .catch(error => res.status(400).json({error}))
    }
};