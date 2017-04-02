import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmuntableStoreInvariant from 'redux-immutable-state-invariant';
import thunk from'redux-thunk';

export default function configureStore(initialState) {
    //check if prod build then omit unnecessary middleware
    if(process.env.NODE_ENV === 'production') {        
        return createStore(
            rootReducer,
            initialState,
            applyMiddleware(thunk)
        );  
    }

    //otherwise build in dev
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmuntableStoreInvariant(), thunk)
    );  
}