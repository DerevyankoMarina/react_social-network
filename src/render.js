import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';


export let rerenderApp = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={props}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}