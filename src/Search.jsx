const Search = function ({ countryName, setCountryName, setLocation }) {
	const getCoords = async function (name) {
		const response = await fetch(
			`https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=10&language=en&format=json`,
		);
		const data = await response.json();
		return data;
	};
	return (
		<div className="text-white flex flex-col md:flex-row gap-4 my-12 md:w-[70%] mx-auto">
			<input
				type="text"
				value={countryName}
				onChange={(e) => setCountryName(e.target.value)}
				className="w-full px-4 bg-neutral-800 h-16 rounded-lg"
				placeholder="Search for a place"
			/>
			<button
				onClick={async () => {
					try {
						const data = await getCoords(countryName);
						if (data?.results?.length) {
							const { latitude, longitude, name, country } = data.results[0];
							console.log(latitude, longitude);
							setLocation({ latitude, longitude, name, country });
							setCountryName("");
						} else {
							setLocation(null);
						}
					} catch {
						setLocation(null);
					}
				}}
				className="md:flex-1 px-12 py-4 bg-primary-700 w-full h-16 rounded-lg text-2xl">
				Search
			</button>
		</div>
	);
};

export default Search;
