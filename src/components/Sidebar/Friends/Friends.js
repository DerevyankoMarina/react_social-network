import React from 'react';
import classes from './Friends.module.css'
import Friend from "../FriendItem/Friend";

const Friends = (props) => {
	let friendsItems = props.friends.map(f => <Friend name={f.name}/>);

	return (
		<div>
			<h3 className={classes.title}>FRIENDS</h3>
			<div className={classes.friends}>
				{friendsItems}
			</div>
		</div>

	);
}

export default Friends;
