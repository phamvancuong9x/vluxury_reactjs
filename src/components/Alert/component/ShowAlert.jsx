import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Success } from "..";
import alertSlice from "../../../redux/slice/alertSlice";
function ShowAlertSuccess() {
  const showAlert = useSelector((state) => state.alert.showAlert);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(
        alertSlice.actions.changeAlert({
          showAlert: false,
          alertContent: "",
          showAlertError: false,
          alertContentError: "",
        })
      );
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, [showAlert]);
  return (
    <div className={showAlert ? "alert active-alert" : "alert"}>
      <Success />
    </div>
  );
}

export default ShowAlertSuccess;
