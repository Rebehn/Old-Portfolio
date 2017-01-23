$(document).ready(function() {
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

  const $projectCardOne = $('#projectCardOne');

  $projectCardOne.on('click', showProject);

  function showProject() {
    console.log('wew lad');
  }
});
