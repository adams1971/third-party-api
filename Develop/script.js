var saveBtn = document.querySelector("#saveBtn");
//console.log(saveBtn);
var currentHour = moment().format("LT");
//console.log("currenthour= " + currentHour);
var hour = moment().hour();
var scheduleHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
//console.log("schduledhour= " + scheduleHours);

$("#currentDay").text(moment().format("MMMM Do YYYY, [Make it a Good Day!]"));
//console.log(moment);

$("#currentHour").text(currentHour);
//=====coverts time block from A.M. designation to P.M. designation using currentHour=====
function letsSchedule() {
  for (let i = 0; i < scheduleHours.length; i++) {
    var row = $("<div class='row'>");
    var colHour = $("<div class='col-sm-2'>");

    var hours = scheduleHours[i] + " a.m.";

    if (scheduleHours[i] >= 12) {
      hours = scheduleHours[i] + " p.m.";

      if (scheduleHours[i] >= 13) {
        hours = scheduleHours[i] - 12 + " p.m.";
      }
    }

    colHour.append(hours);

    //=====created text col block=====
    var colTextDiv = $("<div class='col-sm-8'>");

    var colText = $("<textarea>");
    colText.attr("id", "textarea" + i);
    colText.addClass("form-control");

    //=====if condition to check if "hour" is past present future, calling style for color=====

    if (hour === scheduleHours[i]) {
        colText.addClass("present");
    }

    if (hour > scheduleHours[i]) {
        colText.addClass("past");
    }

    if (hour < scheduleHours[i]) {
        colText.addClass("future");
    }


    //=====create save button and set to local storage=====
    //add font awesome icon to btn
    var valueTextarea = localStorage.getItem("textarea" + i);
    colText.text(valueTextarea);

    var colSaveButton = $("<button>");
    colSaveButton.addClass("saveBtn");
    colSaveButton.text("SAVE");

    var colSaveBtnDiv = $("<div class='col-sm-2'>");

    colTextDiv.append(colText);
    colSaveBtnDiv.append(colSaveButton);

    row.append(colHour, colTextDiv, colSaveBtnDiv);
    $("#scheduler").append(row);
  }
    //=====added eventListener to save input from user=====
  $(".saveBtn").on("click", function () {
    for (let i = 0; i < scheduleHours.length; i++) {
      var valueTextarea = $("#textarea" + i).val();
      console.log("textarea= " + valueTextarea + i);
      localStorage.setItem("textarea" + i, valueTextarea);
    }
  });
}

letsSchedule();
