import React from 'react';
import classes from './MyPost.module.css'
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/state";

const MyPost = (props) => {
	let myFirstRef = React.createRef();

	let buttonHandler = () => {
		props.dispatch(addPostCreator());
	}

	let onPostChange = () => {
		let text = myFirstRef.current.value;
		let action = updateNewPostTextCreator(text);
		props.dispatch(action);
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
				<button className={classes.button} onClick={buttonHandler}>Send</button>
			</div>
		</div>
	)
}

export default MyPost;