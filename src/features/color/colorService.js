import axios from "axios";
import { config } from "../../config";

const getAllColors = async () => {
  const response = await axios.get(config.BASE_URL + "color/all", {
    headers: {
      Authorization: "Bearer ".concat(
        JSON.parse(localStorage.getItem("accessToken"))
      ),
    },
  });
  console.log("response", response);
  return response.data;
};

const colorService = {
  getAllColors,
};

export default colorService;
