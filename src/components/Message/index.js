import React from "react";
//
class Message extends React.Component {
  constructor(props) {
    super();
  }
  componentDidMount() {}
  render() {
    let { message } = this.props;
    return (
      <h3>
        <span className="badge amber darken-2">{message}</span>
      </h3>
    );
  }
}
export default Message;
