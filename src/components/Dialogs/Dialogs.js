import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsPage-reducer";

const Dialogs = (props) => {
	let dialogElements = props.dialogsPage.dialogs.map(d =>
		<DialogItem id={d.id} name={d.name}/>
	)

	let messageElements = props.dialogsPage.messages.map(m =>
		<Message id={m.id} message={m.message}/>
	)

	let onTextChange = (e) => {
		let text = e.target.value;
		props.dispatch(updateNewMessageTextCreator(text));
	}

	let buttonHandler = () => {
		props.dispatch(addMessageCreator());
	}

	return (
		<div className={classes.dialogsWrapper}>
			<div className={classes.dialogs}>
				<h3>Dialogs</h3>
				{dialogElements}
			</div>
			<div className={classes.messages}>
				<h3>Messages</h3>
				<div className={classes.messagesContainer}>
					{messageElements}
				</div>
				<div className={classes.wrap}>
				<textarea
					className={classes.textarea}
					placeholder='Add new message'
					value={props.dialogsPage.newMessageText}
					onChange={onTextChange}
				/>
					<button className={classes.button} onClick={buttonHandler}>Send</button>
				</div>
			</div>
		</div>
	)
};

export default Dialogs;