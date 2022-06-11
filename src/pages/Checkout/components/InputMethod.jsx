import { useDispatch } from "react-redux";
import { setInfoShip } from "../../../actions/infoShip";

export function InputMethod({ payMethod, defaultChecked }) {
  const dispatch = useDispatch();
  if (defaultChecked) {
    return (
      <input
        type="radio"
        name="pay"
        value={payMethod?.nameMethod || ""}
        defaultChecked
        onChange={(e) => dispatch(setInfoShip({ payMethod: e.target.value }))}
      />
    );
  }
  return (
    <input
      type="radio"
      name="pay"
      value={payMethod?.nameMethod || ""}
      onChange={(e) => dispatch(setInfoShip({ payMethod: e.target.value }))}
    />
  );
}
