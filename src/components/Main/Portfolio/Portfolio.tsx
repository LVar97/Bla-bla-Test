import React from "react";
import "./Portfolio.scss";

export const Portfolio: React.FC = () => {
	return (
		<section className="portfolio">
			<div className="content">					
				<h2 className="portfolio__title title">Portfolio</h2>
				<p className="portfolio__subtitle subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
				<ul className="portfolio__filters">
					<li><a href="/" className="portfolio__filter">All</a></li>
					<li><a href="/" className="portfolio__filter">WEB DESIGN</a></li>
					<li><a href="/" className="portfolio__filter">GRAPHIC DESIGN</a></li>
					<li><a href="/" className="portfolio__filter">FLAT DESIGN</a></li>
				</ul>
				<ul className="cards">
					<li className="card card_foto">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
					<li className="card card_music">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
					<li className="card card_settings">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
					<li className="card card_safari">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>	
					</li>
					<li className="card card_phone">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
					<li  className="card card_bubbles">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
					<li className="card card_foto">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
					<li className="card card_music">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}