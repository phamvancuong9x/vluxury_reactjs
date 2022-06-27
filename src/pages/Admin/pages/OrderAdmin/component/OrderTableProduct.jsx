import { Typography } from "@mui/material";
import { stringToNumberMoney } from "../../../../Cart/components/handleFunction";

export function TypographyCustom({ tagName, text = false, children }) {
  return (
    <Typography variant={tagName} component={tagName}>
      {text}
      {children}
    </Typography>
  );
}

export function OrderTableProduct({ cart }) {
  return (
    <TypographyCustom tagName="table">
      <TypographyCustom tagName="thead">
        <TypographyCustom tagName="tr">
          <TypographyCustom tagName="th" text="STT" />
          <TypographyCustom tagName="th" text="Tên sản phẩm" />
          <TypographyCustom tagName="th" text="Số lượng" />
          <TypographyCustom tagName="th" text="Giá" />
        </TypographyCustom>
      </TypographyCustom>
      <TypographyCustom tagName="tbody">
        {cart?.map((cartItem, i) => {
          return (
            <TypographyCustom tagName="tr" key={i}>
              <TypographyCustom tagName="td" text={i + 1} />
              <TypographyCustom tagName="td" text={cartItem.nameProduct} />
              <TypographyCustom tagName="td" text={cartItem.quantity} />
              <TypographyCustom
                tagName="td"
                text={stringToNumberMoney(
                  cartItem.priceNumber * cartItem.quantity
                )}
              />
            </TypographyCustom>
          );
        })}
      </TypographyCustom>
    </TypographyCustom>
  );
}
