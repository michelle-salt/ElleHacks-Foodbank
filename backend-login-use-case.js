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
