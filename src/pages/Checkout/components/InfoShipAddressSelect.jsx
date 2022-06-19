import { useEffect, useState } from "react";
import provincesApi from "../../../api/provincesApi";
import { SelectAddress } from "./SelectAddress";

export function InfoShipAddressSelect() {
  const [provincesList, setProvincesList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [wardsList, setWardsList] = useState([]);
  const [districtParams, setDistrictParams] = useState();
  const [wardsParams, setWardsParams] = useState();

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
  const handleGetWardsParams = (e) => setWardsParams(e.target.value);
  const handleChange = (e) => {};

  return (
    <div className="info-ship__address">
      <div className="row">
        <div className="col-12 col-sm-4">
          <SelectAddress
            addressList={provincesList}
            onChange={handleGetProvinces}
            className="provinces"
            titleName="Chọn Tỉnh Thành"
          />
        </div>
        <div className="col-12 col-sm-4">
          <SelectAddress
            addressList={districtList}
            onChange={handleGetWardsParams}
            className="district"
            titleName="Chọn Quận/Huyện"
          />
        </div>
        <div className="col-12 col-sm-4">
          <SelectAddress
            addressList={wardsList}
            onChange={handleChange}
            className="wards"
            titleName="Chọn Xã"
          />
        </div>
      </div>
    </div>
  );
}
