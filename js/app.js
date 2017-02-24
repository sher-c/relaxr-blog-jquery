function toggleAnswer1() {
  $('#moreans').slideToggle();
}
function toggleAnswer2() {
  $('#moreans2').slideToggle();
}


$('#moreans').hide();
$('#moreans2').hide();


$('#readmore').click(toggleAnswer1);
$('#readmore2').click(toggleAnswer2);
