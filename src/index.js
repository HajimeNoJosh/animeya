import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import { Homepage } from './Components/Homepage/Homepage';

const App = () => <Homepage />;

ReactDOM.render(<App />, document.getElementById('root'));
