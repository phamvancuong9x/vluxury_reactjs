import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import categoryApi from "../../../../../api/categoryApi";
import Image from "../../../../../components/Image";
import BtnLoading from "../../../components/BtnLoading";
import {
  DocTienBangChu,
  stringToNumberMoney,
} from "../../../components/constant";
import { tabsTypeProduct } from "../../../components/data";
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

function SelectTypeProduct({ typeProduct, setTypeProduct }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">TypeProduct</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={typeProduct}
        label="TypeProduct"
        onChange={(e) => setTypeProduct(e.target.value)}
      >
        {tabsTypeProduct.map((tabItem) => {
          return (
            <MenuItem
              value={tabItem.param.typeProduct}
              key={tabItem.param.typeProduct}
            >
              {tabItem.typeProducts}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
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

function ModalAddProduct({ isChange, setIsChange }) {
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [loadingConfirm, setLoadingConfirm] = useState(false);
  const [checkUpload, setCheckUpload] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = useState();
  const [urlImage, setUrlImage] = useState();
  const [urlFirebase, setUrlFirebase] = useState();
  const [productDescription, setProductDescription] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [typeProduct, setTypeProduct] = useState("vest");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setProductPrice("");
    setCheckUpload(false);
    setUrlFirebase(null);
    if (loadingUpload) return;
    setLoadingConfirm(false);
    setOpen(false);
    setUrlImage(null);
    setFiles(null);
  };
  const getUrlFirebase = (file, storage) => {
    const storageRef = ref(storage, file?.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(storageRef).then((url) => {
        setUrlFirebase(url);
      });
    });
  };
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

    await categoryApi.add({
      typeProduct: typeProduct,
      name_product: productName,
      priceNumber: productPrice,
      price_product: stringToNumberMoney(productPrice),
      imageProduct: [urlFirebase, urlFirebase],
      article_date: getTimeCurrent(),
      discount_sale: "null",
      describe: productDescription,
      isSale: "false",
      initialPrice: "null",
      vender_value_image: "null",
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
    <div className="ModalAddProduct">
      <Button onClick={handleOpen}>Thêm Sản Phẩm</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thêm Sản Phẩm
          </Typography>
          <Typography
            component={"span"}
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="row "
          >
            <Typography component={"div"} className="col-4">
              <Typography component={"div"} className="image-title">
                {"Ảnh sản phẩm"}
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
              <Typography
                component={"span"}
                className="add-image-note"
              ></Typography>
            </Typography>
            <TextAreaNew
              titleText="Mô tả sản phẩm"
              placeholder={" Nhập mô tả sản phẩm..."}
              onChange={(e) => setProductDescription(e.target.value)}
            />
            <Typography component={"div"} className="form-field">
              <Typography component={"div"} className="input-container">
                <TextField
                  id="outlined-basic"
                  label="Tên sản phẩm"
                  variant="outlined"
                  onChange={(e) => setProductName(e.target.value)}
                />
              </Typography>
              <Typography component={"div"} className="input-container">
                <TextField
                  id="outlined-basic"
                  label="Giá sản phẩm ( Chỉ nhập số )"
                  variant="outlined"
                  onChange={(e) => setProductPrice(e.target.value)}
                />
                {console.log(productPrice.length)}
                {productPrice.length != 0 && Number.isInteger(+productPrice) && (
                  <>
                    <p className="price-word">
                      {DocTienBangChu(productPrice)}
                      <span>{`( ${stringToNumberMoney(productPrice)} )`}</span>
                    </p>
                  </>
                )}
                {!Number.isInteger(+productPrice) && (
                  <p className="error-price">
                    Lỗi : Giá tiền chỉ bao gồm các chữ số !
                  </p>
                )}
              </Typography>
              <SelectTypeProduct
                typeProduct={typeProduct}
                setTypeProduct={setTypeProduct}
              />
            </Typography>

            <Typography component={"span"} className="modal-save">
              {(loadingConfirm && <BtnLoading btnName={"Xác nhận"} />) ||
                (files &&
                  productName.trim() != "" &&
                  productPrice.trim() != "" &&
                  Number.isInteger(+productPrice) &&
                  productDescription.trim() != "" && (
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

export default ModalAddProduct;
