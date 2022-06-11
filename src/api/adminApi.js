import axiosClient from "./axiosClient";

const adminApi = {
    
  

  update(data) {
    const url = `/categoryProduct/${id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/home/${id}`;
    return axiosClient.delete(url);
  },
};
export default adminApi;
