import { getWeatherIcon } from "./utils/weatherCode";

const DailyForecast = function ({ daily }) {
	const days = daily.time.map((date, i) => ({
		day: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
		max: Math.round(daily.temperature_2m_max[i]),
		min: Math.round(daily.temperature_2m_min[i]),
		code: daily.weather_code[i],
	}));
	return (
		<section className="flex flex-col gap-5 lg:col-span-2 lg:row-start-2 text-start">
			<h3>Daily Forecast</h3>
			<div className="grid grid-cols-3 md:grid-cols-7 gap-4">
				{days.map((d, i) => (
					<div
						key={d.day}
						className="flex flex-col items-center gap-4 bg-neutral-700 px-2.5 py-4 rounded-xl">
						<p>{d.day}</p>
						<img src={getWeatherIcon(d.code)} alt="" className="h-15 w-15" />
						<div className="flex justify-between w-full">
							<p>{d.max}&deg;</p>
							<p>{d.min}&deg;</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default DailyForecast;
