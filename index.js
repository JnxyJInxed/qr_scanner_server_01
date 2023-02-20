//import package
var PORT = process.env.PORT || 3000;
//server
const express = require('express');
const app = express();
//database
const mongoose = require('mongoose');
//body parser
const bodyParser = require('body-parser');
//cors
const cors = require('cors');
//secret params
require('dotenv/config');

//MIDDLEWARE:
//cors: public access
app.use(cors());
//middleware body parser
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));


//import routes
const dataQRRoute = require ('./routes/DataQRRoute/dataQR');

//MIDDLEWARE dari URL HOME/post ke postsRoutes
app.use('/dataQR', dataQRRoute);


//user authentication
//import routes
const userRoute = require ('./routes/auth');
//MIDDLEWARE dari URL HOME/post ke postsRoutes
app.use('/user', userRoute);

//ROUTE: neghubungin ke post dan get dkk
app.get('/', (req,res) => {
	res.send('QR Reader Home Base Server');
});


//Connect to DB
mongoose.connect(
	process.env.DB_CONNECT_URL,  
	{useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('connect to DB moongoose compass'),
);
// const dbBySonics = db.db('BySonics');
// const collectionUser = dbBySonics.collection(User);


//start LISTEN AT PORT:
app.listen(PORT, function () {
	console.log('Server running');
});