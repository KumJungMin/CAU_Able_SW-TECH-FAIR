//링크 눌렀을 때 다른 컴포넌트를 불러오게 한다.
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Detail from './Detail';

export default ()=>(
    <Router>
        <Route path='/Detail' component={Detail} />
    </Router>
)