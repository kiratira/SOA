require("dotenv").config();
const m_user = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );
                user.token = token;

            res.status(200).json(user);
            }
            res.status(400).send("email ou mot de passe invalide(s)");
            
        }catch(err){
            console.log(err);
        }
    }
};