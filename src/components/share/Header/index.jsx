import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { BsQuestionCircle } from "react-icons/bs";
import { FaLanguage, FaChevronDown, FaCloudUploadAlt } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import classNames from "classnames";
function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.header__nav}>
        <li className={styles.header__nav__item}>
          <BsQuestionCircle />
          <Link>Giới thiệu</Link>
        </li>
        <li className={styles.header__nav__item}>
          <FaLanguage />
          <Link>
            VI <FaChevronDown />
          </Link>
        </li>
        <li className={classNames(styles.header__nav__item, "flex-1")}>
          <Link>
            <img src="https://simgbb.com/images/logo.png" alt="Logo" />
          </Link>
        </li>
        <li className={styles.header__nav__item}>
          <FaCloudUploadAlt />
          <Link>Upload</Link>
        </li>
        <li className={styles.header__nav__item}>
          <LuLogIn />
          <Link to={"/login"}>Đăng nhập</Link>
        </li>
        <li className={styles.header__nav__item}>
          <Link
            to={"/register"}
            className="h-[32px] w-[80px] text-[#fff] bg-[#23a8e0] rounded-xs hover:opacity-80 transition-opacity duration-300">
            Đăng Ký
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
