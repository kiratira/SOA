const m_user = require('../models/User');

const ROLE = {
    ADMIN: 'admin',
    artisan: 'artisan',
    CLIENT: 'client'
}

function authRole(role){
    return async(req,res,next) => {
        try {
            const token = req.body.token || req.query.token || req.headers["x-access-token"]|| req.cookies.access_token;

            await m_user.findOne({token})
                .then(user => {
                    if (user.tokenExpiration < new Date().setTime(Date.now())) res.status(401).send('token expired');
                    const userRole = user.role;
                    switch (role) {
                        case "admin":
                            if (userRole === role) {
								return next();
                            }
							return res.status(401).send('Not Allowed')
                            break;
                        case "artisan":
                            if (userRole === role || userRole === "admin") {
                            	return next();
                            }
							return res.status(401).send('Not Allowed')
                            break;
                        case "client":
                            if (userRole === role || userRole === "admin" || userRole === "artisan") {
                                return next();
                            }
							return res.status(401).send('Not Allowed')
                            break;
                    }
                })
                .catch(error => res.status(400).json({error}));
            //next();
        }
        catch (err){
            console.log(err);
        }
    }
}
module.exports = { authRole,ROLE: ROLE }