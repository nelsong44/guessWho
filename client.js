
$(document).ready(function() {
  console.log('JQ sourced');
  //on page load, call display githubUsers
  githubUsers();
  //on page load, call generateRandomIndex for guessThisUser
  generateRandomIndex(min, max);
  //on page load, call guessThisUser using the random index generated
  guessThisUser(randomNumber);
});

function githubUsers() {
  for (var i = 0; i < smallGroup.length; i++) {
    var image = '<img src="https://github.com/' + smallGroup[i].github + '.png">';
    $('.container').append('<div class="githubUser">' + image + '</div>');
    console.log(smallGroup[i].github);
    console.log(image);
  }//end for loop
}//end githubUsers

var min = 0;
var randomNumber = 0;
var max = smallGroup.length-1;
function generateRandomIndex(min, max){
  randomNumber = Math.floor(Math.random() * (1 + max - min) + min);
  console.log(randomNumber);
  return randomNumber;
}//end generateRandomIndex

function guessThisUser(randomNumber) {
  generateRandomIndex(min, max);
  var name = smallGroup[randomNumber].github;
  $('#name').text('Which GitHub user is ' + name + '?!?!');
}//end guessThisUser
