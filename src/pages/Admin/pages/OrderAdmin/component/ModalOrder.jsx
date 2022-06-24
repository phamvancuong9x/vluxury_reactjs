import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import adminSlice from "../../../../../redux/slice/adminSlice";
import alertSlice from "../../../../../redux/slice/alertSlice";
import {
  DeleteData,
  WriteOrderCannel,
  WriteOrderConfirm,
} from "../../../../Checkout/components/constant";
import { Confirm } from "../../../components/Confirm";

function TypographyCustom({ tagName, text = false, children }) {
  return (
    <Typography variant={tagName} component={tagName}>
      {text}
      {children}
    </Typography>
  );
}
export function OrderTableProduct({ cart }) {
  return (
    <TypographyCustom tagName="table">
      <TypographyCustom tagName="thead">
        <TypographyCustom tagName="tr">
          <TypographyCustom tagName="th" text="STT" />
          <TypographyCustom tagName="th" text="Tên sản phẩm" />
          <TypographyCustom tagName="th" text="Số lượng" />
          <TypographyCustom tagName="th" text="Giá" />
        </TypographyCustom>
      </TypographyCustom>
      <TypographyCustom tagName="tbody">
        {cart?.map((cartItem, i) => {
          return (
            <TypographyCustom tagName="tr" key={i}>
              <TypographyCustom tagName="td" text={i + 1} />
              <TypographyCustom tagName="td" text={cartItem.nameProduct} />
              <TypographyCustom tagName="td" text={cartItem.quantity} />
              <TypographyCustom tagName="td" text={cartItem.price_product} />
            </TypographyCustom>
          );
        })}
      </TypographyCustom>
    </TypographyCustom>
  );
}
function ModalOrderItem({ text, value }) {
  return (
    <>
      <Typography
        className="col-4 modal_title"
        id="modal-modal-title"
        variant="p"
        component="p"
      >
        {text}
      </Typography>
      <Typography className="col-8" variant="p" component="p">
        {value}
      </Typography>
    </>
  );
}
function ModalOrder({ orderItem }) {
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
  const [idShowConfirm, setIdShowConfirm] = useState();
  const [showConfirm, setShowConfirm] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.admin.orderList);

  if (!orderItem) return <></>;

  const handleDeleteOrder = () => {
    DeleteData("/orderShow/", orderItem.id);
    DeleteData("/order/", orderItem.id);
    let newOrderList = orderList.filter((data) => {
      return data.id !== orderItem.id;
    });
    if (newOrderList.length === 0) {
      newOrderList = null;
    }
    dispatch(adminSlice.actions.changeOrderList(newOrderList));
  };
  const handleConfirmOrder = () => {
    WriteOrderConfirm(orderItem.id, orderItem);
    handleDeleteOrder();
    dispatch(
      alertSlice.actions.changeAlert({
        showAlert: true,
        alertContent: "Thêm thành công",
      })
    );
  };

  const handleShowConfirm = () => {
    setIdShowConfirm(orderItem.id);
    setShowConfirm(true);
  };
  const handleConfirmYes = () => {
    setShowConfirm(false);
    WriteOrderCannel(orderItem.id, orderItem);
    handleDeleteOrder();
  };
  const handleConfirmNo = () => {
    setShowConfirm(false);
  };

  return (
    <div className="ModalDetailOrder">
      <Button color="primary" variant="outlined" onClick={handleOpen}>
        Xem đơn hàng
      </Button>
      <Button color="primary" variant="outlined" onClick={handleShowConfirm}>
        Hủy đơn hàng
      </Button>

      {showConfirm && idShowConfirm === orderItem.id && (
        <Confirm
          id={orderItem.id}
          handleConfirmYes={handleConfirmYes}
          handleConfirmNo={handleConfirmNo}
        />
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="modal-header-text"
          >
            Chi tiết đơn hàng
          </Typography>
          <Typography
            id="modal-modal-description"
            className="row"
            sx={{ mt: 2 }}
            variant="div"
            component="div"
          >
            <ModalOrderItem
              text={"Họ Tên : "}
              value={orderItem.InfoShip.nameUser}
            />
            <ModalOrderItem
              text={"Số điện thoại : "}
              value={orderItem.InfoShip.phone}
            />
            <ModalOrderItem
              text={"Địa chỉ: "}
              value={orderItem.InfoShip.address}
            />
            <ModalOrderItem
              text={"Thời gian đặt hàng : "}
              value={orderItem.timeOrder}
            />
            <ModalOrderItem
              text={"Tổng hóa đơn : "}
              value={orderItem.InfoShip.totalPrice}
            />

            <Typography
              className="col-12 modal_title"
              id="modal-modal-title"
              variant="h6"
              component="h6"
            >
              Danh sách sản phẩm :
            </Typography>
            <Typography
              className="table_container"
              id="modal-modal-title"
              variant="div"
              component="div"
            >
              <OrderTableProduct
                className="btn_confirm_order"
                cart={orderItem.cart}
              />
            </Typography>

            <Typography
              className="row "
              id="modal-modal-title"
              variant="div"
              component="div"
            >
              <Button
                className="col-4 btn-confirm-order"
                variant="outlined"
                onClick={handleConfirmOrder}
              >
                Xác nhận đơn hàng
              </Button>
              <Button
                className="col-3 btn-confirm-order"
                variant="outlined"
                onClick={handleClose}
              >
                Bỏ qua
              </Button>
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalOrder;
