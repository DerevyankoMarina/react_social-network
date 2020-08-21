import profilePageReducer from './profilePage-reducer'
import dialogsPageReducer from './dialogsPage-reducer'

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
		this._state.profilePage = profilePageReducer(action, this._state.profilePage);
		this._state.dialogsPage = dialogsPageReducer(action, this._state.dialogsPage);

		this._callSubscriber();
	}
}


export default store;