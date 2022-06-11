export function ProductCartShow({ text, showProductCart, setShowProductCart }) {
  return (
    <div
      className="toggle-product-cart__show"
      onClick={() => {
        setShowProductCart(!showProductCart);
      }}
    >
      {text}
    </div>
  );
}
