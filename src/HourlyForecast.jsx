import { getWeatherIcon } from "./utils/weatherCode";
import { useState } from "react";
const HourlyForecast = function ({ hourly }) {
	const handleEvent = function (e) {
		setSelectedDay(e.target.value);
	};

	const hours = hourly.time.map((d, i) => ({
		time: d,
		date: d.slice(0, 10),
		temp: Math.round(hourly.temperature_2m[i]),
		code: hourly.weather_code[i],
	}));

	const byDays = hours.reduce((acc, hr, i) => {
		if (!acc[hr.date]) acc[hr.date] = [];
		acc[hr.date].push(hr);
		return acc;
	}, {});

	const days = Object.keys(byDays);
	const [selectedDay, setSelectedDay] = useState(days[0]);
	return (
		<section className="flex flex-col gap-4 bg-neutral-800 p-6 rounded-2xl lg:col-start-3 lg:row-start-1 lg:row-span-2">
			<div className="flex justify-between items-center">
				<h3 className="text-xl font-semibold">Hourly Forecast</h3>
				<select
					className="bg-neutral-600 px-8 py-3 rounded-md"
					value={selectedDay}
					onChange={handleEvent}
					name=""
					id="">
					{days.map((day, i) => (
						<option
							key={day}
							value={new Date(day).toLocaleDateString("en-US", {
								weekday: "short",
							})}
							className="capitalize">
							{new Date(day).toLocaleDateString("en-US", { weekday: "short" })}
						</option>
					))}
				</select>
			</div>

			<div className="flex flex-col gap-4 overflow-y-auto lg:max-h-[37rem]">
				{byDays[selectedDay].map((h) => (
					<div
						key={h.time}
						className="flex items-center gap-2 bg-neutral-700 rounded-lg px-4 py-2">
						<img className="h-10 w-10" src={getWeatherIcon(h.code)} alt="" />
						<p className="text-xl">
							
							{new Date(h.time).toLocaleTimeString("en-US", {
								hour: "numeric",
							})}
						</p>
						<p className="ml-auto">{h.temp}&deg;</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HourlyForecast;
