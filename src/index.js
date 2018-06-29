import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducer';
import App from './App';
import { addComment } from './actions';
import DevTools from './DevTools';


const store = createStore(
	reducers,
	DevTools.instrument()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

store.dispatch(addComment('first comment'));
store.dispatch(addComment('second comment'));