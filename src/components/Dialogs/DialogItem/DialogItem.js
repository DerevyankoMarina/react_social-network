import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	return (
		<div className={classes.dialogItem}>
			<div className={classes.ava}>AV</div>
			<NavLink to={'/dialogs/' + props.id} userId={props.id}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem;