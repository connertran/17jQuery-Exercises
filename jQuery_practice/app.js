// 1
// The anonymous function will run automatically when the document is ready.
// n jQuery, the $(function() {...}) syntax is a shorthand for the $(document).ready() method.
$(function () {
  console.log("Let's get ready to party with jQuery!");
});

// 2 Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('img').addClass('image-center');
// 3 Remove the last paragraph in the article.
$('article p:last').remove();
// 4 Set the font size of the title to be a random pixel size from 0 to 100.
$('#title').css('font-size', Math.random() * 100);
// 5 Add an item to the list; it can say whatever you want.
$('ol').append("<li>I am new to jQuery!</li>");
// 6 Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$("aside")
  .empty()
  .append($("<p>", { text: "Sorry about that list :(" }));
// 7 When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$(".form-control").on('keyup blur change', function () {
  let red = $('.form-control').eq(0).val();
  let blue = $('.form-control').eq(1).val();
  let green = $('.form-control').eq(2).val();
  $('body').css("background-color", `rgb(${red}, ${blue}, ${green})`)
});
//8 Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function () {
  this.remove()
});