import axios from "axios";
import { config } from "../../config";

const getAllOrders = async () => {
  const response = await axios.get(config.BASE_URL + "user/order/all", {
    headers: {
      Authorization: "Bearer ".concat(
        JSON.parse(localStorage.getItem("accessToken"))
      ),
    },
  });
  console.log("response", response);
  return response.data;
};

const orderService = {
  getAllOrders,
};

export default orderService;
