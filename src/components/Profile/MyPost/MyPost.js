import React from 'react';
import classes from './MyPost.module.css'
import TextArea from "../../common/TextArea/TextArea";

const MyPost = () => {
	return (
		<div className={classes.mypost}>
			<h3>My posts</h3>
			<TextArea/>
		</div>
	)
}

export default MyPost