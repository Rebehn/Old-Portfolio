$(() => {
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

  const $shadeBox = $('.shadeBox');
  const $projectInfoBox = $('.projectInfoBox');
  const $closeProjectButton = $('.closeProjectButton');
  const $projectCardOne = $('#projectCardOne');
  const $projectCardTwo = $('#projectCardTwo');
  const $projectCardThree = $('#projectCardThree');
  const $projectCardFour = $('#projectCardFour');

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
