import React from "react";
import styles from "./Current.module.scss";
import { Button } from "antd";
import classNames from "classnames";

function Current() {
  return (
    <div className={styles.current__container}>
      <h1 className={styles.current__container__title}>
        Quản lý tất cả tài liệu của bạn theo cách đơn giản
      </h1>
      <p className={styles.current__container__desc}>
        Drag and drop anywhere you want and start uploading your images now. 32
        MB limit. Direct image links, BBCode and HTML thumbnails.
      </p>
      <Button className={styles.current__container__btn_start_now}>
        Bắt đầu ngay
      </Button>
      <div className={styles.current__container__option_pro}>
        <h1 className={styles.current__container__title}>ImgBB Pro account</h1>
        <p className={styles.current__container__desc}>
          ImgBB is a free image hosting service. Upgrade to unlock all the
          features.
        </p>
        <div className={styles.current__container__option_pro__pakage}></div>
      </div>
    </div>
  );
}

export default Current;
