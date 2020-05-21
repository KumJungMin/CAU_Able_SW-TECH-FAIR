import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Layout from './components/Layout'
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<Layout />, document.getElementById('root'));


serviceWorker.unregister();
