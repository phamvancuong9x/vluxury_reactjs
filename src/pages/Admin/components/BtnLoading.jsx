import { LoadingButton } from "@mui/lab";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";

function BtnLoading({ btnName }) {
  return (
    <LoadingButton
      loading
      loadingPosition="start"
      startIcon={<SaveIcon />}
      variant="outlined"
    >
      {btnName}
    </LoadingButton>
  );
}

export default BtnLoading;
