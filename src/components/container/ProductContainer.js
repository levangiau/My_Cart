import React from "react";
import { connect } from "react-redux";
import Product from "../Products";
import ProductsItem from "../Products/ProductsItem";
import PropTypes from "prop-types";
import * as action from "../action";
//
class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showProduct(products) {
    let result = null;
    let { onAddTocart, onChangeMessage } = this.props; // lay từ reducer ra
    if (products.length > 0) {
      result = products.map((data, index) => {
        return (
          <ProductsItem
            key={index}
            data={data}
            onAddTocart={onAddTocart} // truyen du lieu nay sang ProductItem xử lý
            onChangeMessage={onChangeMessage}
          />
        );
      });
    }
    return result;
  }
  render() {
    let { products } = this.props;
    return <Product>{this.showProduct(products)}</Product>;
  }
}
// ex:kiểm tra props truyền từ redux lên coi có đúng kiểu dữ liệu không
ProductContainer.propTypes = {
  products: PropTypes.arrayOf(
    //kiểm tra coi propducts có phải là mảng danh sách ko?
    PropTypes.shape({
      // kiểm tra từn đối tượng của mảng danh sách này
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired, // => isRequired: để ràng buộc là bắt buộc phải có dữ liệu truyền vào
  onChangeMessage: PropTypes.func.isRequired,
};
//
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTocart: (products) => {
      dispatch(action.addToCart(products, 1));
    },
    onChangeMessage: (message) => {
      dispatch(action.changeMessage(message));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
