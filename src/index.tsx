import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App';
import reducer from './reducers';
import {createEmptyBoard} from './utils/BoardUtils';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import GameState from './states/GameState';

const boardSize = 3;
const store = createStore(reducer,{history: createEmptyBoard(boardSize)} as GameState)

ReactDOM.render(
  <Provider store={store}> {/* this is to pass store down */}
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
