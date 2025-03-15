import { apiUser } from "../config/User";

export const apiRegister = async (dataRegister) => {
  try {
    const response = await apiUser.post("/auth/register", dataRegister);
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const apiVerifyOtpRegister = async (dataOtp) => {
  try {
    const response = await apiUser.post("/auth/verify-otp-register", dataOtp);
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const apiForgotPassword = async (dataForgotPassword) => {
  try {
    const response = await apiUser.post(
      "/auth/forgot-password",
      dataForgotPassword
    );
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const apiVerifyOtpForgotPassword = async (dataOtp) => {
  try {
    const response = await apiUser.post(
      "/auth/verify-otp-forgot-password",
      dataOtp
    );
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const apiLogin = async (dataLogin) => {
  try {
    const response = await apiUser.post("/auth/access", dataLogin);
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const oauthLogin = async (dataLogin) => {
  try {
    const response = await apiUser.post("/auth/oauth/login", dataLogin);
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
};
