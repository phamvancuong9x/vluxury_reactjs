import React from "react";

function ProductQuantityInput({ quantity, setQuantity }) {
  const handleChangeQuantity = (e) => {
    if (Number.isInteger(+e.target.value) == false || +e.target.value <= 0) {
      return setQuantity(1);
    }
    setQuantity(+e.target.value);
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity == 1) return;
    setQuantity(quantity - 1);
  };
  return (
    <div className="detailProduct__quantity-input">
      <form action="#">
        <input
          type="text"
          value={quantity}
          name="quantity"
          id="quantity"
          pattern="[0-9]*"
          min="0"
          maxLength="3"
          required
          onChange={(e) => handleChangeQuantity(e)}
        />
      </form>
      <span className="icon-minus icon-quantity" onClick={handleDecrease}>
        <i className="fas fa-minus"></i>
      </span>
      <span className="icon-plus icon-quantity" onClick={handleIncrease}>
        <i className="fas fa-plus"></i>
      </span>
    </div>
  );
}

export default ProductQuantityInput;
