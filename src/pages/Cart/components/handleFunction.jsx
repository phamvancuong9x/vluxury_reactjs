// hàm chuển giá tiền từ dạng số dang dạng chuỗi có đấu phảy;
export function stringToNumberMoney(numberMoney) {
  const stringMoneyStart = numberMoney.toString();
  let count = 0;
  let term = "";
  let stringMoneyEnd = "";
  for (let i = stringMoneyStart.length - 1; i >= 0; i--) {
    count++;
    if (count == 4) {
      count = 0;
      term += ",";
      i++;
    } else {
      term += stringMoneyStart[i];
    }
  }
  for (let i = term.length - 1; i >= 0; i--) {
    stringMoneyEnd += term[i];
  }
  return stringMoneyEnd + "₫";
}

export const totalPrice = (ProductCartList) => {
  const sum = ProductCartList.reduce((total, product) => {
    return total + product.priceNumber * product.quantity;
  }, 0);
  return sum;
};
