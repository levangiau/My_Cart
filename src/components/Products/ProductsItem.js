import React from "react";
import * as Message from "../constant/Message";
//
class ProductsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  showRating = (rating) => {
    let result = [];
    // neu so * được đánh giá !== 5 thì nó sẽ hiện sao chưa đánh giá và ngược lại
    for (let i = 0; i < rating; i++) {
      result.push(<i key={i} className="fa fa-star"></i>);
    }
    for (let j = 0; j < 5 - rating; j++) {
      result.push(<i key={5 + j} className="fa fa-star-o"></i>);
    }
    return result;
  };
  onAddToCart = (products) => {
    this.props.onAddTocart(products);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
  };
  render() {
    let { data } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={data.image} className="img-fluid" alt={data.name} />
            <a href="#a">
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="#a">{data.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>{this.showRating(data.rating)}</li>
            </ul>
            <p className="card-text">{data.description}</p>
            <div className="card-footer">
              <span className="left">{data.price}$</span>
              <span className="right">
                <a
                  href="#a"
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Add to Cart"
                  title="true"
                  onClick={() => this.onAddToCart(data)}
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductsItem;
