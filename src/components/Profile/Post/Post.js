import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
	return (
		<div className={classes.item}>
			<div className={classes.avatar}></div>
			<div className={classes.message}>{props.message}</div>
			<span className={classes.like}>+ {props.likesCount}</span>
		</div>
	)
}

export default Post