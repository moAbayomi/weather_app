import fog from "./assets/images/icon-fog.webp";
const HourlyForecast = function () {
	return (
		<section className="flex flex-col gap-4 bg-neutral-800 p-6 rounded-2xl lg:col-start-3 lg:row-start-1 lg:row-span-2">
			<div className="flex justify-between items-center">
				<h3 className="text-xl font-semibold">Hourly Forecast</h3>
				<select className="bg-neutral-600 px-8 py-3 rounded-md" name="" id="">
					<option value="tuesday">Tuesday</option>
				</select>
			</div>

			<div className="flex flex-col gap-4 overflow-y-auto lg:max-h-[37rem]">
				<div className="flex justify-start items-center gap-2 bg-neutral-700 rounded-lg px-4 py-2">
					<span>
						<img className="h-16 w-16" src={fog} alt="" />
					</span>
					<p className="text-xl">
						3 <span>PM</span>
					</p>
					<p className="ml-auto">
						68<span>&deg;</span>
					</p>
				</div>
				<div className="flex justify-start items-center gap-2 bg-neutral-700 rounded-lg px-4 py-2">
					<span>
						<img className="h-16 w-16" src={fog} alt="" />
					</span>
					<p className="text-xl">
						3 <span>PM</span>
					</p>
					<p className="ml-auto">
						68<span>&deg;</span>
					</p>
				</div>
				<div className="flex justify-start items-center gap-2 bg-neutral-700 rounded-lg px-4 py-2">
					<span>
						<img className="h-16 w-16" src={fog} alt="" />
					</span>
					<p className="text-xl">
						3 <span>PM</span>
					</p>
					<p className="ml-auto">
						68<span>&deg;</span>
					</p>
				</div>
				<div className="flex justify-start items-center gap-2 bg-neutral-700 rounded-lg px-4 py-2">
					<span>
						<img className="h-16 w-16" src={fog} alt="" />
					</span>
					<p className="text-xl">
						3 <span>PM</span>
					</p>
					<p className="ml-auto">
						68<span>&deg;</span>
					</p>
				</div>
				<div className="flex justify-start items-center gap-2 bg-neutral-700 rounded-lg px-4 py-2">
					<span>
						<img className="h-16 w-16" src={fog} alt="" />
					</span>
					<p className="text-xl">
						3 <span>PM</span>
					</p>
					<p className="ml-auto">
						68<span>&deg;</span>
					</p>
				</div>
				<div className="flex justify-start items-center gap-2 bg-neutral-700 rounded-lg px-4 py-2">
					<span>
						<img className="h-16 w-16" src={fog} alt="" />
					</span>
					<p className="text-xl">
						3 <span>PM</span>
					</p>
					<p className="ml-auto">
						68<span>&deg;</span>
					</p>
				</div>
				<div className="flex justify-start items-center gap-2 bg-neutral-700 rounded-lg px-4 py-2">
					<span>
						<img className="h-16 w-16" src={fog} alt="" />
					</span>
					<p className="text-xl">
						3 <span>PM</span>
					</p>
					<p className="ml-auto">
						68<span>&deg;</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default HourlyForecast;
