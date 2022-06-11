import React, { useState } from "react";
function ImageSize({ product }) {
  return (
    <div className="tab-describe row" id="tab1-content">
      <div className="col-12">
        <div className="image">
          {product.vender_value_image != "null" ? (
            <img
              src={`../${product.vender_value_image}`}
              alt="Ảnh Tthông số kích thước lựa chọn"
            />
          ) : (
            <p>Thông số sản phẩm đang được cập nhật !</p>
          )}
        </div>
      </div>
    </div>
  );
}
function WarrantyPolicy() {
  return (
    <div className="tab-describe">
      <i className="tab2-content__title">
        Nhằm giúp quý khách an tâm chọn lựa cho mình sản phẩm ưng ý và phục vụ
        khách hàng chu đáo, VLUXURY thông báo đến quý khách hàng CHÍNH SÁCH ĐỔI
        SẢN PHẨM chi tiết sau:
      </i>
      <ul className="policy-1">
        <li>
          <span className="margin-top-bottom-7 fontWeight-600">
            1.Thời gian ĐỔI sản phẩm
          </span>
          <ul className="padding-left-40">
            <li>Áp dụng 01 lần đổi/ 01 đơn hàng.</li>
            <li>
              Sản phẩm mua tại hệ thống Showroom Vluxury: Trong vòng 7 ngày kể
              từ ngày mua.
            </li>
            <li>
              Sản phẩm mua Online trên website Vluxury và các trang TMĐT: Trong
              vòng 365 ngày kể từ ngày mua.
            </li>
            <li> Ngày mua: là ngày ghi trên hóa đơn mua hàng.</li>
            <li>
              Loại sản phẩm áp dụng: sản phẩm nguyên giá và các sản phẩm sale{" "}
              {"<"} 50%.
            </li>
          </ul>
        </li>
        <li>
          <span className="margin-top-bottom-7 fontWeight-600">
            2.Điều kiện sản phẩm đạt yêu cầu đổi
          </span>
          <ul>
            <li>
              <span className="margin-top-bottom-7 fontWeight-500">
                1.1 Điều kiện ĐỔI:
              </span>
              <ul className="padding-left-40">
                <li>
                  Sản phẩm chưa qua sử dụng, còn nguyên tem mác, hóa đơn mua
                  hàng
                </li>
                <li>Sản phẩm thỏa mãn điều kiện của Thời hạn đổi sản phẩm</li>
                <li>
                  Sản phẩm đã qua sử dụng nhưng bị lỗi kỹ thuật do sản xuất.
                </li>
                <li>
                  Sản phâm không bị làm dơ, bẩn, hư hỏng bởi những tác nhân bên
                  ngoài sau khi mua sản phẩm.
                </li>
                <li>
                  Hàng hóa được xác định nguồn gốc mua tại Hệ thống Showroom
                  Vluxury và kênh bán hàng Online của Vluxury.
                </li>
              </ul>
            </li>
            <li>
              <span className="margin-top-bottom-7 fontWeight-500">
                2.2 Sản phẩm KHÔNG nhận ĐỔI:
              </span>
              <ul className="padding-left-40">
                <li>Sản phẩm đã sử dụng.</li>
                <li>Sản phẩm có mùi hóa mỹ phẩm.</li>
                <li>Sản phẩm quá thời hạn đổi.</li>
                <li>
                  Sản phẩm không còn tem mác, ma sát với vật cứng làm trầy xước,
                  hư hỏng.
                </li>
                <li>Không có hóa đơn mua hàng.</li>
              </ul>
            </li>
            <li>
              <span className="margin-top-bottom-7 fontWeight-500">
                2.3 Giá trị ĐỔI hàng
              </span>
              <ul className="padding-left-40">
                <li>
                  Sản phẩm đổi mới sẽ có giá trị ngang bằng hoặc lớn hơn giá trị
                  sản phẩm đã mua trước đó.
                </li>
                <li>
                  Trường hợp sản phẩm mới có giá trị cao hơn khách hàng phải trả
                  thêm phần tiền phát sinh thêm.
                </li>
                <li>
                  Trường hợp mua ưu đãi mà vẫn được đổi hàng theo quy chế chương
                  trình thì sản phẩm đổi cũng được ưu đãi giống như sản phẩm mua
                  lúc đầu nếu đang trong thời gian chương trình. Nếu đổi khi đã
                  hết thời gian chương trình thì phần chênh lệch giá giữa 2 sản
                  phẩm sẽ được tính nguyên giá.
                </li>
                <li>
                  Nếu sản phẩm đổi nằm trong bộ Combo (Kèm quà tặng) thì khi đổi
                  – sản phẩm quà tặng phải trả lại hoặc quy đổi sang giá trị
                  tương đương theo tem nhãn của quà tặng
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span className="margin-top-bottom-7 fontWeight-600">
            3.QUY ĐỊNH XỬ LÝ HÀNG ĐỔI
          </span>
          <ul>
            <li>
              <span className="margin-top-bottom-7 fontWeight-500">
                3.1 Quy định ĐỔI tại CỬA HÀNG
              </span>
              <ul className="padding-left-40">
                <li>
                  Khách hàng mang sản phẩm tới Showroom Vluxury nới Qúy khách
                  hàng mua hàng – Vluxury sẽ kiểm tra tình trạng sản phẩm và
                  tiến hành đổi hàng với những trường hợp sản phẩm đáp ứng tiêu
                  chí của điều kiện đổi hàng trong chính sách đã cam kết.
                </li>
                <li>
                  Mọi thắc mắc về quy định chung tại cửa hàng vui lòng liên hệ
                  <span className="margin-right-5">Hotline:</span>
                  <span className="colorOrange">0999996789</span>
                  <span className="margin-left-right-5">hoặc Email:</span>
                  <span className="colorOrange">vluxury@gmail.com</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="margin-top-bottom-7 fontWeight-500">
                3.2 Quy định ĐỔI hàng khi mua Online
              </span>
              <ul className="padding-left-40">
                <li>
                  Bước 1:
                  <span className="margin-right-5">Liên hệ tổng đài</span>
                  <span className="colorOrange">0999996789</span>
                  <span className="margin-left-right-5">
                    để ĐĂNG KÝ đổi hàng.
                  </span>
                </li>
                <li>
                  Bước 2: Gửi hàng về địa chỉ kho ONLINE VLUXURY, Số 19 - Chùa
                  Bộc, Đống Đa, Hà Nội
                </li>
                <li>
                  Bước 3: VLUXURY gửi đổi sản phẩm mới khi nhận được hàng. Trong
                  trường hợp hết hàng, VLUXRY sẽ liên hệ xác nhận.
                </li>
                <li>
                  Lưu ý: Kho Online không nhận giữ hàng trong thời gian khách
                  hàng gửi sản phẩm về để đổi hàng.
                </li>
                <li>
                  Mọi thắc mắc về quy định đổi hàng khi mua Online vui lòng liên
                  hệ HOTLINE:
                  <span className="colorOrange"> 0999996789</span>
                  <span className="margin-left-right-5">hoặc Email:</span>
                  <span className="colorOrange">vluxury@gmail.com</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
function SizeSpecification({ product }) {
  const tabs = ["Thông số", "Bảo Hành"];
  const [tab, setTab] = useState(tabs[0]);
  return (
    <section id="sizeSpecification">
      <div className="container">
        <div className="tab_list d-flex">
          <div
            className={
              tab == tabs[0]
                ? "tab tab__btn-header tab-activity"
                : "tab tab__btn-header"
            }
            id="tab1"
            onClick={() => setTab(tabs[0])}
          >
            {tabs[0]}
          </div>
          <div
            className={
              tab == tabs[1]
                ? "tab tab__btn-header tab-activity"
                : "tab tab__btn-header"
            }
            id="tab2"
            onClick={() => setTab(tabs[1])}
          >
            {tabs[1]}
          </div>
        </div>
        <div className="tab-content">
          {tab == tabs[0] ? (
            <ImageSize product={product} />
          ) : (
            <WarrantyPolicy />
          )}
        </div>
      </div>
    </section>
  );
}

export default SizeSpecification;
