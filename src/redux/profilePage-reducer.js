const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{ id: 1, message: 'Hey everyone!', likesCount: 5},
		{ id: 2, message: 'trrrrrrr', likesCount: 0},
		{ id: 3, message: 'brrrrrrr', likesCount: 25}
	],
	newPostText: ''
};

let profilePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let post = {
				id: 4,
				message: state.newPostText,
				likesCount: 0
			}
			state.posts.push(post);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
}

export let addPostCreator = () => ({type: ADD_POST});
export let updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profilePageReducer;