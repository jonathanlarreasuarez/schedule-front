import axios from "axios";
export default axios.create({
    baseURL: "http://schedules-api.test/api/v1",
    headers: { "Content-type": "application/json" },
});
