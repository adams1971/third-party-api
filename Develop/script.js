
//1 display current day 

//2 create past present or future indicated by color code
//3 enter an event into the text area
//4 save event and store in local storage
// upon page refresh, safe event persists

$("#currentDay").text(moment().format('MMMM Do YYYY, [Make it a Good Day!]'));
console.log(moment) 


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
        updateSchedHours();
        function updateSchedHours() {
            var currentHour = moment().format();
            for(var i = 0; i < scheduleHours.length; i++ ) {

                if (parseInt(scheduleHours[i]) > currentHour) {
                    $('#' + scheduleHours[i]).attr("style", "background-color: red");

                }
                else if (parseInt(scheduleHours[i]) < currentHour) {
                    $('#' + scheduleHours[i]).attr("style", "background-color: lightgray");

                }

                else if (parseInt(scheduleHours[i]) == currentHour) {
                    $('#' + scheduleHours[i]).attr("style", "background-color: gray");
                }
            }
        }    


        //col 3 
        //create submit button
        //add font awesome icon to btn

        colSaveBtnDiv = $("<div class='col-sm-2'>");
        
        var colSaveButton = $("<button>");
        colSaveButton.attr("id", hours);
        colSaveButton.addClass("saveBtn");

                // append the div
        colTextDiv.append(colText);
        colSaveBtnDiv.append(colSaveButton);


        $("#scheduler").append(row);
        row.append(colHour, colTextDiv, colSaveBtnDiv);        
    } 
}

        //if condition to check that the time is past present future
        //change the bkgnd accordingly

// updateSchedHours();

// function updateSchedHours() {
//     var currentHour = moment().format('H');
//     for(var i = 0; i < scheduleHours.length; i++ ) {

//         if (parseInt(scheduleHours[i]) > currentHour) {
//             $('#' + scheduleHours[i]).attr("style", "background-color: red");


//         }
//         else if (parseInt(scheduleHours[i]) < currentHour) {
//             $('#' + scheduleHours[i]).attr("style", "background-color: lightgray");

//         }

//         else if (parseInt(scheduleHours[i]) == currentHour) {
//             $('#' + scheduleHours[i]).attr("style", "background-color: gray");
//         }
//     }
// }

letsSchedule();



// colSubmitBtnDiv = $("<div class='col-sm-2'>");
        
        // var colSubmitButton = $("<button>");
        // colSubmitButton.attr("id", hours);
        // colSubmitButton.addClass("saveBtn");

        //         // append the div
        // colTextDiv.append(colText);
        // colSubmitBtnDiv.append(colSubmitButton);