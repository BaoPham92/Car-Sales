import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = configureStore();
const rootElement = document.getElementById('root');

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, rootElement);
