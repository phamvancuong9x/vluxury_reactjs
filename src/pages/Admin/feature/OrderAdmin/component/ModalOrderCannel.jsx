import {
  Box,
  Button,
  Modal,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import adminSlice from "../../../../../redux/slice/adminSlice";
import alertSlice from "../../../../../redux/slice/alertSlice";
import {
  DeleteData,
  WriteOrderCannel,
} from "../../../../Checkout/components/constant";
import getTimeCurrent from "../../../components/getTimeCurrent";

function ModalOrderCannel({ orderItem }) {
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
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.admin.orderList);
  const [reason, setReason] = useState("");
  const [showError, setShowError] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirmYes = () => {
    if (reason.trim() === "") {
      setShowError(true);
      return;
    }
    WriteOrderCannel(time.getTime(), {
      ...orderItem,
      reason,
      orderItem,
      timeOrder: getTimeCurrent(),
    });
    DeleteData("/orderShow/", orderItem.id);
    let newOrderList = orderList?.filter((data) => {
      return data.id !== orderItem.id;
    });
    if (newOrderList?.length === 0) {
      newOrderList = null;
    }
    if (newOrderList) {
      dispatch(adminSlice.actions.changeOrderList(newOrderList));
    }

    dispatch(
      alertSlice.actions.changeAlert({
        showAlert: true,
        alertContent: "Hủy thành công",
      })
    );
  };
  return (
    <>
      <Button color="primary" variant="outlined" onClick={handleOpen}>
        Hủy Đơn Hàng
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Xác nhận hủy đơn hàng
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Typography className="row" variant="span" component="span">
              <Typography className="col-3" variant="span" component="span">
                Lý do
              </Typography>
              <Typography className="col-9" variant="span" component="span">
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  style={{ width: 400 }}
                  onChange={(e) => setReason(e.target.value)}
                />
                {showError && (
                  <Typography
                    className="reason-error"
                    variant="span"
                    component="span"
                  >
                    Vui lòng nhập lý do (Bắt buộc)
                  </Typography>
                )}
              </Typography>
            </Typography>
            <Typography className="row " variant="span" component="span">
              <Button
                className="col-3 btn-confirm-order"
                variant="contained"
                onClick={handleConfirmYes}
              >
                Xác nhận
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
    </>
  );
}

export default ModalOrderCannel;
