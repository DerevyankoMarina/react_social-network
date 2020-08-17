const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hey everyone!', likesCount: 5},
				{ id: 2, message: 'trrrrrrr', likesCount: 0},
				{ id: 3, message: 'brrrrrrr', likesCount: 25}
			],
			newPostText: ''
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'John'},
				{ id: 2, name: 'Harry'},
				{ id: 3, name: 'Sheldon'},
				{ id: 4, name: 'Mary'},
				{ id: 5, name: 'Penny'},
				{ id: 6, name: 'Martha'},
				{ id: 7, name: 'Leo'}
			],
			messages: [
				{ id: 1, message: 'Hey!'},
				{ id: 2, message: 'How are you?'}
			],
			newMessageText: ''
		},
		sidebar: {
			friends: [
				{ id: 1, name: 'Sasha'},
				{ id: 2, name: 'Masha'},
				{ id: 3, name: 'Sveta'},
			]
		},
	},
	_callSubscriber() {},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
		this._callSubscriber();
	},
	dispatch(action) {
		if (action.type === ADD_POST) {
			let post = {
				id: 4,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			}
			this._state.profilePage.posts.push(post);
			this._state.profilePage.newPostText = '';
			this._callSubscriber();
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber();
		} else if (action.type === ADD_MESSAGE) {
			let message = { id: 3, message: this._state.dialogsPage.newMessageText}
			this._state.dialogsPage.messages.push(message);
			this._state.dialogsPage.newMessageText = '';
			this._callSubscriber();
		}  else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
			this._state.dialogsPage.newMessageText = action.newMessage;
			this._callSubscriber();
		}
	}
}

export let addPostCreator = () => ({type: ADD_POST});
export let updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export let addMessageCreator = () => ({type: ADD_MESSAGE});
export let updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default store;