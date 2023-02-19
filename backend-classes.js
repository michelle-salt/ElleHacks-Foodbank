// class user {
//     constructor(userID, password) {
//         this.userID = userID;
//         this.password = password;
//         this.name;
//         this.location;
//         this.donationScore;
//     }
// }

export class foodBank {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.orgName = "bad";
        this.location;
        this.hours = new operationHours();
        this.aboutMe;
    }

    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getOrgName() {
        return this.orgName;
    }
    getLocation() {
        return this.location;
    }
    getHours() {
        return this.hours;
    }
    getAboutMe() {
        return this.aboutMe;
    }

    setUsername(username) {
        this.username = username;
    }
    setPassword(password) {
        this.password = password;
    }
    setOrgName(orgName) {
        this.orgName = orgName;
    }
    setLocation(location) {
        this.location = location;
    }
    setHours(hours) {
        this.hours = hours;
    }
    setAboutMe(aboutMe) {
        this.aboutMe;
    }
}

export class operationHours {
    constructor() {
        this.sunday = [false, null, null];
        this.monday = [false, null, null];
        this.tuesday = [false, null, null];
        this.wednesday = [false, null, null];
        this.thursday = [false, null, null];
        this.friday = [false, null, null];
        this.saturday = [false, null, null];
    }

    getSunday() {
        return this.sunday;
    }
    getMonday() {
        return this.monday;
    }
    getTuesday() {
        return this.tuesday;
    }
    getWednesday() {
        return this.wednesday;
    }
    getThursday() {
        return this.thursday;
    }
    getFriday() {
        return this.friday;
    }
    getSaturday() {
        return this.saturday;
    }

    setSunday([collecting, start, end]) {
        this.sunday = [collecting, start, end];
    }
    setMonday([collecting, start, end]) {
        this.monday = [collecting, start, end];
    }
    setTuesday([collecting, start, end]) {
        this.tuesday = [collecting, start, end];
    }
    setWednesday([collecting, start, end]) {
        this.wednesday = [collecting, start, end];
    }
    setThursday([collecting, start, end]) {
        this.thursday = [collecting, start, end];
    }
    setFriday([collecting, start, end]) {
        this.friday = [collecting, start, end];
    }
    setSaturday([collecting, start, end]) {
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

export class donationApplication {
    constructor(lat, long, organizationID, day) {
        this.lat = lat;
        this.long = long;
        this.organizationID = organizationID;
        this.day = day;
        this.pickedUp = false;
        this.distanceFrom;
    }

    getLocation() {
        return this.location;
    }
    getOrganizationID() {
        return this.organizationID;
    }
    getDay() {
        return this.day;
    }
    getPickedUp() {
        return this.pickedUp;
    }

    setLocation(location) {
        this.location = location;
    }
    setOrganizationID(organizationID) {
        this.organizationID = organizationID;
    }
    setDay(day) {
        this.day = day;
    }
    setPickedUp(pickedUp) {
        this.pickedUp = pickedUp;
    }
    set setLat(lat) {
        this.lat = lat;
    }
    set setLong(long) {
        this.long = long;
    }
    set setDistanceFrom(latLong) {
        this.distanceFrom = distanceInKmBetweenEarthCoordinates(latLong[0], latLong[1], this.lat, this.long);
    }
}



