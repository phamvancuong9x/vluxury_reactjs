import { getDatabase, ref, remove, set } from "firebase/database";

const db = getDatabase();
export const payMethodArray = [
  {
    icon: "assets/image/image_product-detail/icon/cod.svg",
    nameMethod: "Thanh toán khi giao hàng (COD)",
    defaultChecked: true,
  },
  {
    icon: "assets/image/image_product-detail/icon/other.svg",
    nameMethod: "Chuyển khoản qua ngân hàng",
    defaultChecked: false,
  },
  {
    icon: "assets/image/image_product-detail/icon/vnpay_new.svg",
    nameMethod: "Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY",
    defaultChecked: false,
  },
  {
    icon: "assets/image/image_product-detail/icon/grabmoca.svg",
    nameMethod: "Ví Moca trên ứng dụng Grab",
    defaultChecked: false,
  },
  {
    icon: "assets/image/image_product-detail/icon/momo.svg",
    nameMethod: "Ví Momo",
    defaultChecked: false,
  },
  {
    icon: "assets/image/image_product-detail/icon/shopeepay_new.svg",
    nameMethod: "Ví ShopeePay",
    defaultChecked: false,
  },
];
export const tabs = ["infoShip", "payMethod", "modalActive"];

// gui du lieu
export function WriteUserData(id, data) {
  set(ref(db, "user/" + id), data);
}
export function WriteDataChange(data) {
  set(ref(db, "dataChange/"), data);
}
export function WriteOrderData(id, data) {
  set(ref(db, "order/" + id), data);
}
export function WriteOrderShow(data) {
  set(ref(db, "orderShow/"), data);
}
export function WriteOrderCannel(id, data) {
  set(ref(db, "orderCannel/" + id), data);
}
export function WriteOrderConfirm(id, data) {
  set(ref(db, "orderConfirm/" + id), data);
}

// xoa du lieu
export function DeleteData(linkHref, id) {
  remove(ref(db, linkHref + id));
}
// xoa du lieu
export function DeleteDataAll(linkHref) {
  remove(ref(db, linkHref));
}
