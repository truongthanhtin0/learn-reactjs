import axiosClient from "./axiosClient";

const productsApi = {
  async getAll(params) {
    const newParams = { ...params };
    // params truyển xuống: _page, _limit

    // tạo ra 1 cặp key, value mới (_start)
    newParams._start = params._page <= 1 || !params._page ? 0 : (params._page - 1) * (params._limit || 50);

    delete newParams._page;

    //Gọi Api
    const productList = await axiosClient.get("/products", { params: newParams });
    const productCount = await axiosClient.get("/products/count", { params: newParams });

    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        start: productCount,
      },
    };
  },
};

export default productsApi;
