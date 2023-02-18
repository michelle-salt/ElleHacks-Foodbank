// class user {
//     constructor(userID, password) {
//         this.userID = userID;
//         this.password = password;
//         this.name;
//         this.location;
//         this.donationScore;
//     }
// }

class foodBank {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.orgName;
        this.location;
        this.hours = operationHours();
        this.aboutMe;
    }

    get getUsername() {
        return this.username;
    }
    get getPassword() {
        return this.password;
    }
    get getOrgName() {
        return this.orgName;
    }
    get getLocation() {
        return this.location;
    }
    get getHours() {
        return this.hours;
    }
    get getAboutMe() {
        return this.aboutMe;
    }

    set setUsername(username) {
        this.username = username;
    }
    set setPassword(password) {
        this.password = password;
    }
    set setOrgName(orgName) {
        this.orgName = orgName;
    }
    set setLocation(location) {
        this.location = location;
    }
    set setHours(hours) {
        this.hours = hours;
    }
    set setAboutMe(aboutMe) {
        this.aboutMe;
    }
}

class operationHours {
    constructor() {
        this.sunday = [false, null, null];
        this.monday = [false, null, null];
        this.tuesday = [false, null, null];
        this.wednesday = [false, null, null];
        this.thursday = [false, null, null];
        this.friday = [false, null, null];
        this.saturday = [false, null, null];
    }

    get getSunday() {
        return this.sunday[0];
    }
    get getMonday() {
        return this.monday[0];
    }
    get getTuesday() {
        return this.tuesday[0];
    }
    get getWednesday() {
        return this.wednesday[0];
    }
    get getThursday() {
        return this.thursday[0];
    }
    get getFriday() {
        return this.friday[0];
    }
    get getSaturday() {
        return this.saturday[0];
    }

    set setSunday([collecting, start, end]) {
        this.sunday = [collecting, start, end];
    }
    set setMonday([collecting, start, end]) {
        this.monday = [collecting, start, end];
    }
    set setTuesday([collecting, start, end]) {
        this.tuesday = [collecting, start, end];
    }
    set setWednesday([collecting, start, end]) {
        this.wednesday = [collecting, start, end];
    }
    set setThursday([collecting, start, end]) {
        this.thursday = [collecting, start, end];
    }
    set setFriday([collecting, start, end]) {
        this.friday = [collecting, start, end];
    }
    set setSaturday([collecting, start, end]) {
        this.saturday = [collecting, start, end];
    }

    // day - day of collection
    // argc - argument count: if argument count is either 1 or 3
    // argv - argument variables: if argument count is 1, then argument variables are simply [false], other the argument variables are [truse, <start-time>, <end-time>]

    setDay(day, argc, argv) {
        if (day == 'Sunday') {
            if (argc == 1) {
                this.setSunday([false, null, null]);
            } else {
                this.setSunday([argv]);
            }
        } if (day == 'Monday') {
            if (argc == 1) {
                this.setMonday([false, null, null]);
            } else {
                this.setMonday(argv);
            }
        } if (day == 'Tuesday') {
            if (argc == 1) {
                this.setTuesday([false, null, null]);
            } else {
                this.setTuesday(argv);
            }
        } if (day == 'Wednesday') {
            if (argc == 1) {
                this.setWednesday([false, null, null]);
            } else {
                this.setWednesday(argv);
            }
        } if (day == 'Thursday') {
            if (argc == 1) {
                this.setThursday([false, null, null]);
            } else {
                this.setThursday(argv);
            }
        } if (day == 'Friday') {
            if (argc == 1) {
                this.setFriday([false, null, null]);
            } else {
                this.setFriday(argv);
            }
        } if (day == 'Saturday') {
            if (argc == 1) {
                this.setSaturday([false, null, null]);
            } else {
                this.setSaturday(argv);
            }
        }
    }
}

class donationApplication {
    constructor(location, organizationID, day) {
        this.location = location;
        this.organizationID = organizationID;
        this.day = day;
        this.pickedUp = false;
    }

    get getLocation() {
        return this.location;
    }
    get getOrganizationID() {
        return this.organizationID;
    }
    get getDay() {
        return this.day;
    }
    get getPickedUp() {
        return this.pickedUp;
    }

    set setLocation(location) {
        this.location = location;
    }
    set setOrganizationID(organizationID) {
        this.organizationID = organizationID;
    }
    set setDay(day) {
        this.day = day;
    }
    set setPickedUp(pickedUp) {
        this.pickedUp = pickedUp;
    }
}


