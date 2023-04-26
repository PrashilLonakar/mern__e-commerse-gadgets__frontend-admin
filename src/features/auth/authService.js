import axios from "axios";
import { config } from "../../config";

const login = async (userData) => {
  console.log(config);
  const response = await axios.post(
    config.BASE_URL + "user/admin-login",
    userData
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("accessToken", JSON.stringify(response.data.token));
  }
  console.log(response.data);
  return response.data;
};

const authService = {
  login,
};

export default authService;
