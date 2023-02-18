let logInDataBase = new Map(); // the key is the organization 

class logIn{
    verifyLogIn(organizationID, password) {
        if (!(organizationID in logInDataBase)) {
            return 1;
        } if (logInDataBase[organizationID] != password) {
            return 1;
        } else {
            return 0;
        }
    }

    accessScheduledDonations
}
