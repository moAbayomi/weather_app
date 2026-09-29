import rain from "../assets/images/icon-rain.webp";
import overcast from "../assets/images/icon-overcast.webp"
import snow from "../assets/images/icon-snow.webp";
import fog from "../assets/images/icon-fog.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import storm from "../assets/images/icon-storm.webp";
import cloudy from "../assets/images/icon-partly-cloudy.webp";
import sunny from "../assets/images/icon-sunny.webp";


export function getWeatherIcon(code) {
	if (code === 0) return sunny;
	if (code <= 2) return cloudy;
	if (code === 3) return overcast;
	if (code <= 48) return fog;
	if (code <= 57) return drizzle;
	if (code <= 67 || (code >= 80 && code <= 82)) return rain;
	if (code <= 77 || code === 85 || code === 86) return snow;
	return storm; // 95–99
}