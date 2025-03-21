/* Load rooms page */
// Get the JSON file for rooms data.
var fs = require('fs');
var roominfo = JSON.parse(fs.readFileSync('./data/roominfo.json','utf8'));

// render resposne with title and rooms.json data.
const rooms = (req, res) => {
    res.render('rooms', {title: "Travlr Gateways", roominfo});
};

module.exports = {
    rooms
}