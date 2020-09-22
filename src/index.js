import store from './redux/redux-store';
//import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let renderApp = (state) => {
	ReactDOM.render(
		<Provider store={store}>
			<React.StrictMode>
				<App state={store.getState()}/>
			</React.StrictMode>
		</Provider>,
		document.getElementById('root')
	);
}

renderApp(store.getState());
store.subscribe(() => {
	let state = store.getState();
	renderApp(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
