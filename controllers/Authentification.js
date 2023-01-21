require("dotenv").config();
const m_user = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {now} = require("mongoose");

const ValidateTime = 3;


module.exports = {
    index: function (req, res){
        res.send('Auth:index controller');
    },

    newUser: async(req,res) => {

        try {

            const { name, secondName, email, password } = req.body;

            if(!(email && name && secondName && password)){
                res.status(400).send("Une ou plusieurs informations manquantes");
            }
    
            const userExists = await m_user.findOne({email});
    
            if(userExists) {
                return res.status(409).send("utilisateur existe deja");
            }
    
            encryptedPWD = await bcrypt.hash(password, 10);

            const user = await m_user.create({
                name,
                secondName,
                email: email.toLowerCase(),
                password: encryptedPWD,
            });

            const token = jwt.sign({
                user_id:user._id,email},
                process.env.TOKEN_KEY,{
                    expiresIn:"2h",
                }
            );

            user.token = token;

            let expiration = new Date();
            expiration.setTime(Date.now())
            expiration.setHours(expiration.getHours()+ValidateTime)
            user.tokenExpiration = expiration;

            await user.save();

            res.status(201).json(user);
        }
        catch(err){
            console.log(err);
        }
    },

    loginUser: async(req, res) => {
        try {
            const { email, password } = req.body;
            if(!(email && password)){
                res.status(400).send("Informations manquantes");
            }

            const user = await m_user.findOne({ email });
            if(user && (await bcrypt.compare(password, user.password))){
                const token = jwt.sign(
                    {user_id: user._id, email},
                    "secret",
                    {
                        expiresIn: "2h",
                    }
                );
                
                user.token = token;
                let expiration = new Date();
                expiration.setTime(Date.now())
                expiration.setHours(expiration.getHours()+ValidateTime)
                user.tokenExpiration = expiration;
                
                res.cookie('access_token', token, {
                    maxAge: 24 * 60 * 60 * 1000,
                    httpOnly: true
                });

                return await m_user.updateOne({_id:user._id},{token: token,tokenExpiration: expiration})
                    .then(() => res.status(201).redirect(307, '/'))
                    .catch(error => res.status(400).json({error}));
            }
            return await res.status(400).send("email ou mot de passe invalide(s)");
            
        }catch(err){
            console.log(err);
        }
    }
};