import { loadProducts } from "../../actions/productAction";

const loadProductData = () => {
  return async (dispatch, _getState) => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    if (data.products.length) {
      dispatch(loadProducts(data.products));
    }
  };
};

export default loadProductData;
