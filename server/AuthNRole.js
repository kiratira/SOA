const m_user = require('../models/User');

const ROLE = {
    ADMIN: 'admin',
    ARTISAN: 'artisan',
    CLIENT: 'client'
}

function authRole(role){
    return async (req,res,next) => {
        const token = req.headers["x-access-token"];
        const user = await m_user.findOne({ token }, {'_id':0, '__v':0});
        if(!user){
            return res.status(400).send('User not found');
        }
        
        switch(role){
            case "admin":
                if (user.role !== role)
                {
                    return res.status(401).send('Not Allowed')
                }
                return next();
            case "artisan":
                if (user.role !== role || user.role === "admin")
                {
                    return res.status(401).send('Not Allowed')
                }
                return next();
            case "client":
                if (user.role !== role || user.role === "admin" || user.role === "artisan")
                {
                    return res.status(401).send('Not Allowed')
                }
                return next();
        }
        if (req.body.role !== role)
        {
            return res.status(401).send('Not Allowed')
        }
        next();
    }
}
module.exports = { authRole,ROLE: ROLE }
