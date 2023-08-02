import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import User from './components/User';
import User2 from './components/User2';
import User3 from './components/User3';
import MyApp from './MyApp/MyApp';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
       <MyApp /> 
    </HashRouter>
  
);



reportWebVitals();
