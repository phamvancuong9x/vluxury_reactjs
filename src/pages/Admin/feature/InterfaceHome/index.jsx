import React, { useState } from "react";
import Loading from "../../../../components/Loading";
import AdminContainer from "../../components/AdminContainer";
import TableInfo from "../../components/TableInfo";
import Modals from "./conponents/Modals";

function InterfaceHome({
  tab,
  sliderData,
  bannerSaleData,
  isChange,
  setIsChange,
  loading,
}) {
  let renderData = [];
  const tabsData = ["Ảnh slider", "Ảnh sale"];
  const [tabs, setTabs] = useState(tabsData[0]);

  if (!sliderData) return <></>;
  if (tabs === tabsData[0]) {
    renderData = [...sliderData];
  } else {
    renderData = [...bannerSaleData];
  }

  return (
    <AdminContainer title={tab}>
      {loading && <Loading />}
      <div className="d-flex justify-content-center">
        {tabsData.map((data, i) => {
          return (
            <button
              className={tabs == data ? "btn-active" : ""}
              style={{
                textAlign: "center",
                margin: "0 20px 20px 0  ",
                padding: "5px 20px",
              }}
              key={i}
              onClick={() => {
                setTabs(data);
              }}
            >
              {data}
            </button>
          );
        })}
      </div>

      <TableInfo
        tab={tab}
        type="home"
        Data={renderData}
        isChange={isChange}
        setIsChange={setIsChange}
      >
        <Modals
          isChange={isChange}
          setIsChange={setIsChange}
          tabs={tabs}
          tabsData={tabsData}
        />
      </TableInfo>
    </AdminContainer>
  );
}

export default InterfaceHome;
