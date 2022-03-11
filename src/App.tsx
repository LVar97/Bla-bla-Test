import React, { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import "./styles/index.scss";

function App() {

  const [isBurger, setIsBurger] = useState(false);

  const handleBurgerClick = (event:  React.MouseEvent) => {
    event.preventDefault();
    setIsBurger(!isBurger);

  }
  
  const handleMenuLinkClick = (event:  React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const menuLink = event.target as HTMLButtonElement;
    
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock?.getBoundingClientRect().top;
      
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      })
    }
    setIsBurger(false);
  }


  return (
    <div className="wrapper">
      <Header 
      isMobile={isBurger} 
      onBurgerClick={handleBurgerClick}
      onMenuLinkClick={handleMenuLinkClick}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
