import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "..";

import alertSlice from "../../../redux/slice/alertSlice";
function ShowAlertError() {
  const showAlert = useSelector((state) => state.alert);

  return (
    <div className={showAlert.showAlertError ? "alert active-alert" : "alert"}>
      <Error text={showAlert.alertContentError} />
    </div>
  );
}

export default ShowAlertError;
