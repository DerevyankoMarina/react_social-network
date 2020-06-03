import React from 'react';
import classes from './Header.module.css'

function Header() {
	return (
		<div className={classes.header}>
			<a href="#" className={classes.logoLink}>
				<img src='https://i.ytimg.com/vi/NKk6rGDpq6Y/hqdefault.jpg'/>
			</a>
		</div>
	);
}

export default Header;
