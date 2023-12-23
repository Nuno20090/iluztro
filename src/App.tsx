import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { HeaderComponent } from './components/header';

import { HomePage } from './pages/home';
import { CollectionPage } from './pages/collection';
import { ContactsPage } from './pages/contacts';
import { Collections } from './data/collections';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>

          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/collection/:collectionID"
            element={<CollectionPage />}
          />

          <Route
            path="/contacts"
            element={<ContactsPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
