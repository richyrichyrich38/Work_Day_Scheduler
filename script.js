// MomentJS times
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

var currentHour = moment().hour();

// Sets hourly sections based on past, present, future
var rows = $("textarea");

Array.from(rows).forEach((row) => {
  var rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if (currentHour < rowHour && currentHour > rowHour - 12) {
      setColor(row, "green");
    } else if (currentHour > rowHour && currentHour < rowHour + 12) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.background = color;
}

// series of functions for ever hour to set, save and retrieve data from local storage plus persist on page load

var store = [];

// save to local storage btn
var saveBtn9 = $("#save-9");

saveBtn9.on("click", function (event) {
  var inputText = $("#9").val();
  store.push(inputText);
  localStorage.setItem("9am", inputText);
// notifies user app has been added to local storage
  unhide();
});

var nineAmTextarea = $("#9")[0];

function getNineAm() {
  var nineAmValue = localStorage.getItem("9am");
  
  nineAmTextarea.innerText = nineAmValue;
}

// delete from local storage btn
var deleteBtn9 = $('#delete-9');
// when clicked, runs the delete string function
deleteBtn9.on('click', deleteString)
// removes data from local storage
function deleteString() {
  localStorage.removeItem("9am");
// clears the text area
  $("#9").val('');
// notifies user app has been removed from local storage
  unhideDelete();
}



window.onload = getNineAm();

var saveBtn10 = $("#save-10");

saveBtn10.on("click", function (event) {
  var inputText10 = $("#10").val();
  store.push(inputText10);
  localStorage.setItem("10am", inputText10);
// notifies user app has been added to local storage
  unhide();
});

function getTenAm() {
  var nineAmValue = localStorage.getItem("10am");
  var nineAmTextarea = $("#10")[0];
  nineAmTextarea.innerText = nineAmValue;
}

// delete from local storage btn
var deleteBtn10 = $('#delete-10');
// when clicked, runs the delete string function
deleteBtn10.on('click', deleteString10)
// removes data from local storage
function deleteString10() {
  localStorage.removeItem("10am");
// clears the text area
  $("#10").val('');
// notifies user app has been removed from local storage
  unhideDelete();
}


window.onload = getTenAm();

var saveBtn11 = $("#save-11");

saveBtn11.on("click", function (event) {
  var inputText11 = $("#11").val();
  store.push(inputText11);
  localStorage.setItem("11am", inputText11);
// notifies user app has been added to local storage
  unhide();
});

function getElevenAm() {
  var nineAmValue = localStorage.getItem("11am");
  var nineAmTextarea = $("#11")[0];
  nineAmTextarea.innerText = nineAmValue;
}

// delete from local storage btn
var deleteBtn11 = $('#delete-11');
// when clicked, runs the delete string function
deleteBtn11.on('click', deleteString11)
// removes data from local storage
function deleteString11() {
  localStorage.removeItem("11am");
// clears the text area
  $("#11").val('');
// notifies user app has been removed from local storage
  unhideDelete();
}


window.onload = getElevenAm();

var saveBtn12 = $("#save-12");

saveBtn12.on("click", function (event) {
  var inputText12 = $("#12").val();
  store.push(inputText12);
  localStorage.setItem("12pm", inputText12);
// notifies user app has been added to local storage
  unhide();
});

function getTwelvePm() {
  var nineAmValue = localStorage.getItem("12pm");
  var nineAmTextarea = $("#12")[0];
  nineAmTextarea.innerText = nineAmValue;
}

// delete from local storage btn
var deleteBtn12 = $('#delete-12');
// when clicked, runs the delete string function
deleteBtn12.on('click', deleteString12)
// removes data from local storage
function deleteString12() {
  localStorage.removeItem("12pm");
// clears the text area
  $("#12").val('');
// notifies user app has been removed from local storage
  unhideDelete();
}


window.onload = getTwelvePm();

var saveBtn13 = $("#save-13");

saveBtn13.on("click", function (event) {
  var inputText13 = $("#13").val();
  store.push(inputText13);
  localStorage.setItem("1pm", inputText13);
// notifies user app has been added to local storage
  unhide();
});

function getOnePm() {
  var nineAmValue = localStorage.getItem("1pm");
  var nineAmTextarea = $("#13")[0];
  nineAmTextarea.innerText = nineAmValue;
}

// delete from local storage btn
var deleteBtn13 = $('#delete-13');
// when clicked, runs the delete string function
deleteBtn13.on('click', deleteString13)
// removes data from local storage
function deleteString13() {
  localStorage.removeItem("1pm");
// clears the text area
  $("#13").val('');
// notifies user app has been removed from local storage
  unhideDelete();
}


window.onload = getOnePm();

var saveBtn14 = $("#save-14");

saveBtn14.on("click", function (event) {
  var inputText14 = $("#14").val();
  store.push(inputText14);
  localStorage.setItem("2pm", inputText14);
// notifies user app has been added to local storage
  unhide();
});

function getTwoPm() {
  var nineAmValue = localStorage.getItem("2pm");
  var nineAmTextarea = $("#14")[0];
  nineAmTextarea.innerText = nineAmValue;
}

// delete from local storage btn
var deleteBtn14 = $('#delete-14');
// when clicked, runs the delete string function
deleteBtn14.on('click', deleteString14)
// removes data from local storage
function deleteString14() {
  localStorage.removeItem("2pm");
// clears the text area
  $("#14").val('');
// notifies user app has been removed from local storage
  unhideDelete();
}


window.onload = getTwoPm();

var saveBtn15 = $("#save-15");

saveBtn15.on("click", function (event) {
  var inputText15 = $("#15").val();
  store.push(inputText15);
  localStorage.setItem("3pm", inputText15);
// notifies user app has been added to local storage
  unhide();
});

function getThreePm() {
  var nineAmValue = localStorage.getItem("3pm");
  var nineAmTextarea = $("#15")[0];
  nineAmTextarea.innerText = nineAmValue;
}

// delete from local storage btn
var deleteBtn15 = $('#delete-15');
// when clicked, runs the delete string function
deleteBtn15.on('click', deleteString15)
// removes data from local storage
function deleteString15() {
  localStorage.removeItem("3pm");
// clears the text area
  $("#15").val('');
// notifies user app has been removed from local storage
  unhideDelete();
}


window.onload = getThreePm();

var saveBtn16 = $("#save-16");

saveBtn16.on("click", function (event) {
  var inputText16 = $("#16").val();
  store.push(inputText16);
  localStorage.setItem("4pm", inputText16);
// notifies user app has been added to local storage
  unhide();
});

function getFourPm() {
  var nineAmValue = localStorage.getItem("4pm");
  var nineAmTextarea = $("#16")[0];
  nineAmTextarea.innerText = nineAmValue;
}

// delete from local storage btn
var deleteBtn16 = $('#delete-16');
// when clicked, runs the delete string function
deleteBtn16.on('click', deleteString16)
// removes data from local storage
function deleteString16() {
  localStorage.removeItem("4pm");
// clears the text area
  $("#16").val('');
// notifies user app has been removed from local storage
  unhideDelete();
}


window.onload = getFourPm();

var saveBtn17 = $("#save-17");

saveBtn17.on("click", function (event) {
  var inputText17 = $("#17").val();
  store.push(inputText17);
  localStorage.setItem("5pm", inputText17);
// notifies user app has been added to local storage
  unhide();
});

function getFivePm() {
  var nineAmValue = localStorage.getItem("5pm");
  var nineAmTextarea = $("#17")[0];
  nineAmTextarea.innerText = nineAmValue;
}

// delete from local storage btn
var deleteBtn17 = $('#delete-17');
// when clicked, runs the delete string function
deleteBtn17.on('click', deleteString17)
// removes data from local storage
function deleteString17() {
  localStorage.removeItem("5pm");
// clears the text area
  $("#17").val('');
// notifies user app has been removed from local storage
  unhideDelete();
}


window.onload = getFivePm();

// unhide save message for 1.2 seconds
function unhide() {
  $(".hidden").show();
  setTimeout(function () {
    $(".hidden").hide();
  }, 1200);
}

// unhide delete message for 1.2 seconds
function unhideDelete() {
  $(".hiddenDelete").show();
  setTimeout(function () {
    $(".hiddenDelete").hide();
  }, 1200);
}
