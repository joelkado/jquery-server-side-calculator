//bring in express from the node_modules folder
//express is a function
const express = require('express');

//bring in body parser which will help us parse inoming data
const bodyParser = require('body-parser');

//create an instance of the express web server. we'll call it app
const app = express();

//we'll use this port later, its like a box number at the post office
//where our server will get/send mail/mesages
const port = 5000;

//tell express where to find static files that it can send on request
app.use(express.static('server/public'));

//tell express how to parse incominge data
app.use(bodyParser.urlencoded({extended : true}));

// ----these routes & data will vary for each assignment----
const catArray = ['Abby', 'Kyo', 'Fred'];
//route to get marys cats
app.get('/cat',(req, res) =>{
    console.log('sending cat data');
    res.send(catArray);
})
    app.post('/math', (req, res) => {
        let mathData = req.body;
        console.log('RECEIVED mathObject', mathData);
        //catArray.push(catData);
        res.sendStatus(200); //200 is an ok status
        
    })
    //----end of our routes-----------

//tell our server to start listening for requests on our port
app.listen(port, ()=> {
    console.log('server is lestining on port', port);
});
