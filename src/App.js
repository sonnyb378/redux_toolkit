import React from 'react';

import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { setBlueBG, setRedBG } from './store';

const App = () => {
	const currentColor = useSelector((state) => state.bg.bgColor);

	const dispatch = useDispatch();

	const onChangeColor = (color) => {
		if (color === 'red') {
			dispatch(setRedBG());
		} else {
			dispatch(setBlueBG());
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
