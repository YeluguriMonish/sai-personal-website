import http from "../http-common.js";

class PostDataService {
  getAll(page = 0) {
    return http.get(`posts?page=${page}`);
  }

  get(id) {
    return http.get(`posts?id=${id}`);
  }

  find(query, by = "title", page = 0) {
    return http.get(`posts?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return http.post("/post-new", data);
  }

  updateReview(data) {
    return http.put("/post-edit", data);
  }

  deleteReview(id) {
    return http.delete(`/post-delete?id=${id}`, {});
  }
}

export default new PostDataService();
