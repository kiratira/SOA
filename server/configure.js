var path = require ('path'),
    exphbs = require ('express-handlebars'),
    express = require ('express'),
    bodyParser = require ('body-parser'),
    cookieParser = require ('cookie-parser'),
    morgan = require ('morgan'),
    methodOverride = require ('method-override'),
    errorHandler = require ('errorhandler');

const r_Account = require("../routes/Account");
const r_Admin = require("../routes/Administration");
const r_Auth = require("../routes/Authentification");
const r_Map = require("../routes/Map");
const r_QR = require("../routes/QRcode");
const r_Store = require("../routes/Store");
const r_Loup = require("../routes/Loup");



module.exports = function ( app ) {
    app.use(bodyParser.urlencoded ({'extended': true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser ('some-secret-value-here'));

    app.use('/Account',r_Account)
        .use('/Admin',r_Admin)
        .use('/Auth',r_Auth)
        .use('/Map',r_Map)
        .use('/QR',r_QR)
        .use('/Store',r_Store)
        .use('/Loup',r_Loup);


    if ('development' === app.get ('env')) {
        app.use(errorHandler());
    }

    return app;
};
/*
var path = require ('path') ,
    routes = require ('../routes/Account') ,
    exphbs = require ('express-handlebars') ,
    express = require ('express') ,
    bodyParser = require ('body-parser') ,
    cookieParser = require ('cookie-parser') ,
    morgan = require ('morgan') ,
    methodOverride = require ('method-override') ,
    errorHandler = require ('errorhandler');

module.exports = function ( app ) {
    app.use ( morgan ('dev '));
    app.use ( bodyParser.urlencoded ({ 'extended ': true }) );
    app.use ( bodyParser.json () );
    app.use ( methodOverride () ) ;
    app.use ( cookieParser ('some-secret-value-here '));
    //routes ( app );// moving the routes to routes folder .

    app.use ('/public/', express.static ( path.join ( __dirname , '../public ')));

    if ('development' === app.get ('env')) {
        app.use ( errorHandler () );
    }

   routes ( app );

    return app ;
};*/