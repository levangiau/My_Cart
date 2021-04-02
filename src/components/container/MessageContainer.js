import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Message from "../Message";
//
class MessageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { message } = this.props;
    return <Message message={message} />;
  }
}
// ex:kiểm tra props truyền từ redux lên coi có đúng kiểu dữ liệu không
MessageContainer.propsTypes = {
  message: PropTypes.string.isRequired,
};
//
const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

export default connect(mapStateToProps, null)(MessageContainer);
