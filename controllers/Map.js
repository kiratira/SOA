const m_InterestPoints = require('../models/InterestPoints');

module.exports = {
    index: function (req, res){
        res.send('Map:index controller');
    },

    getAll: function (req,res,next){
        m_InterestPoints.find()
            .then(interestPoints => res.status(200).json(interestPoints))
            .catch(error => res.status(400).json({ error }));
    },

    getOne: function(req, res, next){
        m_InterestPoints.findById({_id: req.params.id})
            .then(interestPoints => res.status(200).json(interestPoints))
            .catch(error => res.status(400).json({error}))
    },

    getOneByName: function(req, res, next){
        m_InterestPoints.findOne({name: req.params.name})
            .then(interestPoints => res.status(200).json(interestPoints))
            .catch(error => res.status(400).json({error}))
    },

    delete: function(req, res, next) {
        m_InterestPoints.deleteOne({name: req.params.name})
            .then(() => res.status(200).json({message: 'Point d interet supprime !'}))
            .catch(error => res.status(400).json({ error }))
    },

    update: function(req, res, next) {
        m_InterestPoints.findOneAndUpdate({_id:req.params.id}, req.body)
        .then(() => m_InterestPoints.findById({_id: req.params.id}))
            .then(interestPoints => res.status(200).json(interestPoints))
            .catch(error => res.status(400).json({error}))
    },

    newInterestPoint: function (req,res,next){
        const interestPoint = new m_InterestPoints({...req.body});

        interestPoint.save()
            .then(() => res.status(201).json({message: 'Point d interet enregistré !'}))
            .catch(onerror => res.status(400).json({onerror}));
    }
};