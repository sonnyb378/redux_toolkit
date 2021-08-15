import React from 'react';

import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { bgActions } from './store/bg-slice';

const App = () => {
	const currentColor = useSelector((state) => state.bg.bgColor);

	const dispatch = useDispatch();

	const onChangeColor = (color) => {
		if (color === 'red') {
			dispatch(bgActions.setRedBG());
		} else {
			dispatch(bgActions.setBlueBG());
		}
	};

	return (
		<div className="App" style={{ backgroundColor: currentColor }}>
			<button onClick={onChangeColor.bind(this, 'red')}>Red</button>
			<button onClick={onChangeColor.bind(this, 'blue')}>Blue</button>
		</div>
	);
};

export default App;
