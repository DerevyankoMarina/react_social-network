let initialState = {
	friends: [
		{ id: 1, name: 'Sasha'},
		{ id: 2, name: 'Masha'},
		{ id: 3, name: 'Sveta'},
	]
};

let sidebarReducer = (state = initialState, action) => {
	return state;
}

export default sidebarReducer;