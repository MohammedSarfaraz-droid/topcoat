"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation<T extends HTMLElement>() {
	const ref = useRef<T | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		let hasRevealed = false;
		let rafId: number | null = null;
		let observer: IntersectionObserver | null = null;

		const reveal = () => {
			if (hasRevealed) {
				return;
			}

			hasRevealed = true;
			rafId = window.requestAnimationFrame(() => {
				setIsVisible(true);
				observer?.disconnect();
			});
		};

		const target = ref.current;

		if (!target) {
			// Never keep content hidden if ref binding is delayed for any reason.
			reveal();
			return;
		}

		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (prefersReducedMotion || !("IntersectionObserver" in window)) {
			reveal();
			return;
		}

		const revealIfInViewport = () => {
			const rect = target.getBoundingClientRect();
			const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

			if (rect.top <= viewportHeight * 0.95 && rect.bottom >= 0) {
				reveal();
				return true;
			}

			return false;
		};

		if (revealIfInViewport()) {
			return;
		}

		observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;

				if (entry.isIntersecting || entry.intersectionRatio > 0) {
					reveal();
				}
			},
			{
				threshold: [0, 0.01, 0.1],
				rootMargin: "0px 0px -8% 0px",
			}
		);

		observer.observe(target);

		const failSafeTimeout = window.setTimeout(() => {
			reveal();
		}, 1200);

		const handleViewportChange = () => {
			revealIfInViewport();
		};

		window.addEventListener("resize", handleViewportChange);
		window.addEventListener("orientationchange", handleViewportChange);
		window.addEventListener("pageshow", handleViewportChange);

		return () => {
			window.clearTimeout(failSafeTimeout);
			if (rafId !== null) {
				window.cancelAnimationFrame(rafId);
			}
			window.removeEventListener("resize", handleViewportChange);
			window.removeEventListener("orientationchange", handleViewportChange);
			window.removeEventListener("pageshow", handleViewportChange);
			observer?.disconnect();
		};
	}, []);

	return { ref, isVisible };
}