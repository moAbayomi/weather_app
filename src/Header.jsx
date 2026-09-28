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

const Header = function ({ units, setUnits }) {
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
		units.temp == "Farenheit" && units.wind == "mph" && units.precip == "in";

	function selectOption(groupKey, value) {
		setUnits((prev) => ({ ...prev, [groupKey]: value }));
	}

	function toggleSystem() {
		setUnits(isImperial ? METRIC : IMPERIAL);
	}

	return (
		<header className="grid grid-cols-1 gap-12 items-center text-center">
			<div className="flex justify-between items-center">
				<span>
					<img src={logo} alt="" />
				</span>

				<div ref={wrapperRef} className="text-white relative">
					<button
						onClick={() => setOpen((open) => !open)}
						aria-haspopup="true"
						aria-expanded={open}
						className="flex items-center gap-2.5 bg-neutral-800 px-4 py-3 rounded-lg focus-visible:outline-2 focus-visible:outline-white">
						<span>Units</span>
						<img
							src={dropdown}
							alt=""
							className={`transition-transform ${open ? "rotate-180" : ""}`}
						/>
					</button>

					{open && (
						<div className="absolute right-0 top-full mt-2.5 w-56 z-10 flex flex-col gap-1 bg-neutral-800 border border-neutral-600 rounded-xl p-2 text-left shadow-lg">
							<button
								onClick={toggleSystem}
								className="px-2 py-2.5 rounded-lg hover:bg-neutral-700 focus-visible:outline-1 focus-visible:outline-white">
								{isImperial ? "Switch to Metric" : "Switch to Imperial"}
							</button>

							{groups.map((group, i) => (
								<div
									key={group.key}
									className={`flex flex-col gap-1 ${i > 0 ? "border-t border-neutral-600 pt-1" : ""}`}>
									<h4 className="px-2 pt-1.5 text-sm text-neutral-300">
										{group.label}
									</h4>

									{group.options.map((opt) => {
										const selected = units[group.key] === opt.value;
										return (
											<button
												key={opt.value}
												onClick={() => selectOption(group.key, opt.value)}
												aria-pressed={selected}
												className={`flex justify-between items-center px-2 py-2.5 rounded-lg hover:bg-neutral-700 ${
													selected ? "bg-neutral-700" : ""
												}`}>
												<span>{opt.label}</span>
												{selected && <img src={checkmark} alt="" />}
											</button>
										);
									})}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
			<h1 className="text-7xl font-semibold font-['DMSans'] text-white">
				How's the sky looking today?
			</h1>
		</header>
	);
};

export default Header;
