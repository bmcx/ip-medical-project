import actionTypes from "../actionTypes";

export const sendMessage = (chatId, data) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      let res = await firestore
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .add({
          body: data.body,
          by: data.by,
          type: data.type,
          createdAt: new Date(),
        });
      await firestore.collection("chats").doc(chatId).update({
        lastMessageBody: data.body,
        lastMessageBy: data.by,
        lastMessageType: data.type,
        lastMessageAt: new Date(),
      });
      dispatch({ type: actionTypes.SEND_MESSAGE_SUCCESS, res });
    } catch (err) {
      console.log(err);
      dispatch({ type: actionTypes.SEND_MESSAGE_ERROR, err });
    }
  };
};
