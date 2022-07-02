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
import alertSlice from "../../../../../redux/slice/alertSlice";
import BtnLoading from "../../../components/BtnLoading";
import {
  DocTienBangChu,
  stringToNumberMoney,
  vender_value_imageObj,
} from "../../../components/constant";
import { tabsTypeProduct } from "../../../components/data";
import getTimeCurrent from "../../../components/getTimeCurrent";
import { useDispatch } from "react-redux";
import { WriteDataChange } from "../../../../Checkout/components/constant";
import { TextAreaProduct } from "./TextAreaProduct";

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

function TextAreaNew({
  titleText,
  placeholder,
  onChange,
  className = "news-name",
}) {
  return (
    <Typography component={"div"} className="col-4">
      <Typography component={"div"} className="news-name-title">
        {titleText}
      </Typography>
      <Typography
        component={"textarea"}
        className={className}
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
  const [files, setFiles] = useState({
    file1: null,
    file2: null,
  });
  const [urlImage, setUrlImage] = useState({ url1: null, url2: null });
  const [urlFirebase1, setUrlFirebase1] = useState();
  const [urlFirebase2, setUrlFirebase2] = useState();
  const [productDescription, setProductDescription] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [typeProduct, setTypeProduct] = useState("vest");
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setProductPrice("");
    setCheckUpload(false);
    setUrlFirebase1(null);
    setUrlFirebase2(null);
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
        if (file === files.file1) {
          setUrlFirebase1(url);
        } else {
          setUrlFirebase2(url);
        }
      });
    });
  };
  const handleConfirm = () => {
    setLoadingConfirm(true);
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

    await categoryApi.add({
      typeProduct: typeProduct,
      name_product: productName,
      priceNumber: productPrice,
      price_product: stringToNumberMoney(productPrice),
      imageProduct: [urlFirebase1, urlFirebase2],
      article_date: getTimeCurrent(),
      discount_sale: "null",
      describe: productDescription,
      isSale: "false",
      initialPrice: "null",
      vender_value_image: vender_value_imageObj[`${typeProduct}`],
    });
    setLoadingUpload(false);
    setCheckUpload(true);
    setIsChange(!isChange);
    WriteDataChange(true);
    setTimeout(() => {
      handleClose();
      dispatch(
        alertSlice.actions.changeAlert({
          showAlert: true,
          alertContent: "Thêm thành công",
        })
      );
    }, 1000);
  };

  const handlePreviewAvatar = (e, i) => {
    const file = e.target.files[0];

    if (file) {
      i === 0
        ? setFiles({ ...files, file1: file })
        : setFiles({ ...files, file2: file });
    }
    file.preview = URL.createObjectURL(file);
    if (i === 0) {
      setUrlImage({ ...urlImage, url1: file.preview });
    } else {
      setUrlImage({ ...urlImage, url2: file.preview });
    }
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
            <Typography
              component={"div"}
              className="col-8 d-flex justify-content-around"
            >
              {Array(2)
                .fill(null)
                .map((value, i) => {
                  return (
                    <Typography component={"span"} className="col-5" key={i}>
                      <Typography component={"span"} className="image-title">
                        {i == 0 ? "Ảnh sản phẩm 1" : "Ảnh sản phẩm 2"}
                      </Typography>
                      <Image
                        className={"modals-image"}
                        srcImage={
                          (i === 0 && urlImage?.url1) ||
                          (i === 1 && urlImage?.url2) ||
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
            </Typography>

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
              <TextAreaProduct
                placeholder={" Nhập mô tả sản phẩm..."}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </Typography>

            <Typography component={"span"} className="modal-save">
              {(loadingConfirm && <BtnLoading btnName={"Xác nhận"} />) ||
                (files?.file1 &&
                  files?.file2 &&
                  productName.trim() !== "" &&
                  productPrice.trim() !== "" &&
                  Number.isInteger(+productPrice) &&
                  productDescription.trim() !== "" && (
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
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalAddProduct;
