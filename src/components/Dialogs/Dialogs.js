import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let dialogElements = props.dialogsPage.dialogs.map(d =>
		<DialogItem id={d.id} name={d.name}/>
	)

	let messageElements = props.dialogsPage.messages.map(m =>
		<Message id={m.id} message={m.message}/>
	)

	return (
		<div className={classes.dialogsWrapper}>
			<div className={classes.dialogs}>
				<h3>Dialogs</h3>
				{dialogElements}
			</div>
			<div className={classes.messages}>
				<h3>Messages</h3>
				{messageElements}
			</div>
		</div>
	)
};

export default Dialogs;