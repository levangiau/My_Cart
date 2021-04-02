import * as types from "../constant/ActionType";
//
let data = JSON.parse(localStorage.getItem("Cart"));
const initialState = data ? data : [];
//du liệu mẫu ban đầu
//  [
// {
//   product: {
//     id: 1,
//     name: "Iphone 7 plus",
//     image:
//       "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
//     description: "Sản phẩm của apple",
//     price: 500,
//     inventory: 10,
//     rating: 4,
//   },
//   quantity: 5,
// },
// {
//   product: {
//     id: 3,
//     name: "Iphone 8 plus",
//     image:
//       "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
//     description: "Sản phẩm của apple",
//     price: 600,
//     inventory: 5,
//     rating: 4,
//   },
//   quantity: 3,
// },
//   ];

const findIndex = (cart, product) => {
  let index = -1; //khởi tạo
  // kiểm tra trong giỏ hàng có sản phẩm hay ko=> nếu có thì sẽ tìm trên danh sách sản phẩm đó
  if (cart.length > 0) {
    // dk khi giỏ hàng có sản phẩm
    for (let i = 0; i < cart.length; i++) {
      // lấy id sản phẩm trong giỏ hàng đem so sánh với id của sản phẩm muốn thêm vào
      //=> nếu như 2 sản phẩm đó trùng thì sẽ lấy vị trí sản phẩm đó ra
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
const cart = (state = initialState, action) => {
  let { product, quantity } = action;
  let index = -1;
  switch (action.type) {
    case types.ADD_TO_CART:
      // console.log(action);
      // tìm sản phẩm theo id  nếu tồn tại id thì chỉ cập nhật lại số lượng sản phẩm
      // => ngược lại thì sẽ cập nhật toàn bộ thông tin sản phẩm đó
      index = findIndex(state, product); //hàm tìm kiếm sản phẩm theo id
      if (index !== -1) {
        //xet dk khi tìm thấy sản phẩm.quy tắc nếu là -1 thì ko tìm thấy và ngược lại
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity,
        });
      }
      localStorage.setItem("Cart", JSON.stringify(state));
      return [...state];
    case types.DELETE_PRODUCT_IN_CART:
      index = findIndex(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      //trường hợp ko biết api nên dùng localstorage để quản lý dữ liệu
      localStorage.setItem("Cart", JSON.stringify(state));
      return [...state];
    case types.UPDATE_PRODUCT_IN_CART:
      index = findIndex(state, product);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("Cart", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};
export default cart;
