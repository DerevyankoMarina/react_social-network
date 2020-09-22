import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profilePage-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => dispatch(addPostCreator()),
		updateNewPostText: (text) => {
			dispatch(updateNewPostTextCreator(text))
		}
	}
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;