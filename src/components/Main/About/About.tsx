import React from "react";
import "./About.scss";
import ava1 from "../../../image/ava-1.png";
import ava2 from "../../../image/ava-2.png";
import ava3 from "../../../image/ava-3.png";

export const About: React.FC = () => {
	return (
		<section className="about" id="about">
			<h2 className="about__title title">About Us</h2>
			<p className="about__subtitle subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
			<div className="profile">
				<div className="profile__card">
					<div className="profile__photo-group">
						<img src={ava1} alt="Melannie" className="profile__photo" />
						<span className="profile__social ">
							<a href="/"><i className="fa-brands fa-facebook-f"/></a>
							<a href="/"><i className="fa-brands fa-twitter"/></a>
							<a href="/"><i className="icon-google_plus"></i></a>
							<a href="/"><i className="icon-dribbble"></i></a>
						</span>
					</div>
					<div className="profile__description">
						<h3 className="profile__title">Melannie Doe</h3>
						<p className="profile__subtitle">Project Manager</p>
						<p className="profile__text">Ut wisi enim ad minim veniam, quis nostrud exerci tation </p>
					</div>
				</div>
				<div className="profile__card">
					<div className="profile__photo-group">
						<img src={ava3} alt="Jhonnie" className="profile__photo" />
						<span className="profile__social ">
							<a href="/"><i className="fa-brands fa-facebook-f"/></a>
							<a href="/"><i className="fa-brands fa-twitter"/></a>
							<a href="/"><i className="icon-google_plus"></i></a>
							<a href="/"><i className="icon-dribbble"></i></a>
						</span>
					</div>
					<div className="profile__description">
						<h3 className="profile__title">Jhonnie Doe</h3>
						<p className="profile__subtitle">Graphic Designer</p>
						<p className="profile__text">Ut wisi enim ad minim veniam,quis nostrud exerci tationullamcorper suscipit lobortis nislut aliquip ex ea commodoconsequat.</p>
					</div>
				</div>
				<div className="profile__card">					
					<div className="profile__photo-group">
					<img src={ava2} alt="Daniel" className="profile__photo" />
						<span className="profile__social ">
							<a href="/"><i className="fa-brands fa-facebook-f"/></a>
							<a href="/"><i className="fa-brands fa-twitter"/></a>
							<a href="/"><i className="icon-google_plus"></i></a>
							<a href="/"><i className="icon-dribbble"></i></a>
						</span>
					</div>
					<div className="profile__description">
						<h3 className="profile__title">Daniel Doe</h3>
						<p className="profile__subtitle">Web Designer</p>
						<p className="profile__text">Ut wisi enim ad minim veniam,quis nostrud exerci tationullamcorper suscipit lobortis nislut aliquip ex ea commodo</p>
					</div>
				</div>
			</div>
		</section>
	);
}