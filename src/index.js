import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>

    <Routes>
    
      <Route path='/' element={<App />}>

      {/* Authen */}
      <Route path='/auth'>


      {/* Login */}
        <Route path='login'></Route>
      
      </Route>
      
      </Route>
      
    </Routes>
    
    </BrowserRouter>

  </Provider>
  
);

