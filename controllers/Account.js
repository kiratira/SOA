const m_user = require('../models/User');

module.exports = {
    index: function (req , res ) {
        res.send (' Account: index controller ') ;
    },

    getAll: function (req,res,next){
        m_user.find()
            .then(projects => res.status(200).json(projects))
            .catch(error => res.status(400).json({ error }));
    }
};
