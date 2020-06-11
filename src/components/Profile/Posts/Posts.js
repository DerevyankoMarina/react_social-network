import React from 'react';
import classes from './Posts.module.css'
import Post from "../Post/Post";

const Posts = (props) => {
	return (
		<div className={classes.posts}>
			{props.posts.map( post =>
				<Post message={post.message} likesCount={post.likesCount}/>
			)}
		</div>
	)
}

export default Posts;