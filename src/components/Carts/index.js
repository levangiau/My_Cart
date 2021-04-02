import React from "react";
//
class Carts extends React.Component {
  constructor(props) {
    super();
  }
  componentDidMount() {}
  render() {
    let { children } = this.props;
    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th />
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th />
              </tr>
            </thead>
            <tbody>{children}</tbody>
          </table>
        </div>
      </section>
    );
  }
}
export default Carts;
