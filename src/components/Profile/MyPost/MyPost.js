import React from 'react';
import classes from './MyPost.module.css'

const MyPost = () => {
	return (
		<div className={classes.mypost}>
			<h3>My posts</h3>
			<textarea className={classes.mypost_textarea} placeholder='Enter some test'></textarea>
			<button className={classes.mypost_button}>Send</button>
		</div>
	)
}

export default MyPost