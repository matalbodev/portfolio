"use client";
import React, { useCallback, useEffect } from "react";
import { useRef } from "react";

type PropsTypes = {
	bg: React.ReactNode;
	children: React.ReactNode;
};
const ParallaxContainer: React.FC<PropsTypes> = ({ children, bg }) => {
	const blurParallaxRef = useRef<HTMLDivElement>(null);
	const onScroll = (ref: any) => {
		// scroll speed
		const ratio = 0.01;
		// simulate parallax effect
		const scroll = window.scrollY;

		// move the div up and down
		const translateY = Math.round(scroll * ratio);
		ref.style.transform = `translateY(${translateY}%)`;
	};

	useEffect(() => {
		const ref = blurParallaxRef.current;
		window.addEventListener("scroll", () => onScroll(blurParallaxRef.current));
		return () => window.removeEventListener("scroll", () => onScroll(ref));
	}, []);

	return (
		<div
			style={{
				position: "relative",
				overflow: "hidden",
				zIndex: 1,
			}}
		>
			{React.cloneElement(bg as React.ReactElement, {
				ref: blurParallaxRef,
				style: {
					transition: "transform 0.1s ease",
				},
			})}
			{children}
		</div>
	);
};

export default ParallaxContainer;
