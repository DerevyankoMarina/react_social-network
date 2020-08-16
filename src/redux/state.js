let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hey everyone!', likesCount: 5},
				{ id: 2, message: 'trrrrrrr', likesCount: 0},
				{ id: 3, message: 'brrrrrrr', likesCount: 25}
			],
			newPostText: 'it-kamasutra'
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
			]
		},
		sidebar: {
			friends: [
				{ id: 1, name: 'Sasha'},
				{ id: 2, name: 'Masha'},
				{ id: 3, name: 'Sveta'},
			]
		},
	},
	getState() {
		return this._state;
	},
	addPost() {
		let post = {
			id: 4,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		}
		this._state.profilePage.posts.push(post);
		this._state.profilePage.newPostText = '';
		this._callSubscriber();
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber();
	},
	_callSubscriber() {},
	subscribe(observer) {
		this._callSubscriber = observer;
		this._callSubscriber();
	},
}

export default store;