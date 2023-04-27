import axios from "axios";
import { config } from "../../config";

const getAllProducts = async () => {
  const response = await axios.get(config.BASE_URL + "product/all", {
    headers: {
      Authorization: "Bearer ".concat(
        JSON.parse(localStorage.getItem("accessToken"))
      ),
    },
  });
  console.log("response", response);
  return response.data;
};

const productService = {
  getAllProducts,
};

export default productService;
