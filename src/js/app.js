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
  const $projectCardOne = $('#projectCardOne');
  const $projectCardTwo = $('#projectCardTwo');
  const $projectCardThree = $('#projectCardThree');
  const $projectCardFour = $('#projectCardFour');

  $projectCardOne.on('click', showProject(projectHtmlOne));
  $projectCardTwo.on('click', showProject('bantz'));
  $projectCardThree.on('click', showProject('bantz'));
  $projectCardFour.on('click', showProject('bantz'));

  const projectHtmlOne = '<a href="#portfolio" id="closeProjectButtonLink"><div class="closeProjectButton">X</div></a><h3>Talkr</h3><p>My final project during the course, I decided to create a chatroom based instant messenger. Users can have private and public with each other or even just with themselves. With a Ruby-on-Rails api and an angular based front end it was my most complex project so far with Action Cable handling the instant part of Instant messenger.</p><a href="#"><div class="projectButton">View Code</div></a><a href="#"><div class="projectButton" id="viewCodeButton">View Project</div></a>';

  function showProject(project) {
    $shadeBox.show();
    $projectInfoBox.show();
    $projectInfoBox.html(project);
    const $closeProjectButton = $('.closeProjectButton');
    $closeProjectButton.on('click', hideProject);
  }

  function hideProject() {
    $shadeBox.hide();
    $projectInfoBox.hide();
  }
});
