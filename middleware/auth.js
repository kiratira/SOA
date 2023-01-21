const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req,res,next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.cookies.access_token;

    if(!token) {
        return res.status(403).send("Vous devez être identifié pour voir ceci");
    }
    try{
        const decoded = jwt.verify(token, "secret");
        req.user = decoded;
    }catch(err){
        return res.status(401).send("Token invalide");
    }
    return next();
}

module.exports = verifyToken;