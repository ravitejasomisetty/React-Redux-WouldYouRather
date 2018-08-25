import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { createStore } from 'redux'
import reducers from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux'

const store = createStore(reducers, middleware)

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>, document.getElementById('root'));
