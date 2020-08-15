import {rerenderApp} from './../render';

let state = {
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
	}
}

export let addPost = () => {
	let post = {
		id: 4,
		message: state.profilePage.newPostText,
		likesCount: 0
	}
	state.profilePage.posts.push(post);
	state.profilePage.newPostText = '';
	rerenderApp(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderApp(state);
};

export default state;