const m_user = require('../models/User');

const ROLE = {
    ADMIN: 'admin',
    ARTISANT: 'artisant',
    CLIENT: 'client'
}

function authRole(role){
    return(req,res,next) => {
        const token = req.body.token || req.query.token || req.headers["x-access-token"];

        m_user.findOne({token})
            .then(user => {
                if(user.tokenExpiration < new Date().setTime(Date.now())) res.status(401).send('token expired');
                const userRole = user.role;
                switch (role) {
                    case "admin":
                        if (userRole !== role) {
                            res.status(401).send('Not Allowed')
                        }
                        next();
                        break;
                    case "artisant":
                        if (userRole !== role || userRole === "admin") {
                            res.status(401).send('Not Allowed')
                        }
                        next();
                        break;
                    case "client":
                        if (userRole !== role || userRole === "admin" || userRole === "artisant") {
                            res.status(401).send('Not Allowed')
                        }
                        break;
                }
                if (userRole !== role) {
                    res.status(401).send('Not Allowed')
                }
            })
            .catch(error => res.status(400).json({ error }));
        next();
    }
}
module.exports = { authRole,ROLE: ROLE }
