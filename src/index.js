import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';    
import {Provider} from 'react-redux';
import routes from './routes';
import toastr from 'toastr';
import * as productActions from './actions/productActions';
import './styles/styles.scss';
import '../node_modules/toastr/build/toastr.css';

const store = configureStore();
store.dispatch(productActions.getProduct())
    .catch(err => { 
        toastr.error(err);
    });
window.store = store;

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);