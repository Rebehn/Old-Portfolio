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
  var $closeProjectButton = $('.closeProjectButton');
  var $projectCardOne = $('#projectCardOne');
  var $projectCardTwo = $('#projectCardTwo');
  var $projectCardThree = $('#projectCardThree');
  var $projectCardFour = $('#projectCardFour');

  $projectCardOne.on('click', showProject);
  $projectCardTwo.on('click', showProject);
  $projectCardThree.on('click', showProject);
  $projectCardFour.on('click', showProject);
  $closeProjectButton.on('click', hideProject);

  function showProject() {
    $shadeBox.show();
    $projectInfoBox.show();
  }

  function hideProject() {
    $shadeBox.hide();
    $projectInfoBox.hide();
  }
});