// class user {
//     constructor(userID, password) {
//         this.userID = userID;
//         this.password = password;
//         this.name;
//         this.location;
//         this.donationScore;
//     }
// }

export default class foodBank {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.orgName;
        this.location;
        this.lat;
        this.long;
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
    get getLat() {
        return this.lat;
    }
    get getLong() {
        return this.long;
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
    set setLat(lat) {
        this.lat = lat;
    }
    set setLong(long) {
        this.long = long;
    }
    set setHours(hours) {
        this.hours = hours;
    }
    set setAboutMe(aboutMe) {
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

export class donationApplication {
    constructor(lat, long, organizationID, day) {
        this.lat = lat;
        this.long = long;
        this.organizationID = organizationID;
        this.day = day;
        this.pickedUp = false;
        this.distanceFrom;
    }

    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
      
    distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
        var earthRadiusKm = 6371;
      
        var dLat = degreesToRadians(lat2-lat1);
        var dLon = degreesToRadians(lon2-lon1);
      
        lat1 = degreesToRadians(lat1);
        lat2 = degreesToRadians(lat2);
      
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      
        return earthRadiusKm * c;
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
    get getDistanceFrom() {
        return this.distanceFrom;
    }
    get getLat() {
        return this.lat;
    }
    get getLong() {
        return this.long;
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



