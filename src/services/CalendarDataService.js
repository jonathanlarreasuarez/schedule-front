import http from "../http-common";

class CalendarDataService {
    getCalendarDates(start_date, end_date) {
        let parameters = '?start_date=' + start_date
        if(end_date !== null){
            parameters = parameters + '&end_date=' + end_date;
        }
        return http.get("/calendar-dates" + parameters);
    }
}

export default new CalendarDataService();
