import React from "react";
import "./Contact.scss";
import { YMaps, Map } from 'react-yandex-maps';

const mapState = { center: [55.76, 37.64], zoom: 10 };

export const Contact: React.FC = () => {


	return (
		<section className="contact">
			<h2 className="contact__title title">Contact Us</h2>
			<p className="contact__subtitle subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
			<div className="contact__form">
				<form action="submit" className="form">
					<div className="form__contacts">
						<input type="text" className="form__name" placeholder="Your name"/>
						<input type="email" className="form__name" placeholder="Your email"/>
					</div>
					<textarea className="form__text" placeholder="Your message"/>
					<button className="form__btn">Submit</button>
				</form>
				<div className="map">
					<p className="map__address fa-solid fa-location-dot">Bla Bla Company 125009 Moscow, Red Square 1</p>
				<YMaps>
					<Map state={mapState} className="map__container">
						
					</Map>
				</YMaps>
				</div>
				
			</div>
		
		</section>
	);
}