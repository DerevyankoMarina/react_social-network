import React from 'react';
import classes from './Profile.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
	return (
		<div className={classes.profile}>
			<ProfileInfo/>
			<MyPostContainer store={props.store}/>
			<Posts posts={props.profilePage.posts}/>
		</div>
	)
}

export default Profile;