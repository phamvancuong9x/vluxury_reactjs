import axiosClient2 from "./axiosClient2";

const provincesApi = {
  getAll(url) {
    return axiosClient2.get(url);
  },
};
export default provincesApi;
