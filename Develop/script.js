
//1 display current day 

//2 create past present or future indicated by color code
//3 enter an event into the text area
//4 save event and store in local storage
// upon page refresh, safe event persists

$("#currentDay").text(moment().format('MMMM Do YYYY, [Make it a Good Day!]'));
console.log(moment) 

var saveBtn = document.querySelector("#saveBtn")
console.log(saveBtn)
var currentHour = moment().hour();
console.log("currenthour= "+ currentHour);

var scheduleHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log("schduledhour= "+ scheduleHours);

        //created hour text and submit col blocks
        //gave the hours col block definition 
function letsSchedule() {

    for (let i = 0; i < scheduleHours.length; i++ ) {
        
        var row = $("<div class='row'>");
        var colHour = $("<div class='col-sm-2'>");
        
        var hours = scheduleHours[i] + " a.m.";

        if( scheduleHours[i] >= 12) {
            hours = scheduleHours[i] + " p.m.";

            if(scheduleHours[i] >= 13) {
                hours = scheduleHours[i] - 12  + " p.m.";
            }
        }
    
        colHour.append(hours);

        //created text col block
        var colTextDiv = $("<div class='col-sm-8'>");
        
        var colText = $("<textarea>");
        colText.attr("id", "textarea" + i);
        colText.addClass("form-control");
    
        //if condition to check that the time is past present future
        //change the bkgnd accordingly
        // tried as LOCAL
        updateSchedHours(); 
        function updateSchedHours() {
            var currentHour = moment().format(hours);
            for(var i = 0; i < scheduleHours.length; i++ ) {

                if (parseInt(scheduleHours[i]) > currentHour) { //future
                    $('.future' + scheduleHours[i]).attr("style", "background-color: #77dd77");

                }
                else if (parseInt(scheduleHours[i]) < currentHour) { //past
                    $('.past' + scheduleHours[i]).attr("style", "background-color: #d3d3d3");

                }

                else if (parseInt(scheduleHours[i]) == currentHour) { //present
                    $('.present' + scheduleHours[i]).attr("style", "background-color: #ff6961");
                }
            }
        }    


        //col 3 
        //create save button and set to local storage
        //add font awesome icon to btn
        colSaveBtnDiv = $("<div class='col-sm-2'>");
        
        var colSaveButton = $("<button>");
        colSaveButton.attr("id", currentHour);
        colSaveButton.addClass("saveBtn");

        // append the div
        colTextDiv.append(colText);
        colSaveBtnDiv.append(colSaveButton);

        $("#scheduler").append(row);
        row.append(colHour, colTextDiv, colSaveBtnDiv);        
    } 

        saveBtn.addEventListener("click", function (save) {
            save.preventDefalt();

            var textarea = document.querySelector("textarea").value;

            if (textarea === "") {
                displayMessage("error", "text area cannot be blank");

                localStorage.setItem("textarea", textarea);
            }
        });
}

        //if condition to check that the time is past present future
        //change the bkgnd accordingly
        
        // updateSchedHours();
        // function updateSchedHours() {
        //     var currentHour = moment().format(hours);
        //     for(var i = 0; i < scheduleHours.length; i++ ) {

        //         if (parseInt(scheduleHours[i]) > currentHour) { //future
        //             $('.future' + scheduleHours[i]).attr("style", "background-color: #77dd77");

        //         }
        //         else if (parseInt(scheduleHours[i]) < currentHour) { //past
        //             $('.past' + scheduleHours[i]).attr("style", "background-color: #d3d3d3");

        //         }

        //         else if (parseInt(scheduleHours[i]) == currentHour) { //present
        //             $('.present' + scheduleHours[i]).attr("style", "background-color: #ff6961");
        //         }
        //     }
        // }

letsSchedule();

//tried as GLOBAL
//if condition to check that the time is past present future
//change the bkgnd accordingly
// updateSchedHours(); 
//         function updateSchedHours() {
//             var currentHour = moment().format('hours');
//             for(var i = 0; i < scheduleHours.length; i++ ) {

//                 if (parseInt(scheduleHours[i]) > currentHour) { //future
//                     $('.future' + scheduleHours[i]).attr("style", "background-color: #77dd77");

//                 }
//                 else if (parseInt(scheduleHours[i]) < currentHour) { //past
//                     $('.past' + scheduleHours[i]).attr("style", "background-color: #d3d3d3");

//                 }

//                 else if (parseInt(scheduleHours[i]) == currentHour) { //present
//                     $('.present' + scheduleHours[i]).attr("style", "background-color: #ff6961");
//                 }
//             }
//         }
