import axios from "axios";
import Cookies from "js-cookie";
const apiUser = axios.create({
  baseURL: "http://localhost:8080",
});

apiUser.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Thêm token vào headers
    }
    return config; // Trả về config để tiếp tục request
  },
  (error) => {
    return Promise.reject(error); // Xử lý lỗi trước khi gửi request
  }
);

// Add a response interceptor để xử lý khi token hết hạn hoặc không hợp lệ
apiUser.interceptors.response.use(
  (response) => {
    return response; // Trả về kết quả nếu thành công
  },
  (error) => {
    // Kiểm tra nếu lỗi là do token hết hạn hoặc không hợp lệ
    if (error.response && error.response.status === 401) {
      Cookies.remove("accessToken"); // Xóa token khỏi cookie
      Cookies.remove("refreshToken"); // Xóa refresh token khỏi cookie
      window.location.href = ""; // Chuyển hướng về trang login
    }
    return Promise.reject(error); // Trả về lỗi để xử lý tiếp
  }
);

export { apiUser };
