import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Button from ".";

const UploadField = ({
  accept,
  onChange,
  progress,
  disabled,
  multiple,
  text,
  style,
  ...props
}) => (
  <Upload
    accept={accept}
    onChange={onChange}
    progress={progress}
    multiple={multiple}
    disabled={disabled}
    style={style}
    {...props}
  >
    <Button.Basic icon={<UploadOutlined />} text={text} />
  </Upload>
);
export default UploadField;
