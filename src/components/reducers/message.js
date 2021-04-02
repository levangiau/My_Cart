import * as types from "../constant/ActionType";
import * as Message from "../constant/Message";
//

const initialState = Message.MSG_WELCOME;
const message = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MSG:
      return action.message;
    default:
      return state;
  }
};
export default message;
