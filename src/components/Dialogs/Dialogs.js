import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let dialogElements = props.dialogs.map(d =>
		<DialogItem id={d.id} name={d.name}/>
	)

	let messageElements = props.messages.map(m =>
		<Message id={m.id} message={m.message}/>
	)

	let onTextChange = (e) => {
		let text = e.target.value;
		props.updateNewMessageText(text);
	}

	let onSendMessage = () => {
		props.sendMessage();
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
					value={props.newMessageText}
					onChange={onTextChange}
				/>
					<button className={classes.button} onClick={onSendMessage}>Send</button>
				</div>
			</div>
		</div>
	)
};

export default Dialogs;