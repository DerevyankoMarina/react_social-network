import React from 'react';
import classes from './TextArea.module.css'

const TextArea = () => {
	let myFirstRef = React.createRef();

	let buttonHandler = () => {
		alert(myFirstRef.current.value);
	}

	return (
		<div className={classes.wrap}>
			<textarea className={classes.textarea} ref={myFirstRef} placeholder='Enter some test'></textarea>
			<button className={classes.button} onClick={buttonHandler}>Send</button>
		</div>
	)
}

export default TextArea;