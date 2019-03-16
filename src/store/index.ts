import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import BARReducer from "./BAR/reducers";

const reducers = (browserHistory: any) => combineReducers({
  router: connectRouter(browserHistory),
  BARReducer,
});

export const history = createBrowserHistory();

export default (preloadedState: any = {}): Store => (
  createStore(
    reducers(history), // root reducer with router state
    preloadedState,
    compose(
      composeWithDevTools(
        applyMiddleware(
          thunk,
          routerMiddleware(history),
        ),
      ),
    ),
  )
);
