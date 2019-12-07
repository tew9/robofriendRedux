import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import './index.css';
import { createLogger } from 'redux-logger';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';
import { searchRobots, requestUsers } from './reducers';

//steps to create redux state: 
    // action->middleware(async redux, logger)->dispatch->reducer->store->update view
    //updating view(in app, map the state to props, mapdispatches to props)

//creating logger which is middlewar
const logger = createLogger();

//combining reducers into root reducer.
const rootReducer = combineReducers({searchRobots, requestUsers})

//creating store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,  document.getElementById('root')
    );
registerServiceWorker();
