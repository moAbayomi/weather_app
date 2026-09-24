import rain from "./assets/images/icon-rain.webp";
import overcast from "./assets/images/icon-overcast.webp"
import snow from "./assets/images/icon-snow.webp";
import fog from "./assets/images/icon-fog.webp";
import drizzle from "./assets/images/icon-drizzle.webp";
import storm from "./assets/images/icon-storm.webp";
import cloudy from "./assets/images/icon-partly-cloudy.webp";
import sunny from "./assets/images/icon-sunny.webp";


const DailyForecast = function () {
	return (
		<section className="flex flex-col gap-5 lg:col-span-2 lg:row-start-2">
			<h3>Daily Forecast</h3>
			<div className="grid grid-cols-3 md:grid-cols-7 gap-4">
				<div className="flex flex-col items-center gap-4 bg-neutral-700 px-2.5 py-4 rounded-xl">
					<p>Tue</p>
					<span>
						<img src={rain} alt="" className="h-15 w-15" />
					</span>
					<div className="flex justify-between w-full">
						<p>
							20<span>&deg;</span>
						</p>
						<p>
							14<span>&deg;</span>
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center gap-4 bg-neutral-700 px-2.5 py-4 rounded-xl">
					<p>Wed</p>
					<span>
						<img src={drizzle} alt="" className="h-15 w-15" />
					</span>
					<div className="flex justify-between w-full">
						<p>
							20<span>&deg;</span>
						</p>
						<p>
							14<span>&deg;</span>
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center gap-4 bg-neutral-700 px-2.5 py-4 rounded-xl">
					<p>Thu</p>
					<span>
						<img src={sunny} alt="" className="h-15 w-15" />
					</span>
					<div className="flex justify-between w-full">
						<p>
							20<span>&deg;</span>
						</p>
						<p>
							14<span>&deg;</span>
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center gap-4 bg-neutral-700 px-2.5 py-4 rounded-xl">
					<p>Fri</p>
					<span>
						<img src={cloudy} alt="" className="h-15 w-15" />
					</span>
					<div className="flex justify-between w-full">
						<p>
							20<span>&deg;</span>
						</p>
						<p>
							14<span>&deg;</span>
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center gap-4 bg-neutral-700 px-2.5 py-4 rounded-xl">
					<p>Sat</p>
					<span>
						<img src={storm} alt="" className="h-15 w-15" />
					</span>
					<div className="flex justify-between w-full">
						<p>
							20<span>&deg;</span>
						</p>
						<p>
							14<span>&deg;</span>
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center gap-4 bg-neutral-700 px-2.5 py-4 rounded-xl">
					<p>Sun</p>
					<span>
						<img src={snow} alt="" className="h-15 w-15" />
					</span>
					<div className="flex justify-between w-full">
						<p>
							20<span>&deg;</span>
						</p>
						<p>
							14<span>&deg;</span>
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center gap-4 bg-neutral-700 px-2.5 py-4 rounded-xl">
					<p>Mon</p>
					<span>
						<img src={fog} alt="" className="h-15 w-15" />
					</span>
					<div className="flex justify-between w-full">
						<p>
							20<span>&deg;</span>
						</p>
						<p>
							14<span>&deg;</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DailyForecast;
