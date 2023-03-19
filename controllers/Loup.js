const { collection } = require('../models/Loup');
const m_loup = require('../models/Loup');


module.exports = {
    index: function (req , res ) {
        m_loup.find({zombie: false}, function(err, data){
            res.render('../views/page/loup.ejs',{PlayerData:data})
        })
    },

    vote: function (req,res,next){
        m_loup.updateOne({nom: req.body.nom},{$inc: {compteur:1}})
            .then(() => res.status(201).redirect(307, '/'))
    },

    admin: function (req,res,next){
        m_loup.find({zombie:false}, function(err, data){
            res.render('../views/page/loupAdmin.ejs',{PlayerData:data})
        })
    },
    zombie: function (req,res,next){
        m_loup.find({zombie:true}, function(err, data){
            res.render('../views/page/zombie.ejs',{PlayerData:data})
        })
    },
    revive: function (req,res,next){
        m_loup.updateOne({nom: req.body.nom},{zombie: false})
            .then(() => res.status(201).redirect(307, '/Loup/admin'))
    },
    resetVote: function(req,res,next){
        m_loup.updateMany({zombie:false},{compteur:0})
            .then(() => res.status(201).redirect(307, '/Loup/admin'))
    },
    resetZombie: function(req,res,next){
        m_loup.updateMany({zombie:true},{zombie:false})
            .then(() => res.status(201).redirect(307, '/Loup/admin'))
    },
    erase: function(req,res,next){
        m_loup.deleteMany()
            .then(() => res.status(201).redirect(307, '/Loup/admin'))
    },
    resultat: function(req,res,next){
        m_loup.find({zombie:false},{_id:0,nom:1,compteur:1}).sort({compteur:-1})
            .then(data => res.render('../views/page/loupResultat.ejs',{PlayerData:data}))      
    },
    kill: function(req,res,next){
        m_loup.updateOne({nom: req.body.nom},{zombie: true})
            .then(() => res.status(201).redirect(307, '/Loup/admin'))
    },
    newPlayer: async(req,res,next) => {
        const { nom} = req.body;

        const player = await m_loup.create({
            nom,
            compteur:0,
            zombie:false
        });
        await player.save();
        res.status(201).redirect(307, '/Loup/admin')
    }

    
}