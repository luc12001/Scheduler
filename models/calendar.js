const Availability = require("./availability");
const Appointment = require("./appointment");


//Calendar Object

//For not: Date.toDateString()
//{DateString: [Appointment1, Appointment]}
class AppointmentCalendar {
    days = {};

    constructor(appointments) {
        for (appointment of appointments) {
            this.add(appointment)
        }
    }

    add(newAppoint) {
        let appointDay = newAppoint.startTime;

        if (days[appointDay] === undefined) {
            days[appointDay] = [newAppoint];
        } else {
            days[appointDay].push(newAppoint);
        }
    }
}

class AvailabilityCalendar {
    days = {};

    constructor(Availabilities) {
        for (availability of availabilities) {
            this.add(availability)
        }
    }

    add(newAvail) {
        let availDay = newavail.startTime;

        if (days[availDay] === undefined) {
            days[availDay] = [newAvail];
        } else {
            days[availDay].push(newAvail);
        }
    }

}