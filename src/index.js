import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './modules';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from './modules/index';

const sagaMiddlware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddlware)));

sagaMiddlware.run(rootSaga);

ReactDOM.render(
   <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   </Provider>
, document.getElementById('root'));

