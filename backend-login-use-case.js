import * as backendClasses from './backend-classes.js';
// import './backend-login.js'; 

let foodBanks = []; // list of all food banks as FoodBank instances
let logInDataBase = new Map(); // the key is the username, value is the password 
let scheduledDonations = {};

/*
* input should come in the form of an array, like so:
* ['DayOfWeek', true/false, startTime, endTime]
* DayOfWeek -- the first letter **must** be capitalized. The rest **must** be lowercase
* true/false is if the day is in operation
* startTime/endTime must be strings (e.g. "11:26am"). Can be null if above is false
*/
class signUp {
    signUpValidation(username, password1, password2) {
        if (username in logInDataBase)
            return 3
        if (!hasLowerCase(password1) || !hasUpperCase(password1) || !(/\d/.test(password1)) || password1.length < 6 || password1.length > 15)
            return 2
        if (password2 != password1)
            return 1
    
        logInDataBase.set(username, password1)
        let foodBank = new backendClasses.FoodBank(username, password1)
        foodBanks.push(foodBank)
        return 0
    }

    setUpInfo(username, orgName, location, daysTimes, about) {
        for (foodBank in foodBanks) {
            if (foodBank.username == username) {
                foodBank.setOrgName(orgName);
                foodBank.setLocation(location);
                foodBank.setAbout(about);
                // set days and hours of operation
                hours = new backendClasses.OperationHours()
                for (date in daysTimes) {
                    day = date[0]
                    dayValues = [date[1], date[2], date[3]]
                    hours.setDay(day, dayValues)
                }
                foodBank.setHours(hours)
            }
        }
    }
}

// class latLongToAddress(lat, long) {
//     var geocoder  = new google.maps.Geocoder();             // create a geocoder object
//     var location  = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);    // turn coordinates into an object          
//     geocoder.geocode({'latLng': location}, function (results, status) {
//     if(status == google.maps.GeocoderStatus.OK) {           // if geocode success
//     var add=results[0].formatted_address;         // if address found, pass to processing function
//     document.write(add);
// }

class logIn {
    verifyLogIn(organizationID, password) {
        if (!(organizationID in logInDictionary)) {
            return 1;
        } if (logInDictionary[organizationID] != password) {
            return 1;
        } else {
            return 0;
        }
    }

    compare(a,b) {
        if (a.getDistanceFrom < b.getDistanceFrom)
            return -1;
        if (a.getDistanceFrom > b.getDistanceFrom)
            return 1;
        return 0;
    }

    accessScheduledDonations(foodBank) {
        let scheduledOrgDonations = [];
        for (donation in scheduledDonations) {
            if (donation.getUsername == foodBank.getUsername) {
                if (donation.getPickedUp == false) {
                    //get distance
                    latLong = []
                    latLong.push(foodBank.getLat)
                    latLong.push(foodBank.getLong)
                    donation.setDistanceFrom(latLong)

                    scheduledOrgDonations.push(donation);
                }
            }
        }
        //sort scheduledOrganizations by distance          
        scheduledOrgDonations.sort(compare);

        return scheduledOrgDonations;
    }

    changeDonationStatus(donation, pickedUp) {
        donation.setPickedUp(pickedUp);
    }
}

class scheduleDonation{
    scheduleNewDonation(organizationID, day) {
        let newDonation = new backendClasses.donationApplication();
        newDonation.organizationID = organizationID;
        newDonation.day = day;
        newDonation.location = (-79.4259, 43.7512);
        scheduledDonations.push(newDonation);
    }
}