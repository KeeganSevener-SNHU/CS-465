/* GET Homepage */
//var fs = require('fs');
//var homeStuff = JSON.parse(fs.readFileSync('./data/homeStuff.json','utf8'));

const home = (req, res) => {
    res.render('home', {title: "Travlr Gateways"});
};

module.exports = {
    home
}