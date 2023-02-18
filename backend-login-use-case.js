let foodBanks = []; // list of all food banks as FoodBank instances
let logInDataBase = new Map(); // the key is the username, value is the password 

class signUpValidation(username, password1, password2) => {
    if (username in logInDataBase)
        return 3
    if (!hasLowerCase(password1) || !hasUpperCase(password1) || !(/\d/.test(password1)))
        return 2
    if (password2 != password1)
        return 1
    return 0
}

class logIn{
    verifyLogIn(organizationID, password) {
        if (!(organizationID in logInDictionary)) {
            return 1;
        } if (logInDictionary[organizationID] != password) {
            return 1;
        } else {
            return 0;
        }
    }

    accessScheduledDonations(organizationID) {
        let scheduledOrgDonations = [];
        for (donation in scheduledDonations) {
            if (donation.getOrganizationID == organizationID) {
                if (donation.getPickedUp == false){
                    scheduledOrgDonations.push(donation);
                }
            }
        }
        return scheduledOrgDonations;
    }

    changeDonationStatus(donation, pickedUp) {
        donation.setPickedUp(pickedUp);
    }
}
