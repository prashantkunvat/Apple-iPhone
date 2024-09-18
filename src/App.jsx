import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import MainLoader from "./components/MainLoader";
import { useEffect, useState } from "react";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 4000);
	}, []);
	return (
		<>
			{isLoading ? (
				<MainLoader />
			) : (
				<main className="bg-black">
					<Navbar />
					<Hero />
					<Highlights />
					<Model />
					<Features />
					<HowItWorks />
					<Footer />
				</main>
			)}
		</>
	);
};

export default Sentry.withProfiler(App);
