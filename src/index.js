import React from 'react';
import ReactDOM from 'react-dom';


import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addItem, removeItem } from "./actions";

import rootReducer from './reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

const myState = createStore(rootReducer);


const App = () => {

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures 
        />
      </div>
      <div className="box">
        <AdditionalFeatures 
        />
        <Total />
      </div>
    </div>
  );
};


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={myState}>
        <App />
    </Provider>,
  rootElement
);
