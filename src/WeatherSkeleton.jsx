import load from "./assets/images/icon-loading.svg";

const WeatherSkeleton = function () {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-white animate-pulse">
			<section className="flex flex-col gap-8 lg:col-span-2 rounded-md">
				<div className="flex flex-col bg-neutral-800 items-center gap-3 h-72 rounded-2xl justify-center">
					<span>
						<img src={load} alt="" />
					</span>
					<p className="text-neutral-200">Loading...</p>
				</div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {["Feels Like", "Humidity", "Wind", "Precipitation"].map((q, i) => (
                        <div key={i} className="bg-neutral-800 flex flex-col p-4 rounded-sm justify-between items-start">
                            <p className="text-neutral-200">{q}</p>
                            <p className="text-3xl">--</p>
                        </div>
                    ) )}
                </div>
			</section>

            <section className="lg:row-start-2 lg:col-span-2 flex flex-col text-left gap-5">
                <h3>Daily Forecast</h3>
                <div className="grid grid-cols-3 lg:grid-cols-7 gap-4">
                    {Array.from({length: 7}).map((_, i) => (
                        <div key={i} className="rounded-xl h-40 bg-neutral-800"></div>
                    ))}
                </div>
            </section>

            <section className="lg:col-start-3 lg:row-span-2 flex flex-col gap-4 bg-neutral-800 p-6 rounded-2xl">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">Hourly Forecast</h3>
                    <div className="bg-neutral-600 text-2xl rounded-md px-4 py-2">-</div>
                </div>

                <div className="flex flex-col items-center gap-2">


                    {Array.from(7).map((_, i) => (
                        <div key={i} className="h-15 bg-neutral-700 rounded-lg"></div>
                    ))}
                </div>
            </section>

		</div>
	);
};

export default WeatherSkeleton;
