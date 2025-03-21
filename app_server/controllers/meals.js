// Load meals page
// Get the JSON file for rooms data.
var fs = require('fs');
var mealinfo = JSON.parse(fs.readFileSync('./data/mealinfo.json','utf8'));

// render resposne with title and mealinfo.json data.
const meals = (req, res) => {
    res.render('meals', {title: "Travlr Gateways", mealinfo});
};

module.exports = {
    meals
}