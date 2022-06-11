import { Input } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import homeApi from "../../../../../api/homeApi";
import Image from "../../../../../components/Image";
import BtnLoading from "../../../components/BtnLoading";
import getTimeCurrent from "../../../components/getTimeCurrent";

// Initialize Firebase

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Modals({ tabsData, tabs, isChange, setIsChange }) {
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [loadingConfirm, setLoadingConfirm] = useState(false);
  const [checkUpload, setCheckUpload] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = useState({
    file1: null,
    file2: null,
  });
  const [urlImage, setUrlImage] = useState({ url1: null, url2: null });
  const [urlFirebase1, setUrlFirebase1] = useState();
  const [urlFirebase2, setUrlFirebase2] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setCheckUpload(false);
    setUrlFirebase1(null);
    setUrlFirebase2(null);
    if (loadingUpload) return;
    setLoadingConfirm(false);

    setOpen(false);
    setUrlImage({ url1: null, url2: null });
    setFiles({
      file1: null,
      file2: null,
    });
  };
  function getUrlFirebase(file, storage) {
    const storageRef = ref(storage, file?.name);

    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(storageRef).then((url) => {
        if (file == files.file1) {
          setUrlFirebase1(url);
        } else {
          setUrlFirebase2(url);
        }
      });
    });
  }
  const handleConfirm = () => {
    setLoadingConfirm(true);
    // const files = file.current.file[0];
    const storage = getStorage();
    getUrlFirebase(files.file1, storage);
    getUrlFirebase(files.file2, storage);
    setTimeout(() => {
      setLoadingConfirm(false);
    }, 2500);
  };
  const handleUploadImage = async () => {
    setLoadingUpload(true);
    if (!urlFirebase1 || !urlFirebase2) return;
    const homeType = tabsData[0] == tabs ? "slider" : "bannerSale";
    const name = tabsData[0] == tabs ? "Ảnh slider" : "Ảnh bannerSale";
    await homeApi.addSlider({
      homeType,
      name,
      article_date: getTimeCurrent(),
      image_slider_desktop: urlFirebase1,
      image_slider_mobile: urlFirebase2,
    });
    setLoadingUpload(false);
    setCheckUpload(true);
    setIsChange(!isChange);
  };

  const handlePreviewAvatar = (e, i) => {
    const file = e.target.files[0];

    if (file) {
      i == 0
        ? setFiles({ ...files, file1: file })
        : setFiles({ ...files, file2: file });
    }
    file.preview = URL.createObjectURL(file);
    if (i == 0) {
      setUrlImage({ ...urlImage, url1: file.preview });
    } else {
      setUrlImage({ ...urlImage, url2: file.preview });
    }
  };
  return (
    <div className="Modals">
      <Button onClick={handleOpen}>Thêm ảnh</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thêm ảnh slider
          </Typography>
          <Typography
            component={"span"}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <Typography component={"span"} className="row ">
              {Array(2)
                .fill(null)
                .map((value, i) => {
                  return (
                    <Typography component={"span"} className="col-5" key={i}>
                      <Typography component={"span"} className="image-title">
                        {i == 0 ? "Ảnh trên desktop" : "Ảnh trên mobile"}
                      </Typography>
                      <Image
                        className={"modals-image"}
                        srcImage={
                          (i == 0 && urlImage.url1) ||
                          (i == 1 && urlImage.url2) ||
                          "assets/image/admin/NoImage.png"
                        }
                      />
                      <Typography component={"span"} className="btn-add-image">
                        <Input
                          type="file"
                          variant="outlined"
                          color="primary"
                          onChange={(e) => handlePreviewAvatar(e, i)}
                        />
                      </Typography>
                    </Typography>
                  );
                })}

              <Typography component={"span"} className="modal-save">
                {(loadingConfirm && <BtnLoading btnName={"Xác nhận"} />) ||
                  (files.file1 && files.file2 && (
                    <Button variant="outlined" onClick={handleConfirm}>
                      Xác nhận
                    </Button>
                  )) || (
                    <Button variant="outlined" onClick={handleConfirm} disabled>
                      Xác nhận
                    </Button>
                  )}

                {(loadingUpload && <BtnLoading btnName={"Uploads"} />) ||
                  (urlFirebase1 && urlFirebase2 && !checkUpload && (
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
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Modals;
