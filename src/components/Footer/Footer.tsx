import React from "react";
import "./Footer.scss";


export const Footer: React.FC = () => {

	const handleButtonUp = (event:  React.MouseEvent<HTMLButtonElement>) => {
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
  }

	return (
		<footer className="footer">
			<div className="container">
				<p className="footer__copyright">© Copyright 2016 Bla Bla Studio  |  One Page Flat Template</p>
				<button 
				data-goto=".header"
				className="footer__button fa-solid fa-angle-up"
				onClick={(event) => handleButtonUp(event)}
				></button>
			</div>
		</footer>
	)
};