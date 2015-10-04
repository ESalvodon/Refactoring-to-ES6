'use strict';

$(document).ready(function () {

  var mark_done = function mark_done() {
    if ($(this).is(':checked')) {
      $(this).parent().find('.text').css('text-decoration', 'line-through');
    } else {
      $(this).parent().find('.text').css('text-decoration', 'none');
    }
  };
  $('.checkbox').click(mark_done);
  $('#addNew').click(function () {
    //var row= '<input  type=text name=todo />'
    var newTask = $('#userInput').val();
    $("ul:last").append('<li>' + '<div class = "newTask">' + '<input class="checkbox" type="checkbox">' + '<input class="text" type="text" name="todo" value="' + newTask + '">' + '</div></li>');
    $('.checkbox').last().click(mark_done);
  });
});
