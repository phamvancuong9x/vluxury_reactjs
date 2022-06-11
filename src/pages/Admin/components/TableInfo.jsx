import { Button } from "@mui/material";
import React, { useState } from "react";
import categoryApi from "../../../api/categoryApi";
import homeApi from "../../../api/homeApi";
import newApi from "../../../api/newsApi";
import Image from "../../../components/Image";
import BtnLoading from "./BtnLoading";
import { Confirm } from "./Confirm";

function TableInfo({ type, Data, isChange, setIsChange, children }) {
  const [idShowConfirm, setIdShowConfirm] = useState();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  if (!Data) return <></>;
  const handleConfirmYes = (e, id) => {
    e.stopPropagation();
    setBtnLoading(true);
    setShowConfirmDelete(false);
    handleDelete(id);
  };
  const handleConfirmNo = (e) => {
    e.stopPropagation();
    setShowConfirmDelete(false);
    setIdShowConfirm(null);
  };
  const handleSHowConfirm = (id) => {
    setShowConfirmDelete(true);
    setIdShowConfirm(id);
  };
  const handleDelete = (id) => {
    (async () => {
      try {
        if (type === "home") {
          await homeApi.removeSlider(id);
        } else if (type === "categoryProduct") {
          await categoryApi.remove(id);
        } else if (type === "news") {
          await newApi.remove(id);
        }

        setIsChange(!isChange);
        setTimeout(() => {
          setBtnLoading(false);
        });
      } catch (error) {}
    })();
  };
  return (
    <div className="row admin-container-content">
      <div className="add-slider">{children}</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Hình ảnh</th>
            <th>Thông tin</th>
            <th>Ngày tạo</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((dataItem) => {
            return (
              <tr key={dataItem.id}>
                <td>{dataItem.id}</td>
                <td>
                  <Image
                    srcImage={
                      dataItem.image_slider_desktop ||
                      dataItem.image ||
                      dataItem.imageProduct[1]
                    }
                  />
                </td>
                <td>
                  <p>{dataItem.name_product || dataItem.name || "Không có"}</p>
                  {dataItem.typeProduct && (
                    <p>{`Loại sản phẩm : ${dataItem.typeProduct}`}</p>
                  )}
                  {dataItem.price_product && (
                    <b>{`Giá tiền : ${dataItem.price_product}`}</b>
                  )}
                </td>
                <td>
                  <p>{dataItem.article_date}</p>
                </td>

                <td className={"delete"}>
                  {(btnLoading && idShowConfirm !== dataItem.id && (
                    <Button color="primary" variant="outlined" disabled>
                      Xóa
                    </Button>
                  )) ||
                    (idShowConfirm !== dataItem.id && (
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={(e) => {
                          handleSHowConfirm(dataItem.id);
                        }}
                      >
                        Xóa
                      </Button>
                    ))}
                  {btnLoading && idShowConfirm === dataItem.id && (
                    <BtnLoading btnName={"Xóa"} />
                  )}

                  {showConfirmDelete && idShowConfirm === dataItem.id && (
                    <Confirm
                      id={dataItem.id}
                      handleConfirmYes={handleConfirmYes}
                      handleConfirmNo={handleConfirmNo}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableInfo;
