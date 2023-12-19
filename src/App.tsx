import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { HeaderComponent } from './components/header';
import { Button } from 'react-bootstrap';

import { HomePage } from './pages/home';
import { CollectionAPage } from './pages/collectionA';
import { CollectionBPage } from './pages/collectionB';
import { CollectionCPage } from './pages/collectionC';
import { ContactsPage } from './pages/contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection-a" element={<CollectionAPage />} />
          <Route path="/collection-b" element={<CollectionBPage />} />
          <Route path="/collection-c" element={<CollectionCPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
