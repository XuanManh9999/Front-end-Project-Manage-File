import React, { useState, useEffect } from "react";
import styles from "./ForgotPassword.module.scss";
import { Link } from "react-router-dom";
import { Input, Button, Modal } from "antd";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub, FaGoogle } from "react-icons/fa";
import classNames from "classnames";
function ForgotPassword() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const onInput = (value) => {
    console.log("onInput:", value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };

  const handleForgotPassword = () => {
    setIsModalOpen(true);
  };

  const handleForgotPasswordClose = () => {
    setIsModalOpen(false);
  };

  const [timeLeft, setTimeLeft] = useState(90); // 90s đếm ngược

  useEffect(() => {
    if (!isModalOpen) {
      setTimeLeft(90); // Reset thời gian khi mở lại modal
      return;
    }

    if (timeLeft === 0) {
      handleForgotPasswordClose(); // Tự động đóng modal khi hết thời gian
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer); // Cleanup khi component unmount
  }, [isModalOpen, timeLeft, handleForgotPasswordClose]);

  return (
    <>
      <div className={styles.containner__forgotPassword}>
        <div className={styles.containner__forgotPassword__left}>
          <h1 className={styles.containner__forgotPassword__left__title}>
            Quên Mật Khẩu
          </h1>
          <div className={styles.containner__forgotPassword__left__form}>
            <div
              className={styles.containner__forgotPassword__left__form__item}>
              <label htmlFor="">Email</label>
              <Input
                className="h-10 px-3 py-2"
                placeholder="Nhập vào email..."
              />
            </div>
            <div
              className={classNames(
                styles.containner__forgotPassword__left__form__btnForgotPassword
              )}>
              <Button onClick={handleForgotPassword}>Quên Mật Khẩu</Button>
            </div>
          </div>
        </div>
        <div className={styles.containner__forgotPassword__center}>
          <strong className={styles.containner__forgotPassword__center__title}>
            Hoặc
          </strong>
        </div>
        <div className={styles.containner__forgotPassword__right}>
          <h2 className={styles.containner__forgotPassword__right__title}>
            Đăng nhập bằng
          </h2>
          <div className={styles.containner__forgotPassword__right__service}>
            <div
              className={classNames(
                styles.containner__forgotPassword__right__service__item,
                "bg-[var(--bg-facebook)]"
              )}>
              <IoLogoFacebook />
              <span
                className={
                  styles.containner__forgotPassword__right__service__item__title
                }>
                Facebook
              </span>
            </div>
            <div
              className={classNames(
                styles.containner__forgotPassword__right__service__item,
                "bg-[var(--bg-github)]"
              )}>
              <FaGithub />
              <span
                className={
                  styles.containner__forgotPassword__right__service__item__title
                }>
                Github
              </span>
            </div>
            <div
              className={classNames(
                styles.containner__forgotPassword__right__service__item,
                "bg-[var(--bg-google)]"
              )}>
              <FaGoogle />
              <span
                className={
                  styles.containner__forgotPassword__right__service__item__title
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
        onCancel={handleForgotPasswordClose}
        className="rounded-2xl p-6">
        <div className="flex flex-col items-center gap-4">
          <Input.OTP
            className="border border-gray-300 rounded-lg p-2 text-lg focus:ring-2 focus:ring-blue-500 w-full"
            {...sharedProps}
          />
          <p className="text-gray-600 text-sm">
            Mã OTP hết hạn sau:{" "}
            <span className="font-semibold text-red-500">{timeLeft}s</span>
          </p>
          <Button
            type="primary"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all">
            Xác nhận
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ForgotPassword;
