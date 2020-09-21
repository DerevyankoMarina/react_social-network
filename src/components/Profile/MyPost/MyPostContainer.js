import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profilePage-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
	let state = props.store.getState();
	let sendMessage = () => {
		props.store.dispatch(addPostCreator());
	}

	let updateNewPostText = (text) => {
		let action = updateNewPostTextCreator(text);
		props.store.dispatch(action);
	}

	return (
		<MyPost
			newPostText={state.profilePage.newPostText}
			sendMessage={sendMessage}
			updateNewPostText={updateNewPostText}
		/>
	)
}

export default MyPostContainer;