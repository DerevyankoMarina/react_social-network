import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={classes.navbar}>
			<div>
				<NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
			</div>
			<div>
				<NavLink to='/message' activeClassName={classes.active}>Message</NavLink>
			</div>
			<div>
				<NavLink to='/news' activeClassName={classes.active}>News</NavLink>
			</div>
			<div>
				<NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
			</div>
			<div>
				<NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
			</div>
		</nav>
	)
}

export default Navbar