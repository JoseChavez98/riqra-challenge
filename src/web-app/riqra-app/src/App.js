import React from 'react';
import { HomePage } from './pages/HomePage';
// import { ThankYouPage } from './pages/ThankYouPage';
import { Router } from '@reach/router';

function App() {
  return (
    <Router>
       <HomePage path="/"/>
    </Router>
  );
}

export default App;
