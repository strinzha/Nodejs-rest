var express = require('express');
var db = require('./app/model/model.js');

var app = express();
var router = express.Router();

var port = process.env.PORT || 8080;

router.use(function(req, res, next) {
   
    console.log('REST api work');
    next(); 
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get("/country", function (req, res) {	
	res.end(JSON.stringify({
		"countries": db.getCountries()
	}));
});
 
router.get("/country/:country/hotel", function (req, res) {
	var country = req.params.country;
	res.end(JSON.stringify({
		"hotels": db.getHotelsInCountry(country)
	}));
});

router.post("/country", function (req, res) {	
	var name = req.body.countryName;
	var description = req.body.countryDescription;
	db.addCountry(name, description);
});

router.post("/country/:country/hotel", function (req, res) {	
	var countryName = req.params.country;	
	var hotelName = req.body.hotelName;
	var hotelDescription = req.body.hotelDescription;	
	db.addHotelInCountry(countryName, hotelName, hotelDescription);
});

router.get("/hotel/:id", function (req, res) {	
	var id = parseInt(req.params.id);	
	var hotel = db.getHotelById(id);
	res.end(JSON.stringify({
		"hotel": hotel
	}));
});

router.delete("/hotel/:id", function (req, res) {	
	var id = parseInt(req.params.id);	
	db.deleteHotelById(id);
});

router.put("/hotel/:id", function (req, res) {
	var id = parseInt(req.params.id);
	var newCountryName = req.body.countryName;
	var newHotelName = req.body.hotelName;
	var newHotelDescription = req.body.hotelDescription;	
	db.updateHotelById(id, newCountryName, newHotelName, newHotelDescription);
});

app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);