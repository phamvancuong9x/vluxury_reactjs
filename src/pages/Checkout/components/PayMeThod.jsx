import { useDispatch, useSelector } from "react-redux";
import addToCartSlice from "../../../redux/slice/addToCartSlice";
import infoShipSlice from "../../../redux/slice/infoShipSlice";
import getTimeCurrent from "../../Admin/components/getTimeCurrent";
import { WriteOrderData, payMethodArray } from "./constant";
import { InputMethod } from "./InputMethod";

export function PayMeThod({ setShowContent, total_price }) {
  const time = new Date();
  const id = time.getTime();
  const InfoShip = useSelector((state) => state.infoShips);
  const cart = useSelector((state) => state.add_cart);
  const dispatch = useDispatch();
  console.log(id);
  const handleBuyProduct = () => {
    dispatch(
      infoShipSlice.actions.changeInfoShip({ id, totalPrice: total_price })
    );
    const action = addToCartSlice.actions.DELETE_All_PRODUCT();
    dispatch(action);
    setShowContent("modalActive");
    const newInfoShip = { ...InfoShip, totalPrice: total_price };
    WriteOrderData(id, {
      id,
      InfoShip: newInfoShip,
      cart,
      timeOrder: getTimeCurrent(),
    });
    localStorage.setItem("cart", "[]");
  };
  return (
    <section className="payment-methods">
      <div className="payment-methods__title">Phương thức thanh toán</div>
      <ul>
        {payMethodArray?.map((payMethod, i) => {
          return (
            <li key={i}>
              <label>
                {payMethod.defaultChecked ? (
                  <InputMethod
                    payMethod={payMethod}
                    defaultChecked={payMethod.defaultChecked}
                  />
                ) : (
                  <InputMethod payMethod={payMethod} />
                )}
                <img src={payMethod.icon} alt="Ảnh icon" />
                <div className="pay-name">{payMethod.nameMethod}</div>
              </label>
            </li>
          );
        })}
      </ul>
      <div className="payment-methods__footer">
        <div className="step-prev" onClick={() => setShowContent("infoShip")}>
          Trở lại thông tin vận chuyển
        </div>
        <div className="payment-methods__btn-buy" onClick={handleBuyProduct}>
          Đặt hàng
        </div>
      </div>
    </section>
  );
}
