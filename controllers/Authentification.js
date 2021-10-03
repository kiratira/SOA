const m_user = require('../models/User')

module.exports = {
    index: function (req, res){
        res.send('Auth:index controller');
    },
    newUser: function (req,res,next){
        const user = new m_user({...req.body});

        user.save()
            .then(() => res.status(201).json({message: 'user enregistré !'}))
            .catch(onerror => res.status(400).json({ onerror}));
    }
};