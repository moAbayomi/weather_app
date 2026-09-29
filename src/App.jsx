import "./App.css";
//import Header from "./Header";
import Head from "./Head";
import Search from "./Search";
import ErrorState from "./ErrorState";
import WeatherSection from "./WeatherSection";
import WeatherSkeleton from "./WeatherSkeleton";
import { useEffect, useState } from "react";

function App() {
	const [units, setUnits] = useState({
		temp: "celsius",
		wind: "kmh",
		precip: "mm",
	});
	const [countryName, setCountryName] = useState("");
	const [location, setLocation] = useState({
		latitude: 52.52,
		longitude: 13.41,
		name: "Berlin",
		country: "Germany",
	});
	const [weather, setWeather] = useState({});
	const [status, setStatus] = useState("loading");
	const [retryState, setRetryState] = useState(0);

	useEffect(() => {
		if (!location) return;

		let ignore = false;

		const { latitude, longitude } = location;

		async function fetchData(lat, lon) {
			const url =
				`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
				`&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code` +
				`&hourly=temperature_2m,weather_code` +
				`&daily=weather_code,temperature_2m_max,temperature_2m_min` +
				`&timezone=auto` +
				`&temperature_unit=${units.temp}&wind_speed_unit=${units.wind}` +
				`&precipitation_unit=${units.precip === "in" ? "inch" : "mm"}`;

			try {
				const res = await fetch(url);
				if (!res.ok) throw new Error("bad request");
				const data = await res.json();
				console.log(data);

				if (ignore) return;

				setWeather(data);
				setStatus("done");
			} catch {
				if (!ignore) setStatus("error");
			}
		}
		console.log(retryState);
		fetchData(latitude, longitude);
		return () => (ignore = true);
	}, [units, location]);

	return (
		<div className="max-w-360 mx-auto p-4 text-center">
			<Head units={units} setUnits={setUnits} />
			{status == "error" ? (
				<div className="text-white">
					<ErrorState retryState={retryState} setRetryState={setRetryState} />
				</div>
			) : (
				<>
					(
					<h1 className="text-7xl font-semibold font-['DMSans'] text-white">
						How's the sky looking today?
					</h1>
					)
					{status == "loading" && (
						<div className="text-white">
							<h1 className="text-7xl font-semibold font-['DMSans'] text-white">
								How's the sky looking today?
							</h1>
							<Search
								countryName={countryName}
								setCountryName={setCountryName}
								setLocation={setLocation}
							/>
							<WeatherSkeleton />
						</div>
					)}
					{status == "done" && (
						<div className="">
							<Search
								countryName={countryName}
								setCountryName={setCountryName}
								setLocation={setLocation}
							/>
							<WeatherSection units={units} weather={weather} location={location} />
						</div>
					)}
				</>
			)}
		</div>
	);
}

export default App;
