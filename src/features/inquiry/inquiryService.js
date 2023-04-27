import axios from "axios";
import { config } from "../../config";

const getAllInquirys = async () => {
  const response = await axios.get(config.BASE_URL + "inquiry/all", {
    headers: {
      Authorization: "Bearer ".concat(
        JSON.parse(localStorage.getItem("accessToken"))
      ),
    },
  });
  console.log("response", response);
  return response.data;
};

const inquiryService = {
  getAllInquirys,
};

export default inquiryService;
