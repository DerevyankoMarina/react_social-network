import React from 'react';
import classes from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div className={classes.profile}>
			<ProfileInfo/>
			<MyPost addPost={props.addPost}/>
			<Posts posts={props.profilePage.posts}/>
		</div>
	)
}

export default Profile;