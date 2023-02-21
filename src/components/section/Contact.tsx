"use client";
import FormsHOC from "../ui/Forms/HOC";
import Text from "../ui/Text/Text";
import Image from "next/image";
import useEmail from "../../hooks/useEmail";
import React, { FunctionComponent } from "react";
const Contact: React.FC = () => {
	const fields = ["surname", "name", "email", "message"];
	return (
		<div
			style={{
				zIndex: 1,
				position: "relative",
			}}
		>
			<Text type="h2" size="xl">
				Contact
			</Text>

			<div className="grid items-center">
				<div className="grid-col size-2/3">
					<FormsHOC fields={fields} />
				</div>
				<div className="grid-col size-1/3 text-center">
					<Image
						style={{
							display: "inline-block",
						}}
						src="/rocket-final.png"
						width={141}
						height={322}
						alt="rocket"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
