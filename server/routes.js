var express = require ('express') ,
    router = express.Router() ,
    home = require ('../controllers/Account');

module.exports = function ( app ) {
    router.get ('/', home.index );
    app.use ( router ) ;
};