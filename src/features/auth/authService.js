import axios from "axios";
import { config } from "../../config";

const configs = {
  headers: {
    Authorization: "Bearer ".concat(
      JSON.parse(localStorage.getItem("accessToken"))
    ),
    Accept: "application/json",
  },
};

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

const getAllOrders = async () => {
  const response = await axios.get(config.BASE_URL + "user/order/all", configs);
  console.log("response", response);
  return response.data;
};

const authService = {
  login,
  getAllOrders,
};

export default authService;
