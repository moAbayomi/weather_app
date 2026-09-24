const Search = function () {
	return (
		<div className="text-white flex flex-col md:flex-row gap-4 my-12 md:w-[70%] mx-auto">
			<input
				type="text"
				className="w-full px-4 bg-neutral-800 h-16 rounded-lg"
				placeholder="Search for a place"
			/>
			<button className="md:flex-1 px-12 py-4 bg-primary-700 w-full h-16 rounded-lg text-2xl">Search</button>
		</div>
	);
};

export default Search;
