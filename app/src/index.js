import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {reducer as formReducer} from 'redux-form';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import reducerN2 from './N2/reducer';

const history = createHistory();

let store = (createStore)(
    combineReducers({
        form: formReducer,
        red: reducerN2
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}>
    <App history={history}/>
</Provider>, document.getElementById('root'));
registerServiceWorker();