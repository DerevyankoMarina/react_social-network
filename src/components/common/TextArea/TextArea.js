import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/state'
import classes from './TextArea.module.css'

const TextArea = (props) => {
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
		<div className={classes.wrap}>
			<textarea
				className={classes.textarea}
				ref={myFirstRef}
				placeholder='Add you comment'
				value={props.newPostText}
				onChangeCapture={onPostChange}
			/>
			<button className={classes.button} onClick={buttonHandler}>Send</button>
		</div>
	)
}

export default TextArea;