import React from 'react';
import banner from "../../images/banner.JPG";

import classes from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import Posts from "./Posts/Posts";

const Profile = () => {
	return (
		<div className={classes.profile}>
			<div className={classes.banner}></div>
			<MyPost/>
			<Posts/>
		</div>
				)
}

export default Profile;