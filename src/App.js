import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Sidebar from "./components/Sidebar/Sidebar";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>
				<Sidebar sidebar={props.state.sidebar}/>
				<div className="app-wrapper-content">
					<Route path='/profile' render={() =>
						<Profile profilePage={props.state.profilePage} addPost={props.addPost}/>
					}/>
					<Route path='/dialogs' render={() =>
						<Dialogs dialogsPage={props.state.dialogsPage}/>
					}/>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
