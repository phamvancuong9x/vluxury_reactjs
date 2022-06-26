import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import adminSlice from "../../../../../redux/slice/adminSlice";
import alertSlice from "../../../../../redux/slice/alertSlice";
import {
  DeleteData,
  WriteOrderConfirm,
} from "../../../../Checkout/components/constant";
import getTimeCurrent from "../../../components/getTimeCurrent";
import { OrderTableProduct } from "./OrderTableProduct";

function ModalOrderItem({ text, value }) {
  return (
    <>
      <Typography className="col-4 modal_title" variant="p" component="p">
        {text}
      </Typography>
      <Typography className="col-8" variant="p" component="p">
        {value}
      </Typography>
    </>
  );
}

function ModalOrder({ orderItem, confirm = true }) {
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
  const time = new Date();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.admin.orderList);

  if (!orderItem) return <></>;

  const handleConfirmOrder = () => {
    handleClose();
    DeleteData("/orderShow/", orderItem.id);
    WriteOrderConfirm(time.getTime(), {
      ...orderItem,
      timeOrder: getTimeCurrent(),
    });
    let newOrderList = orderList.filter((data) => {
      return data.id !== orderItem.id;
    });
    if (newOrderList.length === 0) {
      newOrderList = null;
    }
    dispatch(adminSlice.actions.changeOrderList(newOrderList));
    dispatch(
      alertSlice.actions.changeAlert({
        showAlert: true,
        alertContent: "Xác nhận thành công",
      })
    );
  };

  return (
    <div className="ModalDetailOrder">
      <Button color="primary" variant="contained" onClick={handleOpen}>
        Xem đơn hàng
      </Button>

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
            {" "}
            <ModalOrderItem text={"Mã đơn hàng : "} value={orderItem.id} />
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
              variant="h6"
              component="h6"
            >
              Danh sách sản phẩm :
            </Typography>
            <Typography
              className="table_container"
              variant="div"
              component="div"
            >
              <OrderTableProduct
                className="btn_confirm_order"
                cart={orderItem.cart}
              />
            </Typography>
            {confirm && (
              <Typography className="row " variant="div" component="div">
                <Button
                  className="col-4 btn-confirm-order"
                  variant="contained"
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
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalOrder;
