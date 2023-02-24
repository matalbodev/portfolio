"use client";
import FormsHOC from "../ui/Forms/HOC";
import Text from "../ui/Text/Text";
import Image from "next/image";
import React from "react";
const Contact: React.FC = () => {
	const fields = ["surname", "name", "email", "message"];
	const [sent, setSent] = React.useState(false);

	const getSent = (sent: boolean) => {
		setSent(sent);
	};

	return (
		<div
			style={{
				zIndex: 1,
				position: "relative",
			}}
			className="mt-8"
		>
			<Text type="h2" size="2xl">
				Let&apos;s talk !
			</Text>
			<Text type="p" size="lg" spaceBottom>
				<span className="text-pink">Faites décoller la fusée :-)</span>
			</Text>

			<div className="grid items-center">
				<div className="grid-col md:size-1/2 lg:size-2/3">
					<FormsHOC fields={fields} getSent={getSent} />
				</div>
				<div className="grid-col md:size-1/2 lg:size-1/3 text-center">
					<div className={`${sent ? "lauching-rocket" : ""}`}>
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
		</div>
	);
};

export default Contact;
