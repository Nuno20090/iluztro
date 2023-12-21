import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { HeaderComponent } from './components/header';
import { Button } from 'react-bootstrap';

import { HomePage } from './pages/home';
import { CollectionPage } from './pages/collection';
import { ContactsPage } from './pages/contacts';
import { CollectionPages } from './data/collections';

function App() {

    const renderCollectionPages = () => {
        return CollectionPages.map((page, index) => {
            return (
                <Route 
                    key={index} 
                    path={page.path} 
                    element={
                        <CollectionPage 
                            collectionID={page.id}
                        />
                    } 
                />
            )
        })
    }


  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          { renderCollectionPages() }
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
