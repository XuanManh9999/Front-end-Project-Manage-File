function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex =
    /^(?:\+?84|0)(3[2-9]|5[2689]|7[0-9]|8[1-9]|9[0-9])[0-9]{7}$/;
  return phoneRegex.test(phone);
}

function formatDateTime(isoString) {
  const date = new Date(isoString);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Tháng trong JS bắt đầu từ 0
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + " B";
  else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
  else if (bytes < 1024 * 1024 * 1024)
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  else return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
}

export { validateEmail, validatePhone, formatDateTime, formatSize };
