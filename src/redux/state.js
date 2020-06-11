let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hey everyone!', likesCount: 5},
			{ id: 2, message: 'trrrrrrr', likesCount: 0},
			{ id: 3, message: 'brrrrrrr', likesCount: 25}
		]
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
	sidebar: {}
}

export default state;