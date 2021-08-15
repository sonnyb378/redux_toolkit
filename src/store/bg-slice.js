import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	bgColor: 'red'
};

const bgSlice = createSlice({
	name: 'bg',
	initialState: initialState,
	reducers: {
		setBlueBG(state) {
			state.bgColor = 'blue';
		},
		setRedBG(state) {
			state.bgColor = 'red';
		}
	}
});

const bgActions = bgSlice.actions;
const bgReducer = bgSlice.reducer;
export { bgActions, bgReducer };

// export const bgActions = bgSlice.actions;
// export default bgSlice.reducer;
