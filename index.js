const express = require('express');
const mongoose = require('mongoose');
const server = express();

// const { mongoURI } = require('./credentials'); //new syntax; handy but not necessary
const mongoURI = process.env.MONGOURI || require('./credentials').mongoURI;
// const mongoURI = require('./credentials').mongoURI; //old style, still works
const port = process.env.PORT || 8080;

//connect to the database
mongoose.connect(mongoURI, {
  useMongoClient: true
});

//middleware imports
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

//router imports
const userRouter = require('./routers/user.router');
const postRouter = require('./routers/post.router');

//wire up the middleware
server.use(cors());
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//wire up the routers
server.use(userRouter);
server.use(postRouter);


server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
