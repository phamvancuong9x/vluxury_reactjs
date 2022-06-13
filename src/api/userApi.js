import axiosClient from "./axiosClient";

const accountApi = {
  getAll() {
    const url = `/Account`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/Account/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/Account`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/Account/`;
    return axiosClient.patch(url, data);
  },
};
export default accountApi;
