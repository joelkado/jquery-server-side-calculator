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
const mathArray = [];
//route to get marys cats
app.get('/cat',(req, res) =>{
    console.log('sending cat data');
    res.send(catArray);
})
    app.post('/math', (req, res) => {
        let mathData = req.body;
        console.log('Here is our mathData', mathData);
        //push mathdata into our mathArray
        res.sendStatus(200); //200 is an ok status
        mathArray.push(mathData);
        console.log('Here is the current mathArray', mathArray);

        calculateQeue();
    })
    
function calculateQeue() {//ENTER calculateQeue
  console.log('ENTER calculateQeue');
if (mathArray[0].keyThree === '+') {
  Addition();
}
if (mathArray[0].keyThree === '-') {
  Subtraction();
}


};//EXIT calculateQeue 

function Subtraction() {//ENTER serverSubtraction
  console.log('ENTER serverSubtraction');
let firstNumber = Number(mathArray[0].keyOne);
console.log('firstNumber is:', firstNumber);
let secondNumber = Number(mathArray[0].keytwo);
console.log('secondNumber is:', secondNumber);
let equation =  firstNumber - secondNumber; 
console.log(`${firstNumber} - ${secondNumber} = ${equation}`);

}//EXIT serverSubtraction

function Addition (){//ENTER serverAddition
  console.log('ENTER serverAddition');
let firstNumber = Number(mathArray[0].keyOne);
console.log('firstNumber is:', firstNumber);
let secondNumber = Number(mathArray[0].keytwo);
console.log('secondNumber is:', secondNumber);
let equation =  firstNumber + secondNumber; 
console.log(`${firstNumber} + ${secondNumber} = ${equation}`);
}//EXIT serverAddition
    
    //----end of our routes-----------

//tell our server to start listening for requests on our port
app.listen(port, ()=> {
    console.log('server is lestining on port', port);
});
