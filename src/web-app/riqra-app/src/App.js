import React from 'react';
import { HomePage } from './pages/HomePage';
// import { ThankYouPage } from './pages/ThankYouPage';
import { Router } from '@reach/router';
import { ConfirmationPage } from './pages/ConfirmationPage';

function App() {
  return (
    <Router>
       <HomePage path="/"/>
       <ConfirmationPage path="/confirmation"/>
    </Router>
  );
}

export default App;
