import React from "react";
import "./Portfolio.scss";

export const Portfolio: React.FC = () => {

	const filterProjects = (event: React.MouseEvent, filterClass: string) => {
		event.preventDefault();

		const filterBox = document.querySelectorAll('.card');
		
		filterBox.forEach(elem => {
			elem.classList.remove('hide');
			if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
				elem.classList.add('hide');
			}
		});

	};

	return (
		<section className="portfolio" id="portfolio">
			<div className="content">					
				<h2 className="portfolio__title title">Portfolio</h2>
				<p className="portfolio__subtitle subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
				<ul className="portfolio__filters">
					<li><a href="/" className="portfolio__filter" onClick={event => filterProjects(event, 'all')}>All</a></li>
					<li><a href="/" className="portfolio__filter" onClick={event => filterProjects(event, 'web')}>WEB DESIGN</a></li>
					<li><a href="/" className="portfolio__filter" onClick={event => filterProjects(event, 'graphic')}>GRAPHIC DESIGN</a></li>
					<li><a href="/" className="portfolio__filter" onClick={event => filterProjects(event, 'flat')}>FLAT DESIGN</a></li>
				</ul>
				<ul className="cards">
					<li className="card card_foto graphic">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
					<li className="card card_music web">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
					<li className="card card_settings flat">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
					<li className="card card_safari web">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>	
					</li>
					<li className="card card_phone web">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
					<li  className="card card_bubbles graphic">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
					<li className="card card_foto graphic">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
					<li className="card card_music web">
						<a href="/" className="card__link">
							<span className="fa-solid fa-magnifying-glass"></span>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}