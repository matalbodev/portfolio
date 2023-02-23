"use client";
import React from "react";
import styles from "./text.module.scss";
type TextProps = {
	type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
	props?: any;
	children: React.ReactNode;
	size?: "sm" | "base" | "md" | "lg" | "xl" | "2xl";
	spaceBottom?: boolean;
	spaceTop?: boolean;
};
const Text: React.FC<TextProps> = ({ type, props, children, size, spaceBottom, spaceTop }) => {
	return React.createElement(
		type,
		{
			...props,
			className: styles[`text-${size || "base"}`],
			style: {
				marginBottom: spaceBottom ? "2rem" : "0",
				marginTop: spaceTop ? "1rem" : "0",
			},
		},
		children
	);
};

export default Text;
