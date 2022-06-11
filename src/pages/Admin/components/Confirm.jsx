import React from "react";

export function Confirm({ handleConfirmYes, handleConfirmNo, id }) {
  return (
    <div className="confirm">
      <div className="confirm-title">Bạn có chắc chắn muốn xóa không ?</div>
      <div className="btn-confirm">
        <div
          className="confirm-sellect"
          onClick={(e) => handleConfirmYes(e, id)}
        >
          <button>Có</button>
        </div>
        <div
          className="confirm-sellect"
          onClick={(e) => handleConfirmNo(e, id)}
        >
          <button> Không</button>
        </div>
      </div>
    </div>
  );
}
