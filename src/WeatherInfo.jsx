import sunny from "./assets/images/icon-sunny.webp";

const WeatherInfo = function () {
	return (
		<section className="flex flex-col gap-8 lg:col-span-2">
			<div className="w-full text-center bg-red-400 bg-no-repeat bg-cover bg-center bg-[url('./assets/images/bg-today-small.svg')] md:bg-[url('./assets/images/bg-today-large.svg')] flex flex-col gap-4 p-6">
				<h3 className="text-3xl font-semibold">Berlin, Germany</h3>
				<p className="text-sm">Tuesday, August 5, 2025</p>

				<div className="flex items-center justify-center gap-6">
					<span className="flex justify-center items-center">
						<img
							src={sunny}
							alt=""
							className="max-w-full"
							height="72"
							width="72"
						/>
					</span>
					<p className="text-8xl">
						68<span>&deg;</span>
					</p>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-6 md:grid-cols-4">
				<div className="bg-neutral-600 p-4 flex flex-col justify-between gap-4 rounded-md shadow-sm">
					<p className="text-md">Feels Like</p>
					<p className="text-xl">
						64<span>&deg;</span>
					</p>
				</div>
				<div className="bg-neutral-600 p-4 flex flex-col gap-4 rounded-md">
					<p>Humidity</p>
					<p>
						46<span>%</span>
					</p>
				</div>
				<div className="bg-neutral-600 p-4 flex flex-col gap-4 rounded-md">
					<p>Wind</p>
					<p>
						9<span>mph</span>
					</p>
				</div>
				<div className="bg-neutral-600 p-4 flex flex-col gap-4 rounded-md">
					<p>Precipitation</p>
					<p>
						0<span>in</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default WeatherInfo;
