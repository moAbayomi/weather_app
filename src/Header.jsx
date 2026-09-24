import logo from "./assets/images/logo.svg";
import dropdown from "./assets/images/icon-dropdown.svg";
import { useState } from "react";

const Header = function () {
	const [open, setOpen] = useState(false);
	return (
		<header className="grid grid-cols-1 gap-12 items-center text-center">
			<div className="flex justify-between items-center">
				<span>
					<img src={logo} alt="" />
				</span>

				<div className="text-white relative">
					<button
						onClick={() => setOpen(!open)}
						className="flex items-center gap-2">
						<p>Units</p>
						<span>
							<img src={dropdown} alt="" />
						</span>
					</button>

					{open && (
						<div className="absolute right-0 top-full mt-2 w-56 z-10">
							this is the dropdown
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
