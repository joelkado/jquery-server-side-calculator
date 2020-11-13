console.log('JS is CONNECTED');

$(document).ready(readyNow);

function readyNow() {//ENTER readyNow
    console.log('JQ is READY');

    //click handler for save
    $('#btn-submit').on('click', createMathObject);

}//EXIT readyNow



function createMathObject (event) {//ENTER createMathObjectFunction
  event.preventDefault();
  console.log('ENTER createMathObject');
//move values from input fields into mathObject
let valueOne = $('#inputOne').val();
let valueTwo = $('#inputTwo').val();



  let mathObject = {
    keyOne : valueOne,
    keyTwo : valueTwo
  }
  //empty input fields
  //$('#inputOne').val('');
  //$('#inputTwo').val('');
  console.log(mathObject.keyOne);
  console.log('This is our mathObject:', mathObject);
};//EXIT createMathObjectFunction

function addCat(event) {//ENTER addCat
    //prevent form-refresh
    event.preventDefault();

    //get name to send to server
    let name = $('#in-name').val();
    console.log('Adding a cat', name);

    $.ajax({
        method: 'POST',
        url: '/cat',
        data: {
            cat: name
        }
    }).then(function (response) {
        //then is run if we get a good response from server
        console.log('Added Successfully');
        //get all cats again, so we see the update 
        getCats();
        //clear input
        $('#in-name').val('');
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