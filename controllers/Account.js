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

    getOne: function(req, res, next){
        m_user.findById({_id: req.params.id})
            .then(user => res.status(200).json(user))
            .catch(error => res.status(400).json({error}))
    },

    delete: function(req, res, next) {
        m_user.deleteOne({_id: req.params.id})
            .then(() => res.status(200).json({message: 'Utilisateur supprime !'}))
            .catch(error => res.status(400).json({ error }))
    },

    modify: function(req, res, next) {
        m_user.updateOne(
            {_id: req.params.id},
            { $set: { name : req.body.name } }
        ).then(() => res.status(200).json({message: 'Utilisateur modifie !'}))
        .catch(error => res.status(400).json({ error }))
    }
};
