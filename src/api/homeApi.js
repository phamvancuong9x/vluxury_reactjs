import axiosClient from "./axiosClient";

function filterData(array, type) {
  const newData = array.filter((value) => {
    return value.homeType == type;
  });
  return newData;
}

const homeApi = {
  async getAll() {
    const url = "/home";
    const homeData = await axiosClient.get(url);
    return {
      slider: filterData(homeData, "slider"),
      bannerSale: filterData(homeData, "bannerSale"),
      collectionList: filterData(homeData, "collectionList"),
    };
  },
  async getCollectionList() {
    const url1 = "/categoryProduct";
    const url2 = "/categoryProduct";
    const url3 = "/categoryProduct";
    let params = {
      isSale: false,
      typeProduct: "vest",
      _page: 1,
      _limit: 4,
    };

    const NewProductData = await axiosClient.get(url1, { params });
    params = { ...params, _page: 2, _limit: 4 };
    const HotProductData = await axiosClient.get(url2, { params });
    params = { ...params, isSale: true, _page: 1, _limit: 4 };
    const SaleProductData = await axiosClient.get(url3, { params });

    return {
      NewProductData,
      HotProductData,
      SaleProductData,
    };
  },
  addSlider(data) {
    const url = `/home`;
    return axiosClient.post(url, data);
  },
  removeSlider(id) {
    const url = `/home/${id}`;
    return axiosClient.delete(url);
  },
};
export default homeApi;
