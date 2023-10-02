import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;

const version = "1.0";
const programId = "123";

const baseUrl = "http://127.0.0.1:4010";
const apiPath = `/api/${version}/programs/${programId}/application-form`;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: `${baseUrl}${apiPath}`,
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const UploadCard: React.FC = () => (
  <Dragger
    {...props}
    style={{
      backgroundColor: "white",
      borderStyle: "dotted",
      borderColor: "black",
      borderWidth: "2px",
    }}
  >
    <p className="ant-upload-drag-icon">
      <UploadOutlined style={{ color: "black" }} />
    </p>
    <p className="ant-upload-text">Upload cover image</p>
    <p className="ant-upload-hint">
      16:9 ratio is recommended. Max image size 1mb
    </p>
  </Dragger>
);

export default UploadCard;
