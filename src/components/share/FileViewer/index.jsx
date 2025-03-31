import React from "react";
import styles from "./FileViewer.module.scss";
import { FaDownload } from "react-icons/fa";

const FileViewer = ({ fileUrl, fileType, fileName }) => {
  // Nếu fileType không được truyền, tự suy ra extension từ fileUrl:
  const getExtension = (url) => {
    const parts = url.split(".");
    return parts.length > 0 ? parts.pop().toLowerCase() : "";
  };

  // Sử dụng fileType nếu có, nếu không thì dùng extension
  const extension = fileType ? fileType : getExtension(fileUrl);

  // Nếu file là hình ảnh
  if (
    extension.startsWith("image") ||
    ["jpg", "jpeg", "png", "gif", "bmp", "webp"].includes(extension)
  ) {
    return (
      <div className={styles.container}>
        <img
          src={fileUrl}
          alt={fileName || "Uploaded image"}
          className={styles.image}
        />
        <a
          href={fileUrl}
          download={fileName || "download"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}>
          <FaDownload className={styles.downloadIcon} />
          Tải về
        </a>
      </div>
    );
  }

  // Nếu file là video
  if (
    extension.startsWith("video") ||
    ["mp4", "webm", "ogg", "mkv"].includes(extension)
  ) {
    // Với video định dạng mkv, trình duyệt thường không hỗ trợ phát trực tiếp
    if (extension === "mkv" || fileType === "video/x-matroska") {
      return (
        <div className={styles.container}>
          <p>Trình duyệt của bạn không hỗ trợ xem video trực tiếp.</p>
          <a
            href={fileUrl}
            download={fileName || "download"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}>
            <FaDownload className={styles.downloadIcon} />
            Tải về video
          </a>
        </div>
      );
    }
    // Các định dạng video khác có thể phát trực tiếp
    return (
      <div className={styles.container}>
        <video width="100%" height="auto" controls className={styles.video}>
          <source src={fileUrl} type={fileType} />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
        <a
          href={fileUrl}
          download={fileName || "download"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}>
          <FaDownload className={styles.downloadIcon} />
          Tải về video
        </a>
      </div>
    );
  }

  // Nếu file là PDF
  if (extension === "pdf") {
    return (
      <div className={styles.container}>
        <iframe
          src={fileUrl}
          title={fileName || "PDF Document"}
          width="100%"
          height="600px"
          className={styles.pdf}
          style={{ border: "none" }}>
          Trình duyệt của bạn không hỗ trợ xem PDF.
        </iframe>
        <a
          href={fileUrl}
          download={fileName || "download"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}>
          <FaDownload className={styles.downloadIcon} />
          Tải về PDF
        </a>
      </div>
    );
  }

  // Với các loại file khác, hiển thị link tải về
  return (
    <div className={styles.container}>
      <p>Không thể hiển thị tài nguyên trực tiếp.</p>
      <a
        href={fileUrl}
        download={fileName || "download"}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.downloadButton}>
        <FaDownload className={styles.downloadIcon} />
        Tải về file
      </a>
    </div>
  );
};

export default FileViewer;
