import axios from "axios";
import { config } from "../../config";

const getAllUsers = async () => {
  const response = await axios.get(config.BASE_URL + "user/all", {
    headers: {
      Authorization: "Bearer ".concat(
        JSON.parse(localStorage.getItem("accessToken"))
      ),
    },
  });
  return response.data?.getUsers;
};

const customerService = {
  getAllUsers,
};

export default customerService;
