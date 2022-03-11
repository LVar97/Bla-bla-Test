import React from "react";
import "./Header.scss";
import logo from "../../image/b-logo.svg";


export const Header: React.FC = () => {
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
						<div className="menu__icon icon-menu">
							<span></span>
						</div>
						<nav className="menu__body">
							<ul className="menu__list">
								<li><a href="" className="menu__link">HOME</a></li>
								<li><a href="" className="menu__link">PORTFOLIO</a></li>
								<li><a href="" className="menu__link">ABOUT</a></li>
								<li><a href="" className="menu__link">CONTACT</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div className="jumbotron">
					<h1 className="jumbotron__title">We Build Brand</h1>
					<p className="jumbotron__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
					<button className="jumbotron__btn">LEARN MORE</button>
					<span className="fa-solid fa-circle-chevron-down"/>
				</div>
		</header>
	);
}