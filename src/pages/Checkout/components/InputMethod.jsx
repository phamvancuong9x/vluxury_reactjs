import { useDispatch } from "react-redux";
import infoShipSlice from "../../../redux/slice/infoShipSlice";

export function InputMethod({ payMethod, defaultChecked }) {
  const dispatch = useDispatch();
  if (defaultChecked) {
    return (
      <input
        type="radio"
        name="pay"
        value={payMethod?.nameMethod || ""}
        defaultChecked
        onChange={(e) =>
          dispatch(
            infoShipSlice.actions.changeInfoShip({ payMethod: e.target.value })
          )
        }
      />
    );
  }
  return (
    <input
      type="radio"
      name="pay"
      value={payMethod?.nameMethod || ""}
      onChange={(e) =>
        dispatch(
          infoShipSlice.actions.changeInfoShip({ payMethod: e.target.value })
        )
      }
    />
  );
}
