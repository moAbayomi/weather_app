import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import WeatherInfo from "./WeatherInfo";
const WeatherSection = function () {
	return (
		<div className="text-white grid grid-cols-1 gap-8 lg:grid-cols-3">
			<WeatherInfo />
			<DailyForecast />
			<HourlyForecast />
		</div>
	);
};

export default WeatherSection;
