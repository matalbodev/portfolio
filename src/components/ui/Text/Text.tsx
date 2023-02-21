"use client";
import React from "react";
import styles from "./text.module.scss";
type TextProps = {
	type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
	props?: any;
	children: React.ReactNode;
	size?: "sm" | "base" | "md" | "lg" | "xl" | "2xl";
};
const Text: React.FC<TextProps> = ({ type, props, children, size }) => {
	return React.createElement(
		type,
		{
			...props,
			className: styles[`text-${size || "base"}`],
		},
		children
	);
};

export default Text;
