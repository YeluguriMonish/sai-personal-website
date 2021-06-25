import PostsDAO from "../dao/postsDAO.js";

export default class PostsController {
  static async apiGetPosts(req, res, next) {
    const postsPerPage = req.query.postsPerPage
      ? parseInt(req.query.postsPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.gist) {
      filters.gist = req.query.gist;
    } else if (req.query.category) {
      filters.category = req.query.category;
    }

    const { postsList, totalNumPosts } = await PostsDAO.getPosts({
      filters,
      page,
      postsPerPage,
    });

    let response = {
      posts: postsList,
      page: page,
      filters: filters,
      entries_per_page: postsPerPage,
      total_results: totalNumPosts,
    };
    res.json(response);
  }
}
