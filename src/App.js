import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Route exact path='/' component={Home} />
     </BrowserRouter>
    </div>
  );
}

export default App;
