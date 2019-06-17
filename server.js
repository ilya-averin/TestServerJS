var express = require('express'),
		app = express(),
		port = process.env.PORT || 3000,
		mongoose = require('mongoose'),
		User = require('./api/models/userListModel'),
		bodyParser = require('body-parser');

// mongoose.Promise = global.Promise;
//userdb not users
mongoose.connect('mongodb://localhost:27017/Userdb', { useNewUrlParser: true })
.then(() => {
	console.log("Connected to Database");
	}).catch((err) => {
			console.log("Not Connected to Database ERROR! ", err);
	});
;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//missed an s
var routes = require('./api/routes/userListRoutes');
routes(app);

app.listen(port);

console.log('user List started on:' + port);
