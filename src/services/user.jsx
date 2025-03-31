import { apiUser } from "../config/User";
export const getCurrentUser = async () => {
  try {
    const response = await apiUser.get("/api/v1/user/current");
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
};
