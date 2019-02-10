// Core
import { applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';

// Middleware
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#FF0005',
    },
});

const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middlewares = [sagaMiddleware, thunk, routerMiddleware];

if (__DEV__) {
    middlewares.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middlewares));

export { enhancedStore, sagaMiddleware, history };
