import { http } from "../api/http";

export const apiCategory = {
    getAllBlog: (params) => {
        if (!params) {
            return http.get("blog/getPaginationBlog");
        }
        return http.get("blog/getPaginationBlog", { params });
    },
    createBlog: (body) => {
        return http.post("blog/newblog", body)
    },
    deleteTour: (id) => {
        return http.delete(`blog/deleteblog/${id}`)
    },
    updateBlog: (id, body) => {
        return http.put(`blog/updateBlog/${id}`, body)
    },
    hotTour: (body) => {
        return http.post('tour/postRecommentTour', body)
    }
};
