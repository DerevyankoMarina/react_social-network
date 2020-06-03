import React from 'react';
import classes from './Posts.module.css'
import Post from "../Post/Post";

const Posts = () => {
	return (
		<div className={classes.posts}>
			<Post message='Hey everyone!' likesCount='5'/>
			<Post message='blablabla' likesCount='0'/>
			<Post message='trrrrrrrr' likesCount='25'/>
		</div>
	)
}

export default Posts;