import http from "../http-common";

class RouteDataService {
    getAll() {
        return http.get("/routes");
    }

    getCalendarDays(id) {
        return http.get("/routes/" + id + "/calendar");
    }
}

export default new RouteDataService();
