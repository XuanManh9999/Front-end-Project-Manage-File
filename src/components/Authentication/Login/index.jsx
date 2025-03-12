import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub, FaGoogle } from "react-icons/fa";
import classNames from "classnames";
import { apiLogin } from "../../../services/auth-service";
import { showToast } from "../../../utils/toast";
import Cookies from "js-cookie";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../helper/filebase";

function Login() {
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleOnChangeLogin = (event) => {
    const { name, value } = event.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmidLogin = async () => {
    if (
      login.username === "" ||
      login.username.length < 6 ||
      login.password === "" ||
      login.password.length < 6
    ) {
      showToast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    setLoadingLogin(true);
    const response = await apiLogin(login);

    if (response?.status === 200) {
      const { accessToken, refreshToken } = response;
      Cookies.set("accessToken", accessToken, { expires: 1 / 24 }); // 1 giờ
      Cookies.set("refreshToken", refreshToken, { expires: 14 }); // 14 ngày
      setLoadingLogin(false);
      showToast.success("Đăng nhập thành công");
    } else {
      showToast.error("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin");
    }
    setLoadingLogin(false);
    setLogin({
      username: "",
      password: "",
    });
  };

  const handleLoginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoginGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              name="username"
              value={login.username}
              onChange={handleOnChangeLogin}
            />
          </div>
          <div className={styles.containner__login__left__form__item}>
            <label htmlFor="">Mật khẩu</label>
            <Input.Password
              className="h-10 px-3 py-2"
              placeholder="Nhập vào mật khẩu..."
              name="password"
              value={login.password}
              onChange={handleOnChangeLogin}
            />
          </div>
          <p className={styles.containner__login__left__form__forgot_pasword}>
            <Link to={"/forgot-password"}>Quên mật khẩu?</Link>
          </p>
          <div
            className={classNames(
              styles.containner__login__left__form__btnLogin
            )}>
            <Button onClick={handleSubmidLogin}>Đăng Nhập</Button>
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
              "bg-[var(--bg-github)]"
            )}
            onClick={handleLoginGithub}>
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
            )}
            onClick={handleLoginGoogle}>
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
