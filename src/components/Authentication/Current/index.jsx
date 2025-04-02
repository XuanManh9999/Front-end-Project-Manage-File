import React from "react";
import styles from "./Current.module.scss";
import { Button } from "antd";
import classNames from "classnames";
import FileViewer from "../../share/FileViewer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../../../redux/slice/userSlice";

function Current() {
  const isLogin = useSelector(selectIsLogin);
  const nav = useNavigate();
  const handleStartNow = () => {
    if (isLogin) {
      nav("/collection");
    } else {
      nav("/login");
    }
  };

  return (
    <>
      <div className={styles.current__container}>
        <h1 className={styles.current__container__title}>
          Quản lý tất cả tài liệu của bạn theo cách đơn giản
        </h1>
        <p className={styles.current__container__desc}>
          Drag and drop anywhere you want and start uploading your images now.
          32 MB limit. Direct image links, BBCode and HTML thumbnails.
        </p>
        <Button
          onClick={handleStartNow}
          className={styles.current__container__btn_start_now}>
          Bắt đầu ngay
        </Button>
        <div className={styles.current__container__option_pro}>
          <h1 className={styles.current__container__title}>
            ImgBB Pro account
          </h1>
          <p className={styles.current__container__desc}>
            ImgBB is a free image hosting service. Upgrade to unlock all the
            features.
          </p>
          <div className={styles.current__container__option_pro__pakage}>
            <div
              className={styles.current__container__option_pro__pakage__item}>
              <p
                className={
                  styles.current__container__option_pro__pakage__item_time
                }>
                3 YEAR PRO
              </p>
              <strong
                className={
                  styles.current__container__option_pro__pakage__item__price
                }>
                2.99$/month
              </strong>
              <p
                className={
                  styles.current__container__option_pro__pakage__item_desc
                }>
                3 years of unlimited image, file hosting, no ads and no limits.
              </p>
              <Button
                className={
                  styles.current__container__option_pro__pakage__item_btn
                }>
                Upgrade to Pro
              </Button>
              <ul
                className={
                  styles.current__container__option_pro__pakage__item__fuc
                }>
                <li
                  className={
                    styles.current__container__option_pro__pakage__item__fuc__title
                  }>
                  No Ads
                </li>
                <li
                  className={
                    styles.current__container__option_pro__pakage__item__fuc__title
                  }>
                  Direct Linking
                </li>
                <li
                  className={
                    styles.current__container__option_pro__pakage__item__fuc__title
                  }>
                  Unlimited Storage
                </li>
                <li
                  className={
                    styles.current__container__option_pro__pakage__item__fuc__title
                  }>
                  Replace image feature
                </li>
              </ul>
            </div>
            <div
              className={styles.current__container__option_pro__pakage__item}>
              <p
                className={
                  styles.current__container__option_pro__pakage__item_time
                }>
                3 YEAR PRO
              </p>
              <strong
                className={
                  styles.current__container__option_pro__pakage__item__price
                }>
                2.99$/month
              </strong>
              <p
                className={
                  styles.current__container__option_pro__pakage__item_desc
                }>
                3 years of unlimited image, file hosting, no ads and no limits.
              </p>
              <Button
                className={
                  styles.current__container__option_pro__pakage__item_btn
                }>
                Upgrade to Pro
              </Button>
              <ul
                className={
                  styles.current__container__option_pro__pakage__item__fuc
                }>
                <li
                  className={
                    styles.current__container__option_pro__pakage__item__fuc__title
                  }>
                  No Ads
                </li>
                <li
                  className={
                    styles.current__container__option_pro__pakage__item__fuc__title
                  }>
                  Direct Linking
                </li>
                <li
                  className={
                    styles.current__container__option_pro__pakage__item__fuc__title
                  }>
                  Unlimited Storage
                </li>
                <li
                  className={
                    styles.current__container__option_pro__pakage__item__fuc__title
                  }>
                  Replace image feature
                </li>
              </ul>
            </div>
            <div
              className={styles.current__container__option_pro__pakage__item}>
              <p
                className={
                  styles.current__container__option_pro__pakage__item_time
                }>
                3 YEAR PRO
              </p>
              <strong
                className={
                  styles.current__container__option_pro__pakage__item__price
                }>
                2.99$/month
              </strong>
              <p
                className={
                  styles.current__container__option_pro__pakage__item_desc
                }>
                3 years of unlimited image, file hosting, no ads and no limits.
              </p>
              <Button
                className={
                  styles.current__container__option_pro__pakage__item_btn
                }>
                Upgrade to Pro
              </Button>
              <ul
                className={
                  styles.current__container__option_pro__pakage__item__fuc
                }>
                <li
                  className={
                    styles.current__container__option_pro__pakage__item__fuc__title
                  }>
                  No Ads
                </li>
                <li
                  className={
                    styles.current__container__option_pro__pakage__item__fuc__title
                  }>
                  Direct Linking
                </li>
                <li
                  className={
                    styles.current__container__option_pro__pakage__item__fuc__title
                  }>
                  Unlimited Storage
                </li>
                <li
                  className={
                    styles.current__container__option_pro__pakage__item__fuc__title
                  }>
                  Replace image feature
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Current;
