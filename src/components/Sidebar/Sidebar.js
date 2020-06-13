import React from 'react';
import classes from './Sidebar.module.css'
import Navbar from "./Navbar/Navbar";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
	return (
		<aside className={classes.sidebar}>
			<Navbar/>
			<Friends friends={props.sidebar.friends}/>
		</aside>
	);
}

export default Sidebar;
