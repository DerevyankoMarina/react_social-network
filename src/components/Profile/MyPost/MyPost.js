import React from 'react';
import classes from './MyPost.module.css'
import TextArea from "../../common/TextArea/TextArea";

const MyPost = (props) => {
	return (
		<div className={classes.mypost}>
			<h3>My posts</h3>
			<TextArea addPost={props.addPost}/>
		</div>
	)
}

export default MyPost