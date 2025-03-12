import React, { useState, useEffect } from "react";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";
import { Input, Button, Modal } from "antd";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub, FaGoogle } from "react-icons/fa";
import classNames from "classnames";
import { validateEmail } from "../../../utils/regex";
import { showToast } from "../../../utils/toast";
import {
  apiRegister,
  apiVerifyOtpRegister,
} from "../../../services/auth-service";
function Register() {
  const [isLoadingRegister, setIsLoadingRegister] = useState(false);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [register, setRegister] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onChange = (text) => {
    setOtp(text);
  };
  const sharedProps = {
    onChange,
  };

  const handleOnChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegisterModalClose = () => {
    setIsModalOpen(false);

    setRegister({
      email: "",
      username: "",
      password: "",
    });
  };

  const [timeLeft, setTimeLeft] = useState(90); // 90s đếm ngược

  useEffect(() => {
    if (!isModalOpen) {
      setTimeLeft(90); // Reset thời gian khi mở lại modal
      return;
    }

    if (timeLeft === 0) {
      handleRegisterModalClose(); // Tự động đóng modal khi hết thời gian
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer); // Cleanup khi component unmount
  }, [isModalOpen, timeLeft, handleRegisterModalClose]);

  const handleRegister = async () => {
    if (!validateEmail(register.email)) {
      showToast.error("Email không hợp lệ");
      return;
    }
    if (register.username === "" || register.username.length < 6) {
      showToast.error(
        "Tên người dùng không hợp lệ. Tên người dùng tối thiểu 6 ký tự"
      );
      return;
    }
    if (register.password === "" || register.password.length < 6) {
      showToast.error("Mật khẩu không hợp lệ. Mật khẩu tối thiểu 6 ký tự");
      return;
    }
    setIsLoadingRegister(true);

    const response = await apiRegister(register);
    if (response?.status === 200) {
      showToast.success(
        "Gửi yêu cầu đăng ký thành công. Vui lòng kiểm tra email để lấy mã OTP và xác nhận tài khoản"
      );
      setIsLoadingRegister(false);

      setIsModalOpen(true);
    } else {
      showToast.error(response?.message);
    }
    setIsLoadingRegister(false);
  };

  const handleSubmidRegisterOTP = async () => {
    if (otp === "" || otp.length < 6) {
      showToast.error("Mã OTP không hợp lệ");
      return;
    }
    setIsLoadingModal(true);
    const dataOtp = {
      email: register.email,
      otp: otp,
    };
    const response = await apiVerifyOtpRegister(dataOtp);
    if (response?.status === 200) {
      showToast.success("Xác nhận tài khoản thành công");
      setIsModalOpen(false);
    } else {
      showToast.error(response?.message);
    }

    setRegister({
      email: "",
      username: "",
      password: "",
    });
    setIsLoadingModal(false);
  };

  return (
    <>
      <div className={styles.containner__register}>
        <div className={styles.containner__register__left}>
          <h1 className={styles.containner__register__left__title}>Đăng Ký</h1>
          <div className={styles.containner__register__left__form}>
            <div className={styles.containner__register__left__form__item}>
              <label htmlFor="">Email</label>
              <Input
                name="email"
                className="h-10 px-3 py-2"
                placeholder="Nhập vào email..."
                onChange={handleOnChangeRegister}
                value={register.email}
              />
            </div>
            <div className={styles.containner__register__left__form__item}>
              <label htmlFor="">Tên người dùng</label>
              <Input
                name="username"
                className="h-10 px-3 py-2"
                placeholder="Nhập vào tên người dùng..."
                onChange={handleOnChangeRegister}
                value={register.username}
              />
            </div>
            <div className={styles.containner__register__left__form__item}>
              <label htmlFor="">Mật khẩu</label>
              <Input.Password
                name="password"
                className="h-10 px-3 py-2"
                placeholder="Nhập vào mật khẩu..."
                onChange={handleOnChangeRegister}
                value={register.password}
              />
            </div>
            <p
              className={
                styles.containner__register__left__form__forgot_pasword
              }>
              <Link to={"/forgot-password"}>Quên mật khẩu?</Link>
            </p>
            <div
              className={classNames(
                styles.containner__register__left__form__btnLogin
              )}>
              <Button loading={isLoadingRegister} onClick={handleRegister}>
                Đăng Ký
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.containner__register__center}>
          <strong className={styles.containner__register__center__title}>
            Hoặc
          </strong>
        </div>
        <div className={styles.containner__register__right}>
          <h2 className={styles.containner__register__right__title}>
            Đăng nhập bằng
          </h2>
          <div className={styles.containner__register__right__service}>
            <div
              className={classNames(
                styles.containner__register__right__service__item,
                "bg-[var(--bg-github)]"
              )}>
              <FaGithub />
              <span
                className={
                  styles.containner__register__right__service__item__title
                }>
                Github
              </span>
            </div>
            <div
              className={classNames(
                styles.containner__register__right__service__item,
                "bg-[var(--bg-google)]"
              )}>
              <FaGoogle />
              <span
                className={
                  styles.containner__register__right__service__item__title
                }>
                Google
              </span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title={
          <h2 className="text-xl font-semibold text-gray-800">
            Nhập vào mã OTP
          </h2>
        }
        centered
        footer={null}
        open={isModalOpen}
        onCancel={handleRegisterModalClose}
        className="rounded-2xl p-6">
        <div className="flex flex-col items-center gap-4">
          <Input.OTP
            className="border border-gray-300 rounded-lg p-2 text-lg focus:ring-2 focus:ring-blue-500 w-full"
            {...sharedProps}
            value={otp}
          />
          <p className="text-gray-600 text-sm">
            Mã OTP hết hạn sau:{" "}
            <span className="font-semibold text-red-500">{timeLeft}s</span>
          </p>
          <Button
            loading={isLoadingModal}
            type="primary"
            onClick={handleSubmidRegisterOTP}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all">
            Xác nhận
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Register;
