$(document).ready(function () {
$('.morecontent'). hide();

$('.readmore').click(function(event){
event.preventDefault();
  var text = $(this).text()
console.log(text)
  if (text === "Read more >") {
    $(this).text('Read less')
    $(this).siblings('.morecontent').show();
  }

   if (text === "Read less") {
     $(this).text('Read more >')
     $(this).siblings('.morecontent').hide();
  }
});
})
