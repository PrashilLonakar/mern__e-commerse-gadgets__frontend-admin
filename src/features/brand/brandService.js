import axios from "axios";
import { config } from "../../config";

const getAllBrands = async () => {
  const response = await axios.get(config.BASE_URL + "brand/all", {
    headers: {
      Authorization: "Bearer ".concat(
        JSON.parse(localStorage.getItem("accessToken"))
      ),
    },
  });
  console.log("response", response);
  return response.data;
};

const brandService = {
  getAllBrands,
};

export default brandService;
