import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	debugger;
	let dialogElements = props.dialogsPage.dialogs.map(d =>
		<DialogItem id={d.id} name={d.name}/>
	)

	let messageElements = props.dialogsPage.messages.map(m =>
		<Message id={m.id} message={m.message}/>
	)

	return (
		<div className={classes.dialogsWrapper}>
			{/*<h3>DIALOGS</h3>*/}
			<div className={classes.dialogs}>
				{dialogElements}
			</div>
			<div className={classes.messages}>
				{messageElements}
			</div>
		</div>
	)
};

export default Dialogs;