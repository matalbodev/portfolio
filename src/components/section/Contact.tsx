"use client";
import FormsHOC from "../ui/Forms/HOC";
import Text from "../ui/Text/Text";
import Image from "next/image";
import useEmail from "../../hooks/useEmail";
import React, { FunctionComponent } from "react";
const Contact: React.FC = () => {
	const { emailDataMap } = useEmail();
	const fields = ["surname", "name", "email"];
	return (
		<div
			style={{
				position: "relative",
				paddingBottom: "322px",
				zIndex: 1,
			}}
		>
			<Text type="h2" size="xl">
				Contact
			</Text>

			<FormsHOC>
				{fields.map((field, index) => {
					const fieldData = emailDataMap.get(field);
					const placeholder = fieldData?.placeholder;
					const required = fieldData?.required;
					const value = fieldData?.value as string;
					const error = fieldData?.error as string;
					const component = fieldData?.component as FunctionComponent<{
						name: string;
						placeholder?: string;
						required?: boolean;
						value: string;
						error?: string;
					}>;

					return React.createElement(component, {
						key: index,
						name: field,
						placeholder,
						required,
						value,
						error,
					});
				})}
			</FormsHOC>

			<div
				style={{
					position: "absolute",
					bottom: 0,
					right: 0,
				}}
			>
				<Image src="/rocket-final.png" width={141} height={322} alt="rocket" />
			</div>
		</div>
	);
};

export default Contact;
