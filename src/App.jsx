import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-container">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
