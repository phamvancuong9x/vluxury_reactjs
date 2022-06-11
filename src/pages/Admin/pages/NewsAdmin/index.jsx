import React, { useEffect, useState } from "react";
import newApi from "../../../../api/newsApi";
import Loading from "../../../../components/Loading";
import AdminContainer from "../../components/AdminContainer";
import TableInfo from "../../components/TableInfo";
import ModalNews from "./components/ModalNews";
import "./styles.scss";
function NewsAdmin({ tab, isChange, setIsChange }) {
  const [newsList, setNewsList] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      (async () => {
        const list = await newApi.get();
        setNewsList(list);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [isChange]);
  return (
    <AdminContainer title={tab}>
      {loading && <Loading />}
      <TableInfo
        tab={tab}
        type="news"
        Data={newsList}
        isChange={isChange}
        setIsChange={setIsChange}
      >
        <ModalNews isChange={isChange} setIsChange={setIsChange} />
      </TableInfo>
    </AdminContainer>
  );
}

export default NewsAdmin;
