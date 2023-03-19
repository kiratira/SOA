const { collection } = require('../models/Jeune');
const m_Jeunes = require('../models/Jeune');


module.exports = {
    index: function (req , res ) {
        m_Jeunes.find({},function(err, data){
            res.render('../views/page/listingJeunes.ejs',{Jeunes:data})
        })
    },

    updateJeune: function(req,res,next){
        m_Jeunes.updateOne({nom: req.body.nom},{heure: Date.now()})
        .then(() => res.status(201).redirect(307, '/ListingJeunes'))
    },
    
    new: async(req,res,next) => {
        const { nom} = req.body;

        const jeune = await m_Jeunes.create({
            nom,
            heure:Date.now
        });
        await jeune.save();
        res.status(201).redirect(307, '/ListingJeunes')
    }


    
}