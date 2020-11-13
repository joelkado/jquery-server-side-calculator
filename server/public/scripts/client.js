console.log('JS is CONNECTED');

$(document).ready(readyNow);

function readyNow() {//ENTER readyNow
    console.log('JQ is READY');
$('#plusButton').on('click', add);
$('#minusButton').on('click', subtract);
$('#multiplyButton').on('click', multiply);
$('#divideButton').on('click', divide);


    //click handler for save
    $('#btn-submit').on('click', createMathObject);

}//EXIT readyNow

let mathObject = {
   
};

function divide(event) {//ENTER divide
  event.preventDefault();

  console.log('ENTER divide');
mathObject.keyThree = '/';
};//EXIT divide


function multiply(event) {//ENTER multiply
  event.preventDefault();

  console.log('ENTER multiply');
mathObject.keyThree = '*';
};//EXIT multiply


function subtract(event) {//ENTER subtract
  event.preventDefault();
  console.log('ENTER subtrat');
mathObject.keyThree = '-';
};//EXIT subtract

function add(event) {//ENTER add
  event.preventDefault();

  console.log('ENTER add');
mathObject.keyThree = '+';
};//EXIT add


function createMathObject (event) {//ENTER createMathObjectFunction
  event.preventDefault();
  console.log('ENTER createMathObject');
//move values from input fields into mathObject
let valueOne = $('#inputOne').val();
let valueTwo = $('#inputTwo').val();

mathObject.keyOne = valueOne;
mathObject.keytwo = valueTwo;

  
  //empty input fields
  $('#inputOne').val('');
  $('#inputTwo').val('');
  console.log('This is our mathObject:', mathObject);
sendMathObject()
};//EXIT createMathObjectFunction

function sendMathObject() {
    $.ajax({
        method: 'POST',
        url: '/math',
        data: mathObject
    }).then(function (response) {
        //then is run if we get a good response from server
        console.log('mathObject has arrived at SERVER', response);
        //get all cats again, so we see the update 
        //clear input
      //  $('#in-name').val('');
    }).catch(function (error) {
        //catch is run if there is a bad response from server
        //log th error and alert the user
        console.log('Error', error);
        alert('Something went wrong.')
    })

}//EXIT addCat

function getCats() {//ENTER getCats
    //making a get request to our server
    //this returns back a 'Promise'
    $.ajax({
        method: 'GET',
        url: '/cat'
    }).then(function (response) {
        console.log('Got response:', response);
        renderCats(response)
    }).catch(function (error) {
        //log th error and alert the user
        console.log('Error', error);
        alert('Something went wrong.')
    })

    console.log('EXIT getCats');
}//EXIT getCats

function renderCats(catArray) {//ENTER renderCats
    console.log('Here is the catsArray we got from the server', catArray);
    //append to the DOM
    $('#cat-list').empty();
    for (let cat of catArray) {
        $('#cat-list').append(`<li>${cat}</li>`);
    }
}//EXIT renderCats