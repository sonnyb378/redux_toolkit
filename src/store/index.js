import { configureStore } from '@reduxjs/toolkit';

import { bgReducer, bgActions } from './bg-slice';
// import bgReducer, { bgActions } from './bg-slice';

const store = configureStore({
	reducer: {
		bg: bgReducer
	}
});

export const { setBlueBG, setRedBG } = bgActions;

export default store;
