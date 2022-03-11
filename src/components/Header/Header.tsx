import React from "react";
import "./Header.scss";
import logo from "../../image/b-logo.svg";

type HeaderProps = {
	isMobile: boolean,
	onBurgerClick: (event:  React.MouseEvent) => void,
	onMenuLinkClick: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export const Header: React.FC<HeaderProps> = ({isMobile, onBurgerClick, onMenuLinkClick}) => {

	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<a href="/" className="header__logo-group">
						<img src={logo} alt="logo" className="header__logo"/>
						<div className="header__logo-text">
							<h2 className="header__logo-title">BLA BLA</h2>
							<p className="header__logo-subtitle">One Page Flat Template</p>
						</div>
					</a>
					<div className="header__menu menu">
						<div className="menu__icon icon-menu" onClick={event => onBurgerClick(event)}>
							<span></span>
						</div>
						<nav className={`menu__body ${isMobile ? '_active' : ''}`}>
							<ul className="menu__list">
								<li><a data-goto=".jumbotron" href="#home" className="menu__link" onClick={(event) => onMenuLinkClick(event)}>HOME</a></li>
								<li><a data-goto=".portfolio" href="#portfolio" className="menu__link" onClick={(event) => onMenuLinkClick(event)}>PORTFOLIO</a></li>
								<li><a data-goto=".about" href="#about" className="menu__link" onClick={(event) => onMenuLinkClick(event)}>ABOUT</a></li>
								<li><a data-goto=".contact" href="#contact" className="menu__link" onClick={(event) => onMenuLinkClick(event)}>CONTACT</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div className="jumbotron" id="home">
					<h1 className="jumbotron__title">We Build Brand</h1>
					<p className="jumbotron__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
					<button className="jumbotron__btn"><a href="#portfolio">LEARN MORE</a></button>
					<a href="#portfolio"><span className="fa-solid fa-circle-chevron-down"/></a>
				</div>
		</header>
	);
}