import React from "react";
import Header from "../share/Header";
import styles from "./CollectionDetail.module.scss";
import { Button } from "antd";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import classNames from "classnames";
import { FaFileAlt, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoInformation } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
function CollectionDetail() {
  return (
    <>
      <Header />
      <div className={styles.collection_detail}>
        <div className={styles.collection_detail__left}>
          <div className={styles.collection_detail__left__action}>
            <Button
              icon={<FaEdit />}
              className={styles.collection_detail__left__edit}>
              Edit
            </Button>
            <Button
              icon={<MdDelete />}
              className={styles.collection_detail__left__delete}>
              Delete
            </Button>
          </div>
          <div className={styles.collection_detail__left__info}>
            <div className={styles.collection_detail__left__info__account}>
              <img src="https://simgbb.com/avatar/qkY9vQkD13Gn.jpg" alt="" />
              <strong
                className={styles.collection_detail__left__info__account__name}>
                Mạnh Nguyễn
              </strong>
            </div>

            <p className={styles.collection_detail__left__info__title}>
              Web Learn
            </p>
            <p className={styles.collection_detail__left__info__quantity_image}>
              10 images in this collection
            </p>
          </div>
        </div>
        <div className={styles.collection_detail__right}>
          <Button
            className={styles.collection_detail__right__btn_upload}
            icon={<FaCloudUploadAlt />}>
            Upload to collection
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
          <Link to={"/collection/1"} className={styles.detail_file__data__item}>
            <img
              src="https://i.ibb.co/6rxjRM2/DALL-E-2024-10-24-18-11-13-A-logo-of-a-circular-shape-resembling-a-stylized-C-in-harmonious-gradient.webp"
              alt=""
            />
            <MdDelete className={styles.detail_file__data__item__delete} />
            <IoInformation className={styles.detail_file__data__item__info} />
            <MdEdit className={styles.detail_file__data__item__edit} />
          </Link>
          <Link to={"/collection/1"} className={styles.detail_file__data__item}>
            <img
              src="https://i.ibb.co/6rxjRM2/DALL-E-2024-10-24-18-11-13-A-logo-of-a-circular-shape-resembling-a-stylized-C-in-harmonious-gradient.webp"
              alt=""
            />
            <MdDelete className={styles.detail_file__data__item__delete} />
            <IoInformation className={styles.detail_file__data__item__info} />
            <MdEdit className={styles.detail_file__data__item__edit} />
          </Link>
          <Link to={"/collection/1"} className={styles.detail_file__data__item}>
            <img
              src="https://i.ibb.co/6rxjRM2/DALL-E-2024-10-24-18-11-13-A-logo-of-a-circular-shape-resembling-a-stylized-C-in-harmonious-gradient.webp"
              alt=""
            />
            <MdDelete className={styles.detail_file__data__item__delete} />
            <IoInformation className={styles.detail_file__data__item__info} />
            <MdEdit className={styles.detail_file__data__item__edit} />
          </Link>
          <Link to={"/collection/1"} className={styles.detail_file__data__item}>
            <img
              src="https://i.ibb.co/6rxjRM2/DALL-E-2024-10-24-18-11-13-A-logo-of-a-circular-shape-resembling-a-stylized-C-in-harmonious-gradient.webp"
              alt=""
            />
            <MdDelete className={styles.detail_file__data__item__delete} />
            <IoInformation className={styles.detail_file__data__item__info} />
            <MdEdit className={styles.detail_file__data__item__edit} />
          </Link>
          <Link to={"/collection/1"} className={styles.detail_file__data__item}>
            <img
              src="https://i.ibb.co/6rxjRM2/DALL-E-2024-10-24-18-11-13-A-logo-of-a-circular-shape-resembling-a-stylized-C-in-harmonious-gradient.webp"
              alt=""
            />
            <MdDelete className={styles.detail_file__data__item__delete} />
            <IoInformation className={styles.detail_file__data__item__info} />
            <MdEdit className={styles.detail_file__data__item__edit} />
          </Link>
          <Link to={"/collection/1"} className={styles.detail_file__data__item}>
            <img
              src="https://i.ibb.co/6rxjRM2/DALL-E-2024-10-24-18-11-13-A-logo-of-a-circular-shape-resembling-a-stylized-C-in-harmonious-gradient.webp"
              alt=""
            />
            <MdDelete className={styles.detail_file__data__item__delete} />
            <IoInformation className={styles.detail_file__data__item__info} />
            <MdEdit className={styles.detail_file__data__item__edit} />
          </Link>
          <Link to={"/collection/1"} className={styles.detail_file__data__item}>
            <img
              src="https://i.ibb.co/6rxjRM2/DALL-E-2024-10-24-18-11-13-A-logo-of-a-circular-shape-resembling-a-stylized-C-in-harmonious-gradient.webp"
              alt=""
            />
            <MdDelete className={styles.detail_file__data__item__delete} />
            <IoInformation className={styles.detail_file__data__item__info} />
            <MdEdit className={styles.detail_file__data__item__edit} />

            <p className={styles.detail_file__data__item__name_file}>
              Ảnh con mèo nhỏ
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default CollectionDetail;
