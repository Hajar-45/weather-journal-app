// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
//start up an instance of app
const app = express();
const bodyParser = require('body-parser');



/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Setup Server
const port = 8000;
app.listen(port, listening);

function listening() {
    console.log(`server is running on localhost: ${port}`);
};

// initialize the main project folder

app.use(express.static('websites'));

//Add get routes
app.get('/getData', getData);

function getData(req, res) {
    res.send(projectData).status(200).end();

};

//Add post routes

app.post('/addData', postData);

function postData(req, res) {
    console.log(req.body);
    projectData = {
        temp: req.body.temp,
        date: req.body.date,
        content: req.body.content,
    };

    res.send(projectData).status(200).end();

}