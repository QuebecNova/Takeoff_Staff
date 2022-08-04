import React from 'react';
import { HashRouter } from 'react-router-dom';
import NavBar from './components/Contacts/NavBar';
import AppRouter from './pages/AppRouter';

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <AppRouter/>
    </HashRouter>
  );
}

export default App;
