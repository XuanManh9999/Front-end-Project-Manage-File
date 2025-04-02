import { useState, useEffect } from "react";
import {
  Dropdown,
  Avatar,
  Menu,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Upload,
  message,
} from "antd";
import {
  SettingOutlined,
  LogoutOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import styles from "./UserDropdown.module.scss";

const UserDropdown = ({ user, onLogout, onUpdate }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar || "");

  // Khi modal mở, load dữ liệu từ user vào form
  useEffect(() => {
    form.setFieldsValue({ ...user });
  }, [user, form]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      // Gửi các giá trị cập nhật xuống server
      // onUpdate(values);
      setIsModalVisible(false);

      console.log("Check value", values); // In ra giá trị đã cập nhật
    });
  };

  const handleAvatarChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      const reader = new FileReader();
      reader.onload = () => setAvatarPreview(reader.result);
      reader.readAsDataURL(info.file.originFileObj); // Đọc file dưới dạng base64 để hiển thị ảnh preview
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleFieldChange = (changedValue, allValues) => {
    // Theo dõi thay đổi của các trường trong form
    console.log(allValues); // In ra dữ liệu hiện tại
  };

  const menu = (
    <Menu className={styles.dropdownMenu}>
      <Menu.Item key="user" disabled className={styles.userInfo}>
        <Avatar size={50} src={user?.avatar} className={styles.avatar} />
        <p className={styles.userName}>{user?.name}</p>
      </Menu.Item>
      <Menu.Item key="settings" className={styles.menuItem} onClick={showModal}>
        <SettingOutlined /> Cài đặt
      </Menu.Item>
      <Menu.Item key="logout" onClick={onLogout} className={styles.logoutBtn}>
        <LogoutOutlined /> Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
        <div className={styles.userDropdown}>
          <Avatar size={30} src={user?.avatar} />
          <span className={styles.userName}>{user?.name}</span>
        </div>
      </Dropdown>

      <Modal
        title="Cập nhật thông tin"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}>
        <Form
          form={form}
          layout="vertical"
          onValuesChange={handleFieldChange} // Theo dõi thay đổi
        >
          <Form.Item
            name="phoneNumber"
            label="Số điện thoại"
            rules={[{ message: "Vui lòng nhập số điện thoại" }]}>
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Giới tính"
            rules={[{ message: "Vui lòng chọn giới tính" }]}>
            <Select>
              <Select.Option value="NAM">Nam</Select.Option>
              <Select.Option value="NỮ">Nữ</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="avatar" label="Ảnh đại diện">
            <Upload
              name="avatar"
              listType="picture-card"
              showUploadList={false}
              action="/api/v1/user" // Bạn có thể thay đổi action thành endpoint của server nơi bạn upload ảnh
              onChange={handleAvatarChange}
              beforeUpload={(file) => {
                const isImage = file.type.startsWith("image/");
                if (!isImage) {
                  message.error("Chỉ có thể tải lên ảnh");
                }
                return isImage;
              }}>
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="avatar"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div>
                  <UploadOutlined />
                  <div>Chọn ảnh</div>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleUpdate} block>
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserDropdown;
