import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CartsItem from "../Carts/CartsItem";
import Carts from "../Carts";
import CartsResult from "../Carts/CartsResult";
import * as message from "../constant/Message";
import * as action from "../action";
//
class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showCart = (carts) => {
    let result = (
      <tr>
        <td>{message.MSG_CART_EMPTY}</td>
      </tr>
    );
    let { onDelete, onChangeMessage, onUpdateProductInCart } = this.props;
    if (carts.length > 0) {
      result = carts.map((data, index) => {
        return (
          <CartsItem
            key={index}
            data={data}
            onDeleteProductInCart={onDelete}
            onChangeMessage={onChangeMessage}
            onUpdateProductInCart={onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  };
  showCartResult = (carts) => {
    let result = null;
    if (carts.length > 0) {
      result = <CartsResult carts={carts} />;
    }
    return result;
  };
  render() {
    let { carts } = this.props;
    console.log("cart", carts);
    return (
      <Carts>
        {this.showCart(carts)}
        {this.showCartResult(carts)}
      </Carts>
    );
  }
}
// ex:kiểm tra props truyền từ redux lên coi có đúng kiểu dữ liệu không
CartContainer.propTypes = {
  carts: PropTypes.arrayOf(
    //kiểm tra coi propducts có phải là mảng danh sách ko?
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired, // => isRequired: để ràng buộc là bắt buộc phải có dữ liệu truyền vào
  onDelete: PropTypes.func.isRequired,
};
//
const mapStateToProps = (state) => {
  return {
    carts: state.carts,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDelete: (product) => {
      dispatch(action.deleteProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(action.changeMessage(message));
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(action.updateProductInCart(product, quantity));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
