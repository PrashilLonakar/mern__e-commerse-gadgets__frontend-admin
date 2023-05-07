import axios from "axios";
import { config } from "../../config";

const getAllBlogs = async () => {
  const response = await axios.get(config.BASE_URL + "blog/all", {
    headers: {
      Authorization: "Bearer ".concat(
        JSON.parse(localStorage.getItem("accessToken"))
      ),
    },
  });
  console.log("response", response);
  return response.data;
};

const blogService = {
  getAllBlogs,
};

export default blogService;
