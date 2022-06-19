import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import provincesApi from "../../../api/provincesApi";
import infoShipSlice from "../../../redux/slice/infoShipSlice";

export function InfoShip({ setShowContent }) {
  const ckeckLogin = JSON.parse(sessionStorage.getItem("stateLogin") || false);
  console.log(ckeckLogin);
  const [provincesList, setProvincesList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [wardsList, setWardsList] = useState([]);
  const [districtParams, setDistrictParams] = useState();
  const [wardsParams, setWardsParams] = useState();
  const infoShip = useSelector((state) => state.infoShips);
  const handleClick = () => {
    sessionStorage.setItem("switchPage", "/checkout");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const provincesList = await provincesApi.getAll("/?depth=1");
        setProvincesList(provincesList);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    setDistrictList([]);
    setWardsList([]);
    if (!districtParams) return;
    (async () => {
      try {
        const DistrictList = await provincesApi.getAll(
          `p/${districtParams}?depth=2`
        );
        setDistrictList(DistrictList.districts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [districtParams]);
  useEffect(() => {
    setWardsList([]);

    if (!districtParams || !wardsParams || wardsParams == "default") return;
    (async () => {
      try {
        const WardsList = await provincesApi.getAll(`d/${wardsParams}?depth=2`);
        setWardsList(WardsList.wards);
      } catch (error) {}
    })();
  }, [wardsParams]);

  const handleGetProvinces = (e) => {
    setDistrictParams(e.target.value);
  };

  return (
    <section className="info-ship">
      <div className="info-ship__title"> Thông tin vận chuyển</div>
      {!ckeckLogin && (
        <div className="linkToLoginPage">
          Bạn đã có tài khoản?
          <Link
            to="/login"
            className="link-login-checkout"
            title="title"
            onClick={handleClick}
          >
            Đăng nhập
          </Link>
        </div>
      )}
      <div className="info-ship__input">
        <input
          type="text"
          value={infoShip.nameUser}
          placeholder="Họ và tên"
          id="name"
          onChange={(e) =>
            dispatch(
              infoShipSlice.actions.changeInfoShip({ nameUser: e.target.value })
            )
          }
        />
        <div className="info-contact">
          <div className="row">
            <div className="col-12 col-sm-8">
              <input
                type="email"
                name="email"
                value={infoShip.email}
                id="email"
                placeholder="Email"
                required
                onChange={(e) =>
                  dispatch(
                    infoShipSlice.actions.changeInfoShip({
                      email: e.target.value,
                    })
                  )
                }
              />
            </div>
            <div className="col-12 col-sm-4">
              <input
                name="phone-number"
                id="phone-number"
                placeholder="Điện thoại"
                required
                maxLength="15"
                value={infoShip.phone}
                onChange={(e) =>
                  dispatch(
                    infoShipSlice.actions.changeInfoShip({
                      phone: e.target.value,
                    })
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="info-ship__address">
          <input
            type="text"
            value={infoShip.address}
            placeholder="Địa chỉ"
            id="address"
            onChange={(e) =>
              dispatch(
                infoShipSlice.actions.changeInfoShip({
                  address: e.target.value,
                })
              )
            }
          />
        </div>
        <div className="info-ship__address">
          <div className="row">
            <div className="col-12 col-sm-4">
              <select
                className="provinces"
                onChange={(e) => handleGetProvinces(e)}
              >
                <option value="default"> Chọn Tỉnh Thành</option>
                {provincesList?.map((province, i) => {
                  return (
                    <option value={province.code} key={i}>
                      {" "}
                      {province.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-12 col-sm-4">
              <select
                className="district"
                onChange={(e) => setWardsParams(e.target.value)}
              >
                <option value="default"> Chọn Quận/Huyện</option>
                {districtList?.map((district, i) => {
                  return (
                    <option value={district.code} key={i}>
                      {" "}
                      {district.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-12 col-sm-4">
              <select className="wards">
                <option value="default"> Chọn Xã </option>
                {wardsList?.map((wards, i) => {
                  return (
                    <option value={wards.code} key={i}>
                      {" "}
                      {wards.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="info-ship__footer">
        <Link to="/cart" title="title">
          Giỏ hàng
        </Link>
        <div
          className="info-ship__footer-btn"
          onClick={() => setShowContent("payMethod")}
        >
          Phương thức thanh toán
        </div>
      </div>
    </section>
  );
}
