import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Button, Radio } from "antd";
const { Dragger } = Upload;
import { useState } from "react";

const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
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
const DocsPage = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>文件查重</Radio>
        <Radio value={2}>文件导入</Radio>
      </Radio.Group>
      <Dragger style={{ marginTop: "20px" }} {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">请将文件拖拽至此处</p>
        <p className="ant-upload-hint">
          提示： 仅支持上传doc、docx、txt、pdf
          pdf格式不稳定，容易乱码，请确认后再提交 文档大小不超过30M
        </p>
      </Dragger>

      <div className="buttonBox">
        <Button style={{ width: "300px", height: "50px" }} type="primary" block>
          立即上传
        </Button>
      </div>

      <div className="text">
        <p>林业科学数据元数据标准 主题内容与适用范围</p>
        <p>
          本标准规定了用来描述林业科学数据集及提供信息服务所需要的信息，提供了数据集的标识质量、空间表示、空间参照、内容、数据分发、元数据参考以及引用、时间和联系信息等。本标准适用于林业科学数据集的描述及共享服务。
        </p>
        <p>
          本标准的元数据分为两级，即核心元数据和详细元数据。核心元数据规定了描述数据集最关键的信息内容。在核心元数据的基础上，充分考虑林业科学数据的特点，建立满足林业科学数据共享建设需要的详细元数据。用户可以根据具体需求和数据的实际情况选用元数据内容，并建立相应级别的元数据库。
        </p>
        <p>林业科学数据元数据标准 主题内容与适用范围</p>
        <p>
          本标准规定了用来描述林业科学数据集及提供信息服务所需要的信息，提供了数据集的标识质量、空间表示、空间参照、内容、数据分发、元数据参考以及引用、时间和联系信息等。本标准适用于林业科学数据集的描述及共享服务。
        </p>
        <p>
          本标准的元数据分为两级，即核心元数据和详细元数据。核心元数据规定了描述数据集最关键的信息内容。在核心元数据的基础上，充分考虑林业科学数据的特点，建立满足林业科学数据共享建设需要的详细元数据。用户可以根据具体需求和数据的实际情况选用元数据内容，并建立相应级别的元数据库。
        </p>
      </div>
    </div>
  );
};

export default DocsPage;
