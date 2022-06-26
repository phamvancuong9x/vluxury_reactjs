import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

function ModalOrderReason({ orderItem }) {
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button color="primary" variant="outlined" onClick={handleOpen}>
        Lý do hủy
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Lý do hủy đơn hàng
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Typography className="row" variant="span" component="span">
              <Typography className="col-3" variant="span" component="span">
                Lý do
              </Typography>
              <Typography className="col-9" variant="span" component="span">
                {orderItem.reason}
              </Typography>
            </Typography>
            <Typography className="row " variant="span" component="span">
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

export default ModalOrderReason;
