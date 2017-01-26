'use strict';

$(function () {
  $('#particles').particleground({
    dotColor: '#00471B',
    lineColor: '#00471B',
    lineWidth: 1,
    particleRadius: 5,
    proximity: 90,
    maxSpeedX: 0.2,
    maxSpeedY: 0.2,
    parallaxMultiplier: 8
  });

  var $shadeBox = $('.shadeBox');
  var $projectInfoBox = $('.projectInfoBox');
  var $projectCardOne = $('#projectCardOne');
  var $projectCardTwo = $('#projectCardTwo');
  var $projectCardThree = $('#projectCardThree');
  var $projectCardFour = $('#projectCardFour');

  $projectCardOne.on('click', showProjectOne);
  $projectCardTwo.on('click', showProjectTwo);
  $projectCardThree.on('click', showProjectThree);
  $projectCardFour.on('click', showProjectFour);

  function showProjectOne() {
    $shadeBox.show();
    $projectInfoBox.show();
    $projectInfoBox.html('<a href="#portfolio" id="closeProjectButtonLink"><div class="closeProjectButton">X</div></a><h3>Talkr</h3><p>My final project during the course, I decided to create a chatroom based instant messenger. Users can have private and public with each other or even just with themselves. With a Ruby-on-Rails api and an angular based front end it was my most complex project so far with Action Cable handling the instant part of Instant messenger.</p><a href="#"><div class="projectButton">View Code</div></a><a href="#"><div class="projectButton" id="viewCodeButton">View Project</div></a>');
    var $closeProjectButton = $('.closeProjectButton');
    $closeProjectButton.on('click', hideProject);
  }

  function showProjectTwo() {
    $shadeBox.show();
    $projectInfoBox.show();
    $projectInfoBox.html('<a href="#portfolio" id="closeProjectButtonLink"><div class="closeProjectButton">X</div></a><h3>iTrack</h3><p>A budgeting app using data pulled from the USDA nutrition API. Users can set their own personal daily calorie goal and can log their meals each day to create charts that return information about what they have eaten over time. They can also track their calories, protein, fat, etc over the course of a day week or month.</p><a href="#"><div class="projectButton">View Code</div></a><a href="#"><div class="projectButton" id="viewCodeButton">View Project</div></a>');
    var $closeProjectButton = $('.closeProjectButton');
    $closeProjectButton.on('click', hideProject);
  }

  function showProjectThree() {
    $shadeBox.show();
    $projectInfoBox.show();
    $projectInfoBox.html('<a href="#portfolio" id="closeProjectButtonLink"><div class="closeProjectButton">X</div></a><h3>Event Cupid</h3><p>Centred around the Google Maps and Skidde API, this app finds upcoming events around a central location between the user and their chosen partner. Users are able to select a date range for the available events and then follow a link to purchase tickets for that event.</p><img src="public/images/eventcupid.png" alt="Snake vs Snake Screenshot"><a href="https://eventcupid.herokuapp.com/" target="_blank"><div class="projectButton">View Project</div></a><a href="https://github.com/pedroeldiablo/WDI-Project" target="_blank"><div class="projectButton" id="viewCodeButton">View Code</div></a>');
    var $closeProjectButton = $('.closeProjectButton');
    $closeProjectButton.on('click', hideProject);
  }

  function showProjectFour() {
    $shadeBox.show();
    $projectInfoBox.show();
    $projectInfoBox.html('<a href="#portfolio" id="closeProjectButtonLink"><div class="closeProjectButton">X</div></a><h3>Snake vs Snake</h3><p>A game based on the popular mobile game Snake. Served as a great introduction to breaking down a complicated problem into smaller, more manageable tasks.</p><ul><li>Arrowkeys to move in singleplayer or for player one in two player.</li><li>WASD keys to move the second player in two player.</li><li>P key pauses.</li><li>[ key resumes.</li><li>R key restarts after game over.</li><li>M key mutes the background music.</li><li>N key unmutes muted music.</li></ul><img src="public/images/snake-vs-snake.png" alt="Snake vs Snake Screenshot"><a href="https://snake-vs-snake.herokuapp.com/" target="_blank"><div class="projectButton">View Project</div></a><a href="https://github.com/Rebehn/WDI-Project-1" target="_blank"><div class="projectButton" id="viewCodeButton">View Code</div></a>');
    var $closeProjectButton = $('.closeProjectButton');
    $closeProjectButton.on('click', hideProject);
  }

  function hideProject() {
    $shadeBox.hide();
    $projectInfoBox.hide();
  }
});