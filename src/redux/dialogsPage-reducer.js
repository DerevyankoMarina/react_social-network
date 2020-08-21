const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

let dialogsPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let message = { id: 3, message: state.newMessageText}
			state.messages.push(message);
			state.newMessageText = '';
			return state;
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newMessage;
			return state;
		default:
			return state;
	}
}

export let addMessageCreator = () => ({type: ADD_MESSAGE});
export let updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default dialogsPageReducer;