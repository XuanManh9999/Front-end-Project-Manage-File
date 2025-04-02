import React from "react";
import styles from "./Collection.module.scss";
import Header from "../share/Header";
import classNames from "classnames";
import { Button } from "antd";
import { CiCamera } from "react-icons/ci";
import { FaRegImages, FaFileAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function Collection() {
  return (
    <>
      <Header />
      <div className={styles.detail_file}>
        <div className={styles.detail_file__backgroud}>
          <img src="https://simgbb.com/background/nrFfnnGq8NVW.jpg" alt="" />
          <Button icon={<CiCamera />}>Thay đổi ảnh bìa </Button>
        </div>
        <div className={styles.detail_file__content}>
          <div className={styles.detail_file__content__left}>
            <div className={styles.detail_file__content__left__avatar}>
              <img src="https://simgbb.com/avatar/qkY9vQkD13Gn.jpg" alt="" />
            </div>
            <div className={styles.detail_file__content__left__info}>
              <div className={styles.detail_file__content__left__name}>
                <h2>Mạnh Nguyễn</h2>
              </div>
              <div
                className={
                  styles.detail_file__content__left__quantity_collection
                }>
                <span>0</span>
                <span>Bộ sưu tập</span>
              </div>
            </div>
          </div>
          <div className={styles.detail_file__content__right}>
            <Button
              icon={<FaRegImages />}
              className={styles.detail_file__content__right__btn}>
              Create new album
            </Button>
          </div>
        </div>

        <div className={styles.detail_file__data}>
          <ul className={styles.detail_file__data__head}>
            <li
              className={classNames(
                styles.detail_file__data__head__item,
                styles.detail_file__data__head__item__active
              )}>
              <span>Tất cả</span>
            </li>
            <li className={styles.detail_file__data__head__item}>
              <span>Từ A - Z</span>
            </li>
            <li className={styles.detail_file__data__head__item}>
              <span>Mới nhất</span>
            </li>
            <li className={styles.detail_file__data__head__item}>
              <span>Theo kích thước</span>
            </li>
          </ul>
          <div className={styles.detail_file__data__list}>
            <Link
              to={"/collection/1"}
              className={styles.detail_file__data__item}>
              <img
                src="https://i.ibb.co/6rxjRM2/DALL-E-2024-10-24-18-11-13-A-logo-of-a-circular-shape-resembling-a-stylized-C-in-harmonious-gradient.webp"
                alt=""
              />
              <MdDelete className={styles.detail_file__data__item__delete} />
              <p className={styles.detail_file__data__item__name}>Web learn</p>
              <div className={styles.detail_file__data__item__quantity}>
                <FaFileAlt />
                <span>20</span>
              </div>
            </Link>
            <Link
              to={"/collection/1"}
              className={styles.detail_file__data__item}>
              <img
                src="https://i.ibb.co/6rxjRM2/DALL-E-2024-10-24-18-11-13-A-logo-of-a-circular-shape-resembling-a-stylized-C-in-harmonious-gradient.webp"
                alt=""
              />
              <MdDelete className={styles.detail_file__data__item__delete} />
              <p className={styles.detail_file__data__item__name}>Web learn</p>
              <div className={styles.detail_file__data__item__quantity}>
                <FaFileAlt />
                <span>20</span>
              </div>
            </Link>
            <Link
              to={"/collection/1"}
              className={styles.detail_file__data__item}>
              <img
                src="https://i.ibb.co/6rxjRM2/DALL-E-2024-10-24-18-11-13-A-logo-of-a-circular-shape-resembling-a-stylized-C-in-harmonious-gradient.webp"
                alt=""
              />
              <MdDelete className={styles.detail_file__data__item__delete} />
              <p className={styles.detail_file__data__item__name}>Web learn</p>
              <div className={styles.detail_file__data__item__quantity}>
                <FaFileAlt />
                <span>20</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
