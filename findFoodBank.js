
import * as backendClasses from './backend-classes.js';
import * as  backendUseCases from './backend-login-use-case.js';

var nameList;
var latitude;
var longitude;
var pickup_day;

// dummy data

// food bank
var testFoodBank = new backendClasses.foodBank("gracefung", "mypassword");
console.log(testFoodBank)
testFoodBank.setOrgName("Grace's organization");
testFoodBank.setLocation(("43.77377887675926", "-79.50191131533997"));
var testOperationHours = testFoodBank.getHours();
testOperationHours.setSunday([true, "11:26 AM", "5:00 PM"]);
testOperationHours.setMonday([false, "11:26 AM", "5:00 PM"]);
testOperationHours.setTuesday([true, "11:26 AM", "5:00 PM"]);
testOperationHours.setWednesday([false, "10:26 AM", "5:00 PM"]);
testOperationHours.setThursday([true, "11:26 AM", "5:00 PM"]);
testOperationHours.setFriday([false, "11:26 AM", "5:00 PM"]);
testOperationHours.setSaturday([true, "11:26 AM", "6:00 PM"]);
testFoodBank.setHours(testOperationHours);
////////////////
pickup_day = "Monday";


// dummy success:
export function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    nameList = [testFoodBank];
    // redirect to other html file
    location.href = "listOfFoodBanks.html";
    

    // put data on other html file
    for (var i = 0; i < nameList.length; i++) {
        // add button with ID name nameList[i]
        var b = document.createElement('button');
        b.class = 'food-bank-name';
        b.name = nameList[i].orgName;
        // on click it displays the food bank's details
        b.onclick = showDetails(nameList[i]);
    }
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

export function error(geoError) {
    console.log("error: could not get location");
}  

const parseLocation = () => {
    pickup_day = document.getElementById('pickup-day');
    getLocation();
}

export {parseLocation};

export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else { 
   console.log("Geolocation is not supported by this browser.");
  }
}

export function showDetails(foodBank) {
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
            orgHours = document.createTextNode(foodBank.getHours().getMonday + " to " + foodBank.getHours().getMonday[1]);
            break;
        case "Tuesday":
            orgHours = document.createTextNode(foodBank.getHours().getTuesday + " to " + foodBank.getHours().getTuesday[1]);
            break;
        case "Wednesday":
            orgHours = document.createTextNode(foodBank.getHours().getWednesday + " to " + foodBank.getHours().getWednesday[1]);
            break;
        case "Thursday":
            orgHours = document.createTextNode(foodBank.getHours().getThursday + " to " + foodBank.getHours().getThursday[1]);
            break;
        case "Friday":
            orgHours = document.createTextNode(foodBank.getHours().getFriday + " to " + foodBank.getHours().getFriday[1]);
            break;
        case "Saturday":
            orgHours = document.createTextNode(foodBank.getHours().getSaturday + " to " + foodBank.getHours().getSaturday[1]);
            break;
        case "Sunday":
            orgHours = document.createTextNode(foodBank.getHours().getSunday + " to " + foodBank.getHours().getSunday[1]);
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

