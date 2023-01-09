import { loadProducts } from "../../actions/productAction";

const loadProductData = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      if (data.products.length) {
        dispatch(loadProducts(data.products));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export default loadProductData;
