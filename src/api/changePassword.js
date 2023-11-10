import { http } from "../api/http";

export const apiChangePass = {
    // getFooterData: (params) => {
    //     return http.get("datafooter/getdatafooter", { params });
    // },
    // createTour: (body) => {
    //     return http.post("tour/newtour", body)
    // },
    // deleteTour: (id) => {
    //     return http.delete(`tour/deletetour/${id}`)
    // },
    updatePassword: (body) => {
        return http.put(`user/change-password/${body.userName}`, body)
    },
};
