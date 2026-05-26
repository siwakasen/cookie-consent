import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const [showCookieConsent, setShowCookieConsent] = useState(false);

	useEffect(() => {
		setShowCookieConsent(
			window.localStorage.getItem("cookie-consent-accepted") !== "true",
		);
	}, []);

	function acceptCookieConsent() {
		window.localStorage.setItem("cookie-consent-accepted", "true");
		setShowCookieConsent(false);
	}

	return (
		<>
			<div className="p-8">
				<h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
				<p className="mt-4 text-lg">
					Edit <code>src/routes/index.tsx</code> to get started.
				</p>
			</div>

			{showCookieConsent ? (
				<div className="fixed right-4 bottom-4 left-4 z-50 rounded-lg border border-gray-200 bg-white p-5 shadow-lg sm:left-auto sm:max-w-md">
					<p className="text-sm leading-6 text-gray-700">
						We use cookies to improve your browsing experience. By clicking
						accept, you consent to our use of cookies.
					</p>
					<button
						type="button"
						className="mt-4 rounded-md bg-gray-900 px-4 py-2 font-medium text-sm text-white transition hover:bg-gray-700"
						onClick={acceptCookieConsent}
					>
						Accept
					</button>
				</div>
			) : null}
		</>
	);
}
