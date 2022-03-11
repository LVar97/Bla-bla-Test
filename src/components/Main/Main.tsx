import React from "react";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import "./Main.scss";
import { Portfolio } from "./Portfolio/Portfolio";

export const Main: React.FC = () => {
	return (
		<main className="main">
			<Portfolio/>
			<About/>
			<Contact/>
		</main>
	);
}