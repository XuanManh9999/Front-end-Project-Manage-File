import axios from "axios";

export const apiRegister = async (dataRegister) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/register",
      dataRegister
    );
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const apiVerifyOtpRegister = async (dataOtp) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/verify-otp-register",
      dataOtp
    );
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const apiForgotPassword = async (dataForgotPassword) => {
  try {
    const response = await axios.post(
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
    const response = await axios.post(
      "http://localhost:8080/auth/verify-otp-forgot-password",
      dataOtp
    );
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const apiLogin = async (dataLogin) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/access",
      dataLogin
    );
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const oauthLogin = async (dataLogin) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/oauth/login",
      dataLogin
    );
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
};
