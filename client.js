$(document).ready(function() {
  console.log('JQ sourced');
  //on page load...
  //call displayGithubImages()
  displayGithubImages();
  //call generateRandomIndex to pass to guessThisUser()
  generateRandomIndex(min, max);
  //call guessThisUser using the random index generated
  guessThisUser(randomNumber);
});//end onReady

// function to loop through array and display user images
function displayGithubImages() {
  for (var i = 0; i < smallGroup.length; i++) {
    //accessing github username within array of objects
    var user = smallGroup[i].github;
    //url of github image
    var image = '<img src="https://github.com/' + user + '.png">';
    //append user images to view
    $('.container').append('<div class="githubUser">' + image + '</div>');
    console.log(smallGroup[i].github);
    console.log(image);
  }//end for loop
}//end displayGithubImages

var min = 0;
//allowing 'max' to adjust based on array length
var max = smallGroup.length-1;
var randomNumber = 0;

//function to generate a random number to be set as the index chosen in array
function generateRandomIndex(min, max){
  randomNumber = Math.floor(Math.random() * (1 + max - min) + min);
  console.log(randomNumber);
  return randomNumber;
}//end generateRandomIndex

//function to choose a username whose image players will guess
//based on the random number generated
function guessThisUser(randomNumber) {
  generateRandomIndex(min, max);
  var name = smallGroup[randomNumber].github;
  $('#name').text('Which GitHub user is ' + name + '?!?!');
}//end guessThisUser

// - ------------------------------------------------------------------------
// console.log(smallGroup);
  //Array of objects (name, github)
// var chosenOne;          //randomly selected person in array
// var $userChoice;        //user's choice of an image
// var gameArray = [];   //placeholder array for randomly selected ppl w/ duplicates removed
//
// $(document).ready(function(){
//   //<img src='https://gitbhub.com/huckbee.png' alt='Profile image of Huck'>
//
//   gameReset();
//   gameplay();
//
// }); //end of document.ready
//
//
// //randomly select an index from larger array
// function findRandomIndex(arr){
//   // Run random to pick index number from array
//   var min = 0;
//   var max = arr.length - 1;
//   function randomNumber(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min);
//   }
//   var randomIndex = randomNumber(min, max);
//   return(randomIndex);
// }
//
// function randomizePeopleArray(){
//   //Randomly select five people from the people Array and place in new array
//   var randomIndex = 0;
//   var randomArray = [];
//   for(var j = 0; j < 7; j++){       //Repeat process
//     //Randomly select one person and pop into new array
//     randomIndex = findRandomIndex(people);
//     randomArray.push(people[randomIndex]);
//   }
//   // console.log("random array of people:", randomArray);
//   //Remove duplicate objects from the random array
//   gameArray = jQuery.uniqueSort(randomArray);
//   // console.log("duplicates removed", noDupArray);
//   console.log("random name", randomArray[1].name);
// }
//
// // RANDOMLY SELECT A PERSON TO BE THE CHOSEN ONE
// function selectChosenOne(){
//   var randomIndex = findRandomIndex(gameArray);
//   console.log("random index",randomIndex);
//     // console.log("random index", randomIndex);
//   // Assign that array value to a variable for the chosen one
//   // console.log("random array no duplicates", gameArray);
//   chosenOne = gameArray[randomIndex].name;
//   // Append name of the chosen one to the header h1 b/wn the spans
//   $('span').text(chosenOne);
//   //Prompts user to make a selection
//   $('#message').text('Select the image you think is the person listed.');
// }
//
// // DISPLAY PROFILE PICTURES
// function displayImages(){
//
//   randomizePeopleArray(); //randomly select a set of ppl from the People array to display on screen
//
//   for(var i = 0; i < gameArray.length; i++){
//       // Append the div tag for person, include data tag w/ name
//       var name = gameArray[i].name;
//       var github = gameArray[i].github;
//       $('.container').append('<div data-name="' + name + '"></div>');
//       // Build the image tag to Append
//       var $elImage = '<img src="https://github.com/' + github + '.png">';
//         // console.log("elImage",$elImage);
//       // Append the image tag into the div that was created above
//       var $el = $('.container').children().last();
//         // console.log(i, $el.data('name'));
//       $el.append($elImage);
//   }
// }
//
// //GAME LOGIC
// function gameplay(){
//   $('.container').on('click','div', function(){
//       // Record user's selection to a variable
//       $userChoice = $(this).data('name');
//       console.log("User selected", $userChoice);
//       console.log("Chosen one", chosenOne);
//       // Run if-else loop to compare user's selection to the chosen one
//       if($userChoice == chosenOne){
//         console.log("User is correct");
//         //Notify the user that they're correct
//         // $('#message').text('You are correct. Well done! Let\'s play again');
//         alert("You're correct. Well done! Let's play again.");
//         // Reset the game to start a new game
//         gameReset();
//       } else {
//         console.log("User is incorrect");
//         // Let user know they picked the wrong one
//         $('#message').text('That\'s not right. Try again!');
//         // Prompt user to pick again
//         // Reset user's choice variable
//       }
//   });
// }
//
// //GAME RESET
// function gameReset(){
//   //clear existing images
//   $('.container').empty();
//   //reset the "board"
//   displayImages();
//   selectChosenOne();
// }
