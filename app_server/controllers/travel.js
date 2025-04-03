/* GET Travel page */

const tripsEndpnt = "http://localhost:3000/api/trips";
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

/* 
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

const travel = (req, res) => {
    res.render('travel', {title: "Travlr Gateways", trips});
};
*/

const travel = async function(req, res, next) {
    await fetch(tripsEndpnt, options)
    .then(res => res.json())
    .then(json => {
        
        let message = null;
        if (!(json instanceof Array)) {
            message = 'API lookup error';
            json = [];
        }
        else {
            if (!json.length) {
                message = 'No trips in database';
            }
        }

        res.render('travel', {title: 'Travlr Gateways', trips: json, message});
    })
    .catch(err => res.status(500).send(e.message));

};



module.exports = {
    travel
}