
import {foodBank} from './backend-classes.js';
//import {operationHours} from 'backend-classes.js';

var nameList;
var latitude;
var longitude;
var pickup_day;

// dummy data

// food bank
var testFoodBank = new foodBank("gracefung", "mypassword");
testFoodBank.setOrgName("Grace's organization");
testFoodBank.setLocation(("43.77377887675926", "-79.50191131533997"));
testFoodBank.getHours().setSunday([true, "11:26 AM", "5:00 PM"]);
testFoodBank.getHours().setMonday([false, "11:26 AM", "5:00 PM"]);
testFoodBank.getHours().setTuesday([true, "11:26 AM", "5:00 PM"]);
testFoodBank.getHours().setWednesday([false, "10:26 AM", "5:00 PM"]);
testFoodBank.getHours().setThursday([true, "11:26 AM", "5:00 PM"]);
testFoodBank.getHours().setFriday([false, "11:26 AM", "5:00 PM"]);
testFoodBank.getHours().setSaturday([true, "11:26 AM", "6:00 PM"]);
////////////////
pickup_day = "Monday";

// dummy success:
export function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    nameList = [testFoodBank];
    // redirect to other html file
    location.href = "listOfFoodBanks.html";

    // var wrapper = document.getElementById("myHTMLWrapper");
    // var myHTML = '';
    // for (var i = 0; i < 10; i++) {
    //     myHTML += '<span class="test">Testing out my script! loop #' + (i + 1) + '</span><br/><br/>';
    // }/*  w w  w  . j av a  2  s. c o  m*/
    // wrapper.innerHTML = myHTML

    // put data on other html file
    for (var i = 0; i < nameList.length; i++) {
        // add button with ID name nameList[i]
        var b = document.createElement('button');
        b.class = 'food-bank-name';
        b.name = nameList[i].orgName;
        // on click it displays the food bank's details
        b.onclick = showDetails(nameList[i]);
        document.getElementById('food-banks-here').appendChild(b);
    }

    


// export function success(position) {
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;
//     nameList = geoToList(latitude, longitude);
//     // redirect to other html file
//     location.href = "listOfFoodBanks.html"

//     // put data on other html file
//     for (var i = 0; i < nameList.length; i++) {
//         // add button with ID name nameList[i]
//         var b = document.createElement('button');
//         b.class = 'food-bank-name';
//         b.name = nameList[i].orgName;
//         // on click it displays the food bank's details
//         b.onclick = showDetails(nameList[i]);
//     }
// }
}

export function error(geoError) {
    console.log("error: could not get location");
}  

export function parseResponse() {
    pickup_day = document.getElementById('pickup-day');
    getLocation();
}
document.getElementById('response-parse-button').addEventListener('click', parseResponse);



export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else { 
   console.log("Geolocation is not supported by this browser.");
  }
}

export function showDetails(thisFoodBank) {
    /*
    redirect to another html page where we will show the details 
    of this foodbank (name, pickup time range) along with a button
    "confirm pickup". This button will send the location of the user, organization id, and day
    to scheduleDonationPickup
    */
    location.href = "foodBankDetails.html";

    var div = document.createElement('div');
    
    var orgName = document.createTextNode(foodBank.getOrgName());
    var orgLocation = document.createTextNode(foodBank.getLocation());
    var orgAboutMe = document.createTextNode(foodBank.getAboutMe());
    var orgHours = NULL;
    switch(day) {
        case "Monday":
            orgHours = document.createTextNode(thisFoodBank.getHours().getMonday + " to " + thisFoodBank.getHours().getMonday[1]);
            break;
        case "Tuesday":
            orgHours = document.createTextNode(thisFoodBank.getHours().getTuesday + " to " + thisFoodBank.getHours().getTuesday[1]);
            break;
        case "Wednesday":
            orgHours = document.createTextNode(thisFoodBank.getHours().getWednesday + " to " + thisFoodBank.getHours().getWednesday[1]);
            break;
        case "Thursday":
            orgHours = document.createTextNode(thisFoodBank.getHours().getThursday + " to " + thisFoodBank.getHours().getThursday[1]);
            break;
        case "Friday":
            orgHours = document.createTextNode(thisFoodBank.getHours().getFriday + " to " + thisFoodBank.getHours().getFriday[1]);
            break;
        case "Saturday":
            orgHours = document.createTextNode(thisFoodBank.getHours().getSaturday + " to " + thisFoodBank.getHours().getSaturday[1]);
            break;
        case "Sunday":
            orgHours = document.createTextNode(thisFoodBank.getHours().getSunday + " to " + thisFoodBank.getHours().getSunday[1]);
            break;

    }

    var submit = document.createElement('button');
    submit.id = 'confirm-pickup';
    submit.name = 'Confirm Pickup';
    // submit.onclick = scheduleDonationPickup((latitude, longitude), orgName, day)
    submit.onclick = console.log("SUCCESS");

    div.appendChild(orgName);
    div.appendChild(orgLocation);
    div.appendChild(orgAboutMe);
    div.appendChild(orgHours);
    div.appendChild(submit);
}


// get location + other stuff

