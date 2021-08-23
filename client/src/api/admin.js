import axios from "axios";

export const getAllOrders = async () => {
  const response = await axios.get("/api/admin/getcourses");
  return response.data;
};
