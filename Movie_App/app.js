$(function () {
  console.log('App.js from movie_app file')
})

$('.submit-btn').on('click', function (e) {
  console.log('Submit button clicked!');
  e.preventDefault();
  if ($('.title').val().length < 2) {
    alert('The name of the movie is too short!');
    return;
  }

  const entryDiv = $('<div>');
  entryDiv.append($('.title').val() + " ")
    .append($('.rating').val() + " stars ")
    .append('<button class= "remove-btn">REMOVE</button>');
  entryDiv.addClass('results-div');
  $('.results').append(entryDiv);
})

$('body').on('click', '.remove-btn', function () {
  console.log('Remove button clicked!');
  $(this).parent().remove();
})