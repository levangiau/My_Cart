import React from "react";
import * as Message from "../constant/Message";
//
class CartsItem extends React.Component {
  //nếu xử lý form thì cần state để lưu trữ dữ liệu
  showTotal = (a, b) => {
    return a * b;
  };
  onDelete = (product) => {
    this.props.onDeleteProductInCart(product);
    this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART);
  };
  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      this.props.onUpdateProductInCart(product, quantity);
      this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }
  };
  render() {
    let { data } = this.props;
    let { quantity } = data;
    console.log("quantity", quantity);
    return (
      <tr>
        <th scope="row">
          <img
            src={data.product.image}
            alt={data.product.image}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{data.product.name}</strong>
          </h5>
        </td>
        <td>{data.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                      btn-rounded waves-effect waves-light"
              onClick={() =>
                this.onUpdateQuantity(data.product, data.quantity - 1)
              }
            >
              <a href="#a">—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                      btn-rounded waves-effect waves-light"
              onClick={() =>
                this.onUpdateQuantity(data.product, data.quantity + 1)
              }
            >
              <a href="#a">+</a>
            </label>
          </div>
        </td>
        <td>{this.showTotal(data.product.price, data.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title="true"
            data-original-title="Remove item"
            onClick={() => this.onDelete(data.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}
export default CartsItem;
