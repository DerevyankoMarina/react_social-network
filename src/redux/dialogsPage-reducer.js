const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let dialogsPageReducer = (action, state) => {
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