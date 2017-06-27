$(document).ready(function() {
  console.log('JQ sourced');
  //on page load, call display githubUsers
  githubUsers();

  
    // $('.container').append('<div data-name="' + smallGroup.name + '"></div>"');

});

function githubUsers() {
  for (var i = 0; i < smallGroup.length; i++) {
    var image = '<img src="https://github.com/' + smallGroup[i].github + '.png">';
    $('.container').append('<div class="githubUser">' + image + '</div>');
    console.log(smallGroup[i].github);
    console.log(image);
  }//end for loop
}//end githubUsers
