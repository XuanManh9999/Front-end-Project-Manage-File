import React from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub, FaGoogle } from "react-icons/fa";
import classNames from "classnames";
function Login() {
  return (
    <div className={styles.containner__login}>
      <div className={styles.containner__login__left}>
        <h1 className={styles.containner__login__left__title}>Đăng nhập</h1>
        <div className={styles.containner__login__left__form}>
          <div className={styles.containner__login__left__form__item}>
            <label htmlFor="">Tên người dùng</label>
            <Input
              className="h-10 px-3 py-2"
              placeholder="Nhập vào tên người dùng..."
            />
          </div>
          <div className={styles.containner__login__left__form__item}>
            <label htmlFor="">Mật khẩu</label>
            <Input.Password
              className="h-10 px-3 py-2"
              placeholder="Nhập vào mật khẩu..."
            />
          </div>
          <p className={styles.containner__login__left__form__forgot_pasword}>
            <Link>Quên mật khẩu?</Link>
          </p>
          <div
            className={classNames(
              styles.containner__login__left__form__btnLogin
            )}>
            <Button>Đăng Nhập</Button>
          </div>
        </div>
      </div>
      <div className={styles.containner__login__center}>
        <strong className={styles.containner__login__center__title}>
          Hoặc
        </strong>
      </div>
      <div className={styles.containner__login__right}>
        <h2 className={styles.containner__login__right__title}>
          Đăng nhập bằng
        </h2>
        <div className={styles.containner__login__right__service}>
          <div
            className={classNames(
              styles.containner__login__right__service__item,
              "bg-[var(--bg-facebook)]"
            )}>
            <IoLogoFacebook />
            <span
              className={styles.containner__login__right__service__item__title}>
              Facebook
            </span>
          </div>
          <div
            className={classNames(
              styles.containner__login__right__service__item,
              "bg-[var(--bg-github)]"
            )}>
            <FaGithub />
            <span
              className={styles.containner__login__right__service__item__title}>
              Github
            </span>
          </div>
          <div
            className={classNames(
              styles.containner__login__right__service__item,
              "bg-[var(--bg-google)]"
            )}>
            <FaGoogle />
            <span
              className={styles.containner__login__right__service__item__title}>
              Google
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
