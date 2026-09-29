import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import WeatherInfo from "./WeatherInfo";
const WeatherSection = function ({ units, weather, location }) {
	return (
		<div className="text-white grid grid-cols-1 gap-8 lg:grid-cols-3">
			<WeatherInfo units={units} current={weather.current} location={location} />
			<DailyForecast daily={weather.daily} />
			<HourlyForecast hourly={weather.hourly} />
		</div>
	);
};

export default WeatherSection;
