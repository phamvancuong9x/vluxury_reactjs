import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";

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
