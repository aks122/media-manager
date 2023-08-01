import React from "react";
import {
  Button,
  FilePicker,
  Paragraph,
  SideSheet,
  FileUploader,
  FileCard,
  Pane,
} from "evergreen-ui";

import { AiOutlineCloudUpload } from "react-icons/ai";
const FooterItem = () => {
  const [isShown, setIsShown] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const [fileRejections, setFileRejections] = React.useState([]);
  const handleChange = React.useCallback((files) => setFiles([files[0]]), []);
  const handleRejected = React.useCallback(
    (fileRejections) => setFileRejections([fileRejections[0]]),
    []
  );
  const handleRemove = React.useCallback(() => {
    setFiles([]);
    setFileRejections([]);
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          textAlign: "center",
          marginTop: "0.5rem",
        }}
      >
        <p>
          <SideSheet
            isShown={isShown}
            onCloseComplete={() => setIsShown(false)}
            preventBodyScrolling
          >
            <Paragraph margin={40}>
              <Pane maxWidth={200}>
                <FileUploader
                  label="Upload File"
                  description="You can upload 1 file. File can be up to 50 MB."
                  maxSizeInBytes={50 * 1024 ** 2}
                  maxFiles={1}
                  onChange={handleChange}
                  onRejected={handleRejected}
                  renderFile={(file) => {
                    const { name, size, type } = file;
                    const fileRejection = fileRejections.find(
                      (fileRejection) => fileRejection.file === file
                    );
                    const { message } = fileRejection || {};
                    return (
                      <FileCard
                        key={name}
                        isInvalid={fileRejection != null}
                        name={name}
                        onRemove={handleRemove}
                        sizeInBytes={size}
                        type={type}
                        validationMessage={message}
                      />
                    );
                  }}
                  values={files}
                />
              </Pane>
            </Paragraph>
          </SideSheet>
          <Button onClick={() => setIsShown(true)} style={{ border: "none" }}>
            <AiOutlineCloudUpload />
            &nbsp;&nbsp;&nbsp;Drop file here to attach or{" "}
            <span style={{ color: "blue" }}>browse</span>
          </Button>
        </p>
      </div>
    </>
  );
};
export default FooterItem;
