import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

function InfoUser() {
  const UserInfo = useSelector((state) => state.users);

  const [email, setEmail] = useState(UserInfo.email);
  return (
    <div className="container container-userInfo">
      <div className="row">
        <ul className="sidebar-menu col-lg-2">
          <li className="sidebar-item">
            <div className="sidebar__avatar-image">
              <img
                src={
                  UserInfo.imageUser || "assets/image/image_home/anhdaidien.jpg"
                }
                alt="avatar-image"
              />
            </div>
            <div className="sidebar__user-name">{UserInfo.nameUser}</div>
          </li>
          <li className="sidebar-item">
            <img src="assets/image/image_home/icon1.png" alt="" />
            Tài khoản của tôi
          </li>
          <li className="sidebar-item">
            <img src="assets/image/image_home/icon.png" alt="" /> Đơn mua
          </li>
        </ul>
        <div className="my-profile col-lg-10">
          <div className="user__title">
            <div
              className="user__text"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              Hồ sơ của tôi{" "}
            </div>
            <div className="user__text">
              Quản lý thông tin hồ sơ để bảo mật tài khoản
            </div>
          </div>
          <div className="user__main container-fluid">
            <div className="row">
              <div className="col-md-8">
                <form
                  className="container-fluid"
                  action=""
                  style={{ padding: "0 6px" }}
                >
                  <div className="data-item row">
                    <label className="col-12 col-sm-4" htmlFor="name">
                      <span className="name__title"> Tên đăng nhập</span>
                    </label>
                    <div className="col-12 col-sm-8">
                      <p id="name">{UserInfo.nameUser}</p>
                    </div>
                  </div>
                  <div className="data-item row">
                    <label className="col-12 col-sm-4" htmlFor="email">
                      <span className="email__title">Email </span>
                    </label>
                    <div className="col-12 col-sm-8">
                      <input
                        id="email"
                        value={email}
                        type="text"
                        name=""
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="data-item row">
                    <label className="col-12 col-sm-4" htmlFor="phone">
                      <span className="phone__title">Số điện thoại</span>
                    </label>
                    <div className="col-12 col-sm-8">
                      <input id="phone" type="text" name="" />
                    </div>
                  </div>
                  <div className="data-item row gender">
                    <div className="gender__title col-12 col-sm-4">
                      <span> Giới tính</span>
                    </div>
                    <div className="gender__option col-12 col-sm-8">
                      <label className="gender-item" htmlFor="male">
                        <input id="male" type="radio" name="gender" />
                        <span>Nam</span>
                      </label>
                      <label className="gender-item" htmlFor="female">
                        <input id="female" type="radio" name="gender" />
                        <span>Nữ</span>
                      </label>
                      <label className="gender-item" htmlFor="gender-other">
                        <input id="gender-other" type="radio" name="gender" />
                        <span>Khác</span>
                      </label>
                    </div>
                  </div>
                  <div className="data-item dateOfBirth row">
                    <div className="dateOfBirth__title col-12 col-sm-4">
                      <span> Ngày sinh</span>
                    </div>
                    <div className="dateOfBirth__select col-12 col-sm-8">
                      <select id="date" onChange={(e) => e.target.value}>
                        <option value="">Ngày</option>
                        {Array(30)
                          .fill(null)
                          .map((value, i) => {
                            return (
                              <option value={i + 1} key={i}>
                                {i + 1}
                              </option>
                            );
                          })}
                      </select>
                      <select id="month" onChange={(e) => e.target.value}>
                        <option value="">Tháng</option>
                        {Array(11)
                          .fill(null)
                          .map((value, i) => {
                            return (
                              <option value={i + 1} key={i}>
                                {i + 1}
                              </option>
                            );
                          })}
                      </select>
                      <select id="year" onChange={(e) => e.target.value}>
                        <option value="">Năm</option>
                        {Array(50)
                          .fill(null)
                          .map((value, i) => {
                            return (
                              <option value={2022 - i} key={i}>
                                {2022 - i}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                  <div className="data-item row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8">
                      <div className="btn__save">Lưu</div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-4">
                <div className="change-avatar">
                  <div className="change-avatar__image">
                    <img
                      src={
                        UserInfo.imageUser ||
                        "assets/image/image_home/anhdaidien.jpg"
                      }
                      alt="image avatar"
                    />
                  </div>
                  <label className="btn__change-image" htmlFor="file">
                    <span>Chọn ảnh</span>
                  </label>
                  <input
                    id="file"
                    type="file"
                    name=""
                    style={{ display: "none" }}
                  />
                  <div className="input__describer">
                    <p>Kích thước tối thiểu 150x150px.</p>
                    <p>Định dạng jpg hoặc png.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="modal">
    //   <div className="modal__container">
    //     <div className="modal__icon"><i className="far fa-check-circle"></i></div>
    //     <p className="modal__notify">Đã cập nhật thông tin</p>
    //   </div>
    // </div>
  );
}

export default InfoUser;
