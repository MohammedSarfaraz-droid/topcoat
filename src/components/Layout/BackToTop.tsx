"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SIZE = 52;
const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const BackToTop = () => {
	const [progress, setProgress] = useState(0);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		let frameId: number | null = null;

		const updateProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const nextProgress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
			setProgress(nextProgress);
			setVisible(scrollTop > 80);
			frameId = null;
		};

		const requestUpdate = () => {
			if (frameId !== null) {
				return;
			}
			frameId = window.requestAnimationFrame(updateProgress);
		};

		requestUpdate();
		window.addEventListener("scroll", requestUpdate, { passive: true });
		window.addEventListener("resize", requestUpdate);

		return () => {
			window.removeEventListener("scroll", requestUpdate);
			window.removeEventListener("resize", requestUpdate);
			if (frameId !== null) {
				window.cancelAnimationFrame(frameId);
			}
		};
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	const offset = CIRCUMFERENCE * (1 - progress);

	return (
		<button
			type="button"
			onClick={scrollToTop}
			aria-label="Back to top"
			className={`group fixed bottom-8 right-8 z-50 flex items-center justify-center cursor-pointer transition-all duration-300 ${
				visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
			}`}
			style={{ width: SIZE, height: SIZE }}
		>
			{/* Dark background fill */}
			<div className="absolute inset-1 rounded-full bg-[#0d0f12] shadow-lg shadow-black/50 transition-colors duration-300 group-hover:bg-primary" />

			{/* SVG progress ring */}
			<svg
				width={SIZE}
				height={SIZE}
				viewBox={`0 0 ${SIZE} ${SIZE}`}
				className="absolute inset-0 -rotate-90"
				aria-hidden="true"
			>
				{/* Track ring */}
				<circle
					cx={SIZE / 2}
					cy={SIZE / 2}
					r={RADIUS}
					fill="none"
					stroke="#282c33"
					strokeWidth="2"
				/>
				{/* Progress ring */}
				<circle
					cx={SIZE / 2}
					cy={SIZE / 2}
					r={RADIUS}
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeDasharray={CIRCUMFERENCE}
					strokeDashoffset={offset}
					className="text-primary"
				/>
			</svg>

			{/* Arrow icon */}
			<ArrowUp className="relative z-10 h-4 w-4 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
		</button>
	);
};

export default BackToTop;
