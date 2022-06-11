import { useDispatch } from "react-redux";
import { deleteAllProduct } from "../../../actions/addToCart";
import { setInfoShip } from "../../../actions/infoShip";
import { payMethodArray } from "./constant";
import { InputMethod } from "./InputMethod";

export function PayMeThod({ setShowContent, total_price }) {
  const dispatch = useDispatch();

  const handleBuyProduct = () => {
    dispatch(setInfoShip({ totalPrice: total_price }));
    const action = deleteAllProduct();
    dispatch(action);
    setShowContent("modalActive");
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
