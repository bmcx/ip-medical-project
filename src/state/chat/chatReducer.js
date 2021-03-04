import actionTypes from "../actionTypes";
import { toast } from "react-toastify";

const initState = {
  msgError: null,
};

const chat = (state = initState, action) => {
  // console.log(action);
  let msg = action?.err?.message ?? "There was an error!";
  switch (action.type) {
    case actionTypes.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        msgError: null,
      };
    case actionTypes.SEND_MESSAGE_ERROR:
      toast.error(msg);
      return {
        ...state,
        msgError: msg,
      };

    default:
      return state;
  }
};

export default chat;
