import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux'
import reducers from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux'
import './index.css'

const store = createStore(reducers, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
