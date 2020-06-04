import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
	return (
		<React.Fragment>
			<div className={classes.dialogs}>
				<div className={classes.dialogItem}>
					<NavLink to='dialogs/1'>John</NavLink>
				</div>
				<div className={classes.dialogItem}>
					<NavLink to='dialogs/1'>Sherlock</NavLink>
				</div>
				<div className={classes.dialogItem}>
					<NavLink to='dialogs/1'>Mary</NavLink>
				</div>
				<div className={classes.dialogItem}>
					<NavLink to='dialogs/1'>Selena</NavLink>
				</div>
				<div className={classes.dialogItem}>
					<NavLink to='dialogs/1'>Mike</NavLink>
				</div>
			</div>
			<div className={classes.messages}>
				<div className={classes.messagesItem}>Hey!</div>
				<div className={classes.messagesItem}>How are you?</div>
			</div>
		</React.Fragment>
	)
};

export default Dialogs;