import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import './styles/index.scss';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "./reducers"
import { getPosts } from './actions/post.action';
import { getUsers } from './actions/user.action';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getPosts());
store.dispatch(getUsers());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
