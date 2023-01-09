import axios from "axios";
import { singleProduct } from "../../actions/productAction";

const loadSingleProduct = (productId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.data;
      dispatch(singleProduct(data));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export default loadSingleProduct;
