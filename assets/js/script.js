// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtn = $(".saveBtn")
var textArea = $(".description")
var timeBlks = $(".time-block")
var hour = dayjs().hour()


$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.on("click", function(){
    var hourId = $(this).parent().attr('id')
    var text = textArea.val()
    localStorage.setItem(hourId, text)
  })
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  Array.from(timeBlks).forEach(timeBlk => {
    var hourString = timeBlk.id,
      timeblkHour;
    if (hourString) {
      timeblkHour = parseInt(hourString);
    }
    if (timeblkHour) {
      if (hour == hourString) {
        timeBlk.classList.add('present')
      } else if (hour < timeblkHour) {
        timeBlk.classList.add('future')
      } else  {
        timeBlk.classList.add('past')
      }
    }
  });


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $(textArea).each(function() {
    $(this).val(localStorage.getItem($(this).parent().attr('id')));
});
  // TODO: Add code to display the current date in the header of the page.
  currentDay= dayjs().format("MMMM-DD-YYYY") 
  $("#currentDay").text(currentDay)
});
