import { Input } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import newApi from "../../../../../api/newsApi";
import Image from "../../../../../components/Image";
import BtnLoading from "../../../components/BtnLoading";
import getTimeCurrent from "../../../components/getTimeCurrent";

// Initialize Firebase

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function TextAreaNew({ titleText, placeholder, onChange }) {
  return (
    <Typography component={"div"} className="col-4">
      <Typography component={"div"} className="news-name-title">
        {titleText}
      </Typography>
      <Typography
        component={"textarea"}
        className="news-name"
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      ></Typography>
    </Typography>
  );
}

function ModalNews({ isChange, setIsChange }) {
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [loadingConfirm, setLoadingConfirm] = useState(false);
  const [checkUpload, setCheckUpload] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = useState();
  const [urlImage, setUrlImage] = useState();
  const [urlFirebase, setUrlFirebase] = useState();
  const [valueNewName, setValueNewName] = useState("");
  const [valueNewDescription, setValueNewDescription] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setCheckUpload(false);
    setUrlFirebase(null);
    if (loadingUpload) return;
    setLoadingConfirm(false);
    setOpen(false);
    setUrlImage(null);
    setFiles(null);
  };
  function getUrlFirebase(file, storage) {
    const storageRef = ref(storage, file?.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(storageRef).then((url) => {
        setUrlFirebase(url);
      });
    });
  }
  const handleConfirm = () => {
    setLoadingConfirm(true);
    // const files = file.current.file[0];
    const storage = getStorage();
    getUrlFirebase(files, storage);
    setTimeout(() => {
      setLoadingConfirm(false);
    }, 2500);
  };
  const handleUploadImage = async () => {
    setLoadingUpload(true);
    if (!urlFirebase) return;

    await newApi.add({
      name: valueNewName,
      article_date: getTimeCurrent(),
      newDescriber: valueNewDescription,
      image: urlFirebase,
    });
    setLoadingUpload(false);
    setCheckUpload(true);
    setIsChange(!isChange);
  };

  const handlePreviewAvatar = (e, i) => {
    const file = e.target.files[0];
    if (file) {
      setFiles(file);
    }
    file.preview = URL.createObjectURL(file);
    setUrlImage(file.preview);
  };
  return (
    <div className="ModalNews">
      <Button onClick={handleOpen}>Thêm tin tức</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thêm tin tức
          </Typography>
          <Typography
            component={"span"}
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="row "
          >
            <Typography component={"div"} className="col-4">
              <Typography component={"div"} className="image-title">
                {"Ảnh Tin tức"}
              </Typography>
              <Image
                className={"modals-image"}
                srcImage={urlImage || "assets/image/admin/NoImage.png"}
              />
              <Typography component={"span"} className="btn-add-image">
                <Input
                  type="file"
                  variant="outlined"
                  color="primary"
                  onChange={(e) => handlePreviewAvatar(e)}
                />
              </Typography>
              <Typography component={"span"} className="add-image-note">
                Thêm ảnh có tỉ lệ 1:1 để hiển thị tốt !
              </Typography>
            </Typography>

            <TextAreaNew
              titleText="Tên tin tức"
              placeholder={" Nhập tiêu đề tin tức ..."}
              onChange={(e) => {
                setValueNewName(e.target.value);
              }}
            />
            <TextAreaNew
              titleText="Mô tả"
              placeholder={" Nhập mô tả nội dung tin tức ..."}
              onChange={(e) => setValueNewDescription(e.target.value)}
            />

            <Typography component={"span"} className="modal-save">
              {(loadingConfirm && <BtnLoading btnName={"Xác nhận"} />) ||
                (files &&
                  valueNewName.trim() != "" &&
                  valueNewDescription.trim() != "" && (
                    <Button variant="outlined" onClick={handleConfirm}>
                      Xác nhận
                    </Button>
                  )) || (
                  <Button variant="outlined" onClick={handleConfirm} disabled>
                    Xác nhận
                  </Button>
                )}
              {(loadingUpload && <BtnLoading btnName={"Uploads"} />) ||
                (urlFirebase && !checkUpload && (
                  <Button variant="outlined" onClick={handleUploadImage}>
                    Uploads
                  </Button>
                )) || (
                  <Button
                    variant="outlined"
                    onClick={handleUploadImage}
                    disabled
                  >
                    Uploads
                  </Button>
                )}
              {checkUpload && (
                <Typography component={"p"} className="add-success">
                  Thêm Thành công !
                </Typography>
              )}
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalNews;
