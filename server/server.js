const express = require ('express'),
    mongoose = require('mongoose'),
    config = require ('../server/configure');
var app = express ();
require("dotenv").config();

mongoose.connect('mongodb+srv://test:Test123*@soa.uvb8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.set('port', process.env.PORT || 3300) ;

app = config(app);

app.set("view engine", "ejs");

app.get('/', function (req , res ){
    res.render('../views/page/index.ejs');
});
app.post('/', function (req , res ){
    res.render('../views/page/index.ejs');
});


app.listen(app.get ('port'), function () {
    console.log('Server up: http://localhost:' + app.get ('port'));
});