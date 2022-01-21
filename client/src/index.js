import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Admin from "./Admin";
import AdminAdd from './AdminAdd';
import AdminList from './AdminList';
import AdminAdopt from './AdminAdopt';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/adminadd" element={<AdminAdd/>}></Route>
      <Route path="/adminlist" element={<AdminList/>}></Route>
      <Route path="/adminadopt" element={<AdminAdopt/>}></Route>

    </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
