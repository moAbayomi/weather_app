import { getWeatherIcon } from "./utils/weatherCode";

const WeatherInfo = function ({ units, current, location }) {
	const date = new Date(current.time).toLocaleDateString("en-US", {
		weekday: "long",
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	const windUnit = units.wind == "mph" ? "mph" : "km/h";
	const precipUnit = units.precip === "in" ? "in" : "mm";
	return (
		<section className="flex flex-col gap-8 lg:col-span-2">
			<div className="w-full text-center bg-red-400 bg-no-repeat bg-cover bg-center bg-[url('./assets/images/bg-today-small.svg')] md:bg-[url('./assets/images/bg-today-large.svg')] flex flex-col gap-4 p-6">
				<h3 className="text-3xl font-semibold">{location.name}, {location.country}</h3>
				<p className="text-sm">{date}</p>

				<div className="flex items-center justify-center gap-6">
					<span className="flex justify-center items-center">
						<img
							src={getWeatherIcon(current.weather_code)}
							alt=""
							className="max-w-full"
							height="72"
							width="72"
						/>
					</span>
					<p className="text-8xl">
						{Math.round(current.temperature_2m)}<span>&deg;</span>
					</p>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-6 md:grid-cols-4">
				<div className="bg-neutral-600 p-4 flex flex-col justify-between gap-4 rounded-md shadow-sm">
					<p className="text-md">Feels Like</p>
					<p className="text-xl">
						{Math.round(current.apparent_temperature)}<span>&deg;</span>
					</p>
				</div>
				<div className="bg-neutral-600 p-4 flex flex-col gap-4 rounded-md">
					<p>Humidity</p>
					<p>
						{current.relative_humidity}<span>%</span>
					</p>
				</div>
				<div className="bg-neutral-600 p-4 flex flex-col gap-4 rounded-md">
					<p>Wind</p>
					<p>
						{Math.round(current.wind_speed_10m)} <span>{windUnit}</span>
					</p>
				</div>
				<div className="bg-neutral-600 p-4 flex flex-col gap-4 rounded-md">
					<p>Precipitation</p>
					<p>
						{current.precipitation}<span>{precipUnit}</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default WeatherInfo;
