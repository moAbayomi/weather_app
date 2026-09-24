import "./App.css";
import Header from "./Header";
import Search from "./Search";
import WeatherSection from "./WeatherSection";

function App() {
	return (
		<div className="max-w-360 mx-auto p-4">
			<div className="">
				<Header />
				<Search />
				<WeatherSection/>
			</div>
		</div>
	);
}

export default App;
