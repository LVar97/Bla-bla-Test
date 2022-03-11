import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import "./styles/index.scss";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
