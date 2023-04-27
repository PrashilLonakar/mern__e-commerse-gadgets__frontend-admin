import axios from "axios";
import { config } from "../../config";

const getAllCategories = async () => {
  const response = await axios.get(config.BASE_URL + "category/all", {
    headers: {
      Authorization: "Bearer ".concat(
        JSON.parse(localStorage.getItem("accessToken"))
      ),
    },
  });
  console.log("response", response);
  return response.data;
};

const categoryService = {
  getAllCategories,
};

export default categoryService;
