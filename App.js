import React from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CardGrid from './components/CardGrid/CardGrid';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <CardGrid title="Best for you" />
      <CardGrid title="Near from you" />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
