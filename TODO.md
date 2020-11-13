[]Create a user interface where the user can input two values (2 input elements) and the select type of mathematical operation. 
  -[X]create operator buttons
  -[X]There should also be a 'C' button 
      -[]that will clear the user input fields.

When the submit (`=` button) is clicked, 
  -[X]capture this input, bundle it up in an object, 
  -[X]and send this object to the server via a POST. 
  
  Build out the server-side logic to compute the numbers as appropriate. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, send back the OK. You should do a GET request after the POST to get the actual calculation.
