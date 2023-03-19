module.exports = {
    pierre: function (req, res){
        console.log("QR:pierre controller")
        res.send('QR:pierre controller');
    },
    bronze: function (req, res){
        res.send('QR:bronze controller');
    },
    fer: function (req, res){
        res.send('QR:fer controller');
    }
};