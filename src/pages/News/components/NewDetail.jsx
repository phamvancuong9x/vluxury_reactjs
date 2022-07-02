import { NewDescription1, NewDescription2 } from "./data";
import TimeArticleDate from "./TimeArtcleDate";

function NewDetail({ newDetail, idNewDetail }) {
  console.log(newDetail);
  if (newDetail?.length === 0 || newDetail === undefined) return <></>;
  return (
    <div className="news-detail">
      <h1 className="news-title">{newDetail[0].name}</h1>
      <TimeArticleDate newItem={newDetail[0]} />
      <div className="news-detail-description" style={{ marginTop: "25px " }}>
        {idNewDetail === "n6" && <NewDescription1 />}
        {idNewDetail !== "n6" && <NewDescription2 />}
      </div>
    </div>
  );
}

export default NewDetail;
