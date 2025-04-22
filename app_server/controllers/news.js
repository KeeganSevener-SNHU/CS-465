// Load the news page.

// Get the JSON files for the news page.
var fs = require('fs');
var vacaTips = JSON.parse(fs.readFileSync('./data/vacationtips.json','utf8'));
var latestNews = JSON.parse(fs.readFileSync('./data/latestnews.json','utf8'));


const news = (req, res) => {
    res.render('news', {title: 'Travlr Gateways', vacaTips, latestNews});
};

module.exports = {
    news
}