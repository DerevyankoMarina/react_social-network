import React from 'react';
import classes from './MyPost.module.css'

const MyPost = (props) => {
	let myFirstRef = React.createRef();

	let onSendMessage = () => {
		props.sendMessage();
	}

	let onPostChange = () => {
		props.updateNewPostText(myFirstRef.current.value)
	}

	return (
		<div className={classes.mypost}>
			<h3>My posts</h3>
			<div className={classes.wrap}>
				<textarea
					className={classes.textarea}
					ref={myFirstRef}
					placeholder='Add you comment'
					value={props.newPostText}
					onChange={onPostChange}
				/>
				<button className={classes.button} onClick={onSendMessage}>Send</button>
			</div>
		</div>
	)
}

export default MyPost;