//加载依赖
import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { createStore } from 'redux'
import counter from './reducers'

import Counter from './components/Counter'
import NameForm  from './components/Form';
import Tick  from './components/Tick';
import FilterableProductTable from './components/FilterableProductTable'

const store = createStore(counter);

export default (
    <Provider store={store}>
        <Router history={browserHistory}>    
            <Route path="form" component={NameForm}></Route>
            <Route path="tick" component={Tick}></Route>
            <Route path="product" component={FilterableProductTable}></Route>
        </Router>
    </Provider>
);