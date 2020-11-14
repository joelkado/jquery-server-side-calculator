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
let mathArray = [];
//const answerArray = [];
const historyArray = [];
//route to get marys cats
app.get('/history',(req, res) =>{
    console.log('sending historyArray');
    res.send(historyArray);
})

app.get('/cat',(req, res) =>{
    console.log('sending cat data');
    res.send(catArray);
})
    app.post('/math', (req, res) => {
        let mathData = req.body;
        console.log('Here is our mathData', mathData);
          res.sendStatus(200); //200 is an ok status
//clear the mathArray so it can house a new equation
 mathArray = [];
  //push mathdata into our mathArray
mathArray.push(mathData);
      //push mathData into historyArray
      //  history.push(mathData)
        console.log('Here is the current mathArray', mathArray);
        console.log('And, here is our history array', historyArray);
        calculateQeue();
    }) 
    
    app.get('/answer',(req, res) =>{
        console.log('AJAX has arrived with a GET Request');
        res.send(mathArray);
        console.log('mathArray sent');
    })
    
function calculateQeue() {//ENTER calculateQeue
  console.log('ENTER calculateQeue');

if (mathArray[0].keyThree === '+') {
  addition();
}
if (mathArray[0].keyThree === '-') {
  subtraction();
}

if (mathArray[0].keyThree === '*') {
  multiplication();
}

if (mathArray[0].keyThree === '/') {
  division();
}


};//EXIT calculateQeue 

function division() {//ENTER division
  console.log('ENTER division');
  let firstNumber = Number(mathArray[0].keyOne);
  console.log('firstNumber is:', firstNumber);
  let secondNumber = Number(mathArray[0].keyTwo);
  console.log('secondNumber is:', secondNumber);
  let equation =  firstNumber / secondNumber; 
  console.log(`${firstNumber} / ${secondNumber} = ${equation}`);
  mathArray[0].keyFour = equation;

  console.log('Here is our mathArray', mathArray);
  addToHistory()

}//EXIT division

function multiplication() {//ENTER multiplication
  console.log('ENTER multiplication');
let firstNumber = Number(mathArray[0].keyOne);
console.log('firstNumber is:', firstNumber);
let secondNumber = Number(mathArray[0].keyTwo);
console.log('secondNumber is:', secondNumber);
let equation =  firstNumber * secondNumber; 
console.log(`${firstNumber} * ${secondNumber} = ${equation}`);
mathArray[0].keyFour = equation;

console.log('Here is our mathArray', mathArray);
addToHistory()
};//EXIT multiplication

function addToHistory() {//ENTER addToHistory
  console.log('ENTER addToHistory');
  historyArray.push(mathArray[0]);
  console.log('Here is the current history', historyArray);
}//EXIT addToHistory

function subtraction() {//ENTER Subtraction
  console.log('ENTER serverSubtraction');
let firstNumber = Number(mathArray[0].keyOne);
console.log('firstNumber is:', firstNumber);
let secondNumber = Number(mathArray[0].keyTwo);
console.log('secondNumber is:', secondNumber);
let equation =  firstNumber - secondNumber; 
console.log(`${firstNumber} - ${secondNumber} = ${equation}`);
mathArray[0].keyFour = equation;

console.log('Here is our mathArray', mathArray);
addToHistory()

};//EXIT Subtraction

function addition (){//ENTER addition
  console.log('ENTER serverAddition');
let firstNumber = Number(mathArray[0].keyOne);
console.log('firstNumber is:', firstNumber);
let secondNumber = Number(mathArray[0].keyTwo);
console.log('secondNumber is:', secondNumber);
let equation =  firstNumber + secondNumber; 
console.log(`${firstNumber} + ${secondNumber} = ${equation}`);
//add answer to our answerArray
mathArray[0].keyFour = equation;

console.log('Here is our mathArray', mathArray);
addToHistory()


}//EXIT addition
    
    //----end of our routes-----------

//tell our server to start listening for requests on our port
app.listen(port, ()=> {
    console.log('server is listening on port', port);
});
