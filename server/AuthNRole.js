
const ROLE = {
    ADMIN: 'admin',
    ARTISANT: 'artisant',
    CLIENT: 'client'
}

function authRole(role){
    return(req,res,next) => {
        switch(role){
            case "admin":
                if (req.body.role !== role)
                {
                    res.status(401)
                    return res.send('Not Allowed')
                }
                next();
                break;
            case "artisant":
                if (req.body.role !== role || req.body.role === "admin")
                {
                    res.status(401)
                    return res.send('Not Allowed')
                }
                next();
                break;
            case "client":
                if (req.body.role !== role || req.body.role === "admin" || req.body.role === "artisant")
                {
                    res.status(401)
                    return res.send('Not Allowed')
                }
                next();
                break;
        }
        if (req.body.role !== role)
        {
            res.status(401)
            return res.send('Not Allowed')
        }
        next();
    }
}
module.exports = { authRole,ROLE: ROLE }
