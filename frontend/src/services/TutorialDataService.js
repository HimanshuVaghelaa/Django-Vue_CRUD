import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/REST_Apis");
  }

  get(id) {
    return http.get(`/REST_Apis/${id}`);
  }

  create(data) {
    return http.post("/REST_Apis", data);
  }

  update(id, data) {
    return http.put(`/REST_Apis/${id}`, data);
  }

  delete(id) {
    return http.delete(`/REST_Apis/${id}`);
  }

  deleteAll() {
    return http.delete(`/REST_Apis`);
  }

  findByTitle(title) {
    return http.get(`/REST_Apis?title=${title}`);
  }
}

export default new TutorialDataService();
