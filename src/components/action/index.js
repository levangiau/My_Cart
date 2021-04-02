import * as types from "../constant/ActionType";

//thêm sản phẩm vào giỏ hàng
export const addToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
};
// thay đổi thông báo
export const changeMessage = (message) => {
  return {
    type: types.CHANGE_MSG,
    message,
  };
};
//xóa sản phẩm khỏi giỏ hàng
//note: thông thường khi xóa sản phẩm chỉ cần dùng id để xóa. nhưng truyền nguyên sản phẩm khi dự án rất nhỏ mới dùng
export const deleteProductInCart = (product) => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    product,
  };
};
//cập nhật lại số lượng
export const updateProductInCart = (product, quantity) => {
  return {
    type: types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity,
  };
};
