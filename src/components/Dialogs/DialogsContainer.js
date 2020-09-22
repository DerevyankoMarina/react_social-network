import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.newMessageText
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => dispatch(addMessageCreator()),
		updateNewMessageText: (text) => dispatch(updateNewMessageTextCreator(text))
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;