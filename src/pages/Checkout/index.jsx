import { useState } from "react";
import { useSelector } from "react-redux";
import {
  stringToNumberMoney,
  totalPrice,
} from "../Cart/components/handleFunction";
import { CheckoutOrder } from "./components/CheckoutOrder";
import { tabs } from "./components/constant";
import { InformationOrder } from "./components/InformationOrder";
import { ModalOrder } from "./components/ModalOrder";
import "./styles.scss";

function Checkout() {
  const [showContent, setShowContent] = useState(tabs[0]);
  const ProductListCart = useSelector((state) => state.add_cart);
  const total_price = stringToNumberMoney(totalPrice(ProductListCart));
  return (
    <div className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <InformationOrder
              ProductListCart={ProductListCart}
              total_price={total_price}
            />
          </div>
          <div className="col-12 col-lg-7">
            <CheckoutOrder
              showContent={showContent}
              setShowContent={setShowContent}
              total_price={total_price}
            />
          </div>
        </div>
      </div>
      <ModalOrder showContent={showContent} />
    </div>
  );
}

export default Checkout;
