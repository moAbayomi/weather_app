import logo from "./assets/images/logo.svg";
import dropdown from "./assets/images/icon-dropdown.svg";
import checkmark from "./assets/images/icon-checkmark.svg";
import { useState, useEffect, useRef } from "react";

const groups = [
	{
		key: "temp",
		label: "Temperature",
		options: [
			{ value: "celsius", label: "Celsius (°C)" },
			{ value: "fahrenheit", label: "Fahrenheit (°F)" },
		],
	},
	{
		key: "wind",
		label: "Wind Speed",
		options: [
			{ value: "kmh", label: "km/h" },
			{ value: "mph", label: "mph" },
		],
	},
	{
		key: "precip",
		label: "Precipitation",
		options: [
			{ value: "mm", label: "Millimeters (mm)" },
			{ value: "in", label: "Inches (in)" },
		],
	},
];
const METRIC = { temp: "celsius", wind: "kmh", precip: "mm" };
const IMPERIAL = { temp: "fahrenheit", wind: "mph", precip: "in" };

const Head = function ({ units, setUnits }) {
	const [open, setOpen] = useState(false);
	const wrapperRef = useRef(null);

	useEffect(() => {
		if (!open) return;

		function handleClick(e) {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
				setOpen(false);
			}
		}

		function handleKey(e) {
			if (e.key == "Escape") {
				setOpen(false);
			}
		}

		document.addEventListener("click", handleClick);
		document.addEventListener("keydown", handleKey);
		return () => {
			document.removeEventListener("click", handleClick);
			document.removeEventListener("keydown", handleKey);
		};
	}, [open]);

	const isImperial =
		units.temp == "fahrenheit" && units.wind == "mph" && units.precip == "in";

	function selectOption(groupKey, value) {
		setUnits((prev) => ({ ...prev, [groupKey]: value }));
	}

	function toggleSystem() {
		setUnits(isImperial ? METRIC : IMPERIAL);
	}

	return (
		<header className="flex justify-between items-center">
			<span>
				<img src={logo} alt="" />
			</span>

			<div ref={wrapperRef} className="relative text-white">
				<button
					onClick={() => setOpen((open) => !open)}
					className="text-white flex items-center gap-2 ">
					Units{" "}
					<span>
						<img
							src={dropdown}
							alt=""
							className={open ? "rotate-180 transition delay-75" : ""}
						/>
					</span>
				</button>
				{open && (
					<div className="absolute top-full mt-2.6 w-56 right-0 flex flex-col bg-neutral-800 border border-neutral-600 p-2 text-left shadow-lg rounded-sm">
						<button
							onClick={toggleSystem}
							className="py-2.5 px-2 text-left rounded-lg hover:bg-neutral-700 focus-visible:outline-1 focus-visible:outline-white">
							{isImperial ? "Switch to Metric" : "Switch to Imperial"}
						</button>

						{groups.map((group, i) => (
							<div
								key={group.key}
								className={`p-2 ${i > 0 ? "border-t border-t-neutral-300 pt-1" : ""}`}>
								<h4 className="text-sm text-neutral-300 p-2">{group.label}</h4>

								{group.options.map((option) => {
									const selected = units[group.key] == option.value;
									return (
										<button
											onClick={() => selectOption(group.key, option.value)}
											className={`p-2 rounded-md hover:bg-neutral-600 flex items-center justify-between w-full ${selected ? "bg-neutral-600" : ""}`}
											key={option.value}>
											{option.label}

											<span className="flex justify-center items-center">
												<img
													src={checkmark}
													alt=""
													className={selected ? "" : "hidden"}
												/>
											</span>
										</button>
									);
								})}
							</div>
						))}
					</div>
				)}
			</div>
		</header>
	);
};

export default Head;
