import React from 'react';
import classes from './../Dialogs.module.css'

const Message = (props) => {
	return <div className={classes.messagesItem}>
		<div className={classes.ava}>AVA</div>
		{props.message}
	</div>
}

export default Message;