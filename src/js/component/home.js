import React from "react";
import Navbar from "./WebP.jsx";
import Container from "./Container.jsx";
import Card from "./Card.jsx";
export function Home() {
	return (
		<div>
			<Navbar />
			<Container />
			<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}
