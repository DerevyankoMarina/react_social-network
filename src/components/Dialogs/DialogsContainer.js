import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
	let state = props.store.getState();

	let updateNewMessageText = (text) => {
		props.store.dispatch(updateNewMessageTextCreator(text));
	}

	let sendMessage = () => {
		props.store.dispatch(addMessageCreator());
	}

	return (
		<Dialogs
			dialogs={state.dialogsPage.dialogs}
			messages={state.dialogsPage.messages}
			newMessageText={state.dialogsPage.newMessageText}
			sendMessage={sendMessage}
			updateNewMessageText={updateNewMessageText}
		/>
	)
};

export default DialogsContainer;