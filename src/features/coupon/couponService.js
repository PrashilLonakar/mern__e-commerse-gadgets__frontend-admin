import axios from "axios";
import { config } from "../../config";

const getAllCoupons = async () => {
  const response = await axios.get(config.BASE_URL + "coupon/all", {
    headers: {
      Authorization: "Bearer ".concat(
        JSON.parse(localStorage.getItem("accessToken"))
      ),
    },
  });
  console.log("response", response);
  return response.data;
};

const couponService = {
  getAllCoupons,
};

export default couponService;
