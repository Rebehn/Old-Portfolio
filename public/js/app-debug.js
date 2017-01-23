'use strict';

$(document).ready(function () {
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

  $projectCardOne.on('click', showProject);
  $closeProjectButton.on('click', hideProject);

  function showProject() {
    console.log('wew');
    $shadeBox.show();
    $projectInfoBox.show();
  }

  function hideProject() {
    console.log('hiding');
    $shadeBox.hide();
    $projectInfoBox.hide();
  }
});