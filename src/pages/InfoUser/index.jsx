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
                alt="avatar_image"
              />
            </div>
            <div className="sidebar__user-name">{UserInfo.nameUser}</div>
          </li>
          <li className="sidebar-item">
            <img src="assets/image/image_home/icon1.png" alt="" />
            Tài khoản của tôi
          </li>
        </ul>
        <div className="my-profile col-lg-10">
          <div className="user__title">
            <div
              className="user__text"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              Hồ sơ của tôi
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
                  <div className="data-item row">
                    <label className="col-12 col-sm-4" htmlFor="address">
                      <span className="address__title">Địa chỉ</span>
                    </label>
                    <div className="col-12 col-sm-8">
                      <input id="address" type="text" name="address" />
                    </div>
                  </div>

                  <div className="data-item row">
                    <div className="col-lg-12">
                      <div className="btn__save">Cập nhật</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoUser;
