var express = require('express');
var mongoose = require ("mongoose");

var uristring = 
  process.env.MONGODB_URI || 
  'mongodb://localhost/HelloMongoose';



var app = express();

app.set('port', (process.env.PORT || 5000));



// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

//
// This is the schema.  Note the types, validation and trim
// statements.  They enforce useful constraints on the data.
var PlayerSchema = new mongoose.Schema({
    name: String,
    nationality: String,
    rank: Number,
    team      : {
        previous : String,
        current  : String
    },
  age: { type: Number, min: 18}
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'PowerUsers' collection in the MongoDB database
var Player = mongoose.model('Player', PlayerSchema);


// Clear out old data
Player.remove({}, function(err) {
  if (err) {
    console.log ('error deleting old data.');
  }
});

// Creating one user.
	var messi = new Player ({
	  name: 'L.Messi',
	  age: 25,
	  nationality: 'Argentina',
	  team: {current : "Barcelona",
			previous: ''
			},
			rank : 9.6
	});
 
messi.save(function (err) {if (err) console.log ('Error on save!')});


// // middleware to use for all requests
// app.use(function(req, res, next) {
//     // do logging
//     console.log('Something is happening.');
//     next(); // make sure we go to the next routes and don't stop here
// });


var router = express.Router();


router.route('/players').

		post(function(req, res) {
		var player 	= new Player();		// create a new instance of the Bear model
		player.name = req.body.name;  // set the bears name (comes from the request)
		player.age 			= req.body.age;  // set the bears name (comes from the request)
		player.nationality  = req.body.nationality;  // set the bears name (comes from the request)
		player.rank = req.body.rank;  // set the bears name (comes from the request)
		player.team = req.body.team;  // set the bears name (comes from the request)



		player.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Player created!' });
		});

		
	})
	// get all the players
	.get(function(req, res) {
		Player.find(function(err, players) {
			if (err)
				res.send(err);

			res.json(players);
		});
	});


router.route('/removeAll').
		post(function(req, res) {
		
		Player.remove({}, function(err) {
		  if (err) {
		    console.log ('error deleting old data.');
		  }
		});

	});





// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);





app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


