import axiosClient from "./axiosClient";

const newApi = {
  async getAll(params) {
    const url1 = "/news";
    const url2 =
      "/categoryProduct?isSale=false&typeProduct=vest&_limit=4&_page=2";
    const newsList = await axiosClient.get(url1, { params });
    const productList = await axiosClient.get(url2);
    return {
      newsList,
      productList,
    };
  },
  get(params) {
    const url = "/news";
    return axiosClient.get(url, { params });
  },
  add(data) {
    const url = `/news`;
    return axiosClient.post(url, data);
  },
  remove(id) {
    const url = `/news/${id}`;
    return axiosClient.delete(url);
  },
};
export default newApi;
