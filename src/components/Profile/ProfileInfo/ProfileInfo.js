import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
	return (
		<div className={classes.profileInfo}>
			<div className={classes.banner}></div>
			<div className={classes.info}>ava + desk</div>
		</div>
	)
}

export default ProfileInfo