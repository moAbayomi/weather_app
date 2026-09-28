import "./App.css";
import Header from "./Header";
import Search from "./Search";
import WeatherSection from "./WeatherSection";
import { useState } from "react";

function App() {
	const [units, setUnits] = useState({
		temp: "celcius",
		wind: "kmh",
		precip: "mm",
	});
	return (
		<div className="max-w-360 mx-auto p-4">
			<div className="">
				<Header units={units} setUnits={setUnits} />
				<Search />
				<WeatherSection units={units} />
			</div>
		</div>
	);
}

export default App;
