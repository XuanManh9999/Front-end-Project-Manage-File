import React, { useEffect } from "react";
import styles from "./Collection.module.scss";
import Header from "../share/Header";
import classNames from "classnames";
import { Button, message } from "antd";
import { CiCamera } from "react-icons/ci";
import { FaRegImages, FaRegFolder } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slice/userSlice";
import { getCollections, deleteCollection } from "../../services/collection";
import { formatDateTime, formatSize } from "../../utils/regex";

function Collection() {
  const user = useSelector(selectUser);
  const [collections, setCollections] = React.useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      const response = await getCollections();
      if (response?.status === 200) {
        setCollections(response?.data);
      } else {
        message.error(response?.message);
      }
    };
    fetchingData();
  }, []);

  const handleDeleteFolder = (event, id) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    alert(id);
  };

  return (
    <>
      <Header />
      <div className={styles.detail_file}>
        <div className={styles.detail_file__backgroud}>
          <img src={user?.backgroud || ""} alt="" />
          <Button icon={<CiCamera />}>Thay đổi ảnh bìa </Button>
        </div>
        <div className={styles.detail_file__content}>
          <div className={styles.detail_file__content__left}>
            <div className={styles.detail_file__content__left__avatar}>
              <img src={user?.avatar || ""} alt="" />
            </div>
            <div className={styles.detail_file__content__left__info}>
              <div className={styles.detail_file__content__left__name}>
                <h2>{user?.username || ""}</h2>
              </div>
              <div
                className={
                  styles.detail_file__content__left__quantity_collection
                }>
                <span>{collections.length || 0}</span>
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
            {collections?.map((collection) => (
              <Link
                to={`/collection/${collection.id}`}
                className={styles.detail_file__data__item}>
                <FaRegFolder className={styles.detail_file__data__item__icon} />
                <div className={styles.detail_file__data__item__info}>
                  <span className={styles.detail_file__data__item__name}>
                    {collection?.name || ""}
                  </span>
                  <span className={styles.detail_file__data__item__quantity}>
                    Tổng số files: {collection?.files?.length || 0}
                  </span>
                  <span className={styles.detail_file__data__item__size}>
                    Kích thước:{" "}
                    {formatSize(
                      collection?.files.reduce(
                        (sum, file) => sum + file.fileSize,
                        0
                      )
                    )}
                  </span>
                  <span className={styles.detail_file__data__item__date}>
                    Ngày tạo: {formatDateTime(collection?.createAt) || ""}
                  </span>
                </div>
                <MdDelete
                  className={styles.detail_file__data__item__delete}
                  onClick={(event) => handleDeleteFolder(event, collection.id)}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
