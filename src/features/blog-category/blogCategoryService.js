import axios from "axios";
import { config } from "../../config";

const getAllBlogCategorys = async () => {
  const response = await axios.get(config.BASE_URL + "blog-category/all", {
    headers: {
      Authorization: "Bearer ".concat(
        JSON.parse(localStorage.getItem("accessToken"))
      ),
    },
  });
  console.log("response", response);
  return response.data;
};

const blogCategoryService = {
  getAllBlogCategorys,
};

export default blogCategoryService;
