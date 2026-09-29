import error from "./assets/images/icon-error.svg";
import retry from "./assets/images/icon-retry.svg";
const ErrorState = function ({retryState, setRetryState}) {
	return (
		<div className="grid grid-cols-1 items-center place-items-center mt-12 text-center gap-6">
			<span>
				<img src={error} alt="" />
			</span>
			<h1 className="text-5xl">Something went wrong</h1>
			<p>
				We couldnt connect to the server (API error). Please try again later in
				a few moments.{" "}
			</p>
			<button onClick={() => setRetryState(retryState => retryState + 1)} className="rounded-sm shadow:bg-neutral-500 bg-neutral-600 flex items-center gap-2 px-4 py-2">
				<span>
					<img src={retry} alt="" />
				</span>
				<p >Retry</p>{" "}
			</button>
		</div>
	);
};

export default ErrorState;
