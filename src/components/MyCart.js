import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductContainer from "./container/ProductContainer";
import MessageContainer from "./container/MessageContainer";
import CartContainer from "./container/CartContainer";
//
class MyCart extends React.Component {
  constructor(props) {
    super();
  }
  componentDidMount() {}
  render() {
    return (
      <div className="hidden-sn animated deep-purple-skin">
        <div>
          {/* Header */}
          <Header />
          <main id="mainContainer">
            <div className="container">
              {/* Products */}
              <ProductContainer />
              {/* Message */}
              <MessageContainer />
              {/* Cart */}
              <CartContainer />
            </div>
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }
}
export default MyCart;
