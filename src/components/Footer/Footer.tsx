import React from "react";
import "./Footer.scss";


export const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="container">
				<p className="footer__copyright">© Copyright 2016 Bla Bla Studio  |  One Page Flat Template</p>
				<button className="footer__button fa-solid fa-angle-up"></button>
			</div>
		</footer>
	)
};