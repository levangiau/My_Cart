import React from "react";
//
class CartsResult extends React.Component {
  constructor(props) {
    super();
  }
  componentDidMount() {}
  showTotal = (result) => {
    let total = 0;
    if (result.length > 0) {
      for (let i = 0; i < result.length; i++) {
        total += result[i].product.price * result[i].quantity;
      }
    }
    return total;
  };
  render() {
    let { carts } = this.props;
    console.log("carts", carts);
    return (
      <tr>
        <td colSpan={3} />
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.showTotal(carts)}$</strong>
          </h4>
        </td>
        <td colSpan={3}>
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Complete purchase
            <i className="fa fa-angle-right right" />
          </button>
        </td>
      </tr>
    );
  }
}
export default CartsResult;
