import { FunctionComponent, useEffect } from "react";
import styles from "./forms.module.scss";
import React from "react";
import useEmail from "@/hooks/useEmail";
import Button from "../Button/Button";
import Text from "../Text/Text";

const FormsHOC = ({ fields, getSent }: { fields: string[]; getSent: (sent: boolean) => void }) => {
	const { emailDataMap, handleSubmit, loading, errors, isSent } = useEmail();

	getSent(isSent);

	// from

	return (
		<div
			style={{
				position: "relative",
			}}
		>
			<div
				className="text-center"
				style={{
					position: "absolute",
					top: "0%",
					left: "0%",
					width: "100%",
					height: "100%",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					display: isSent ? "flex" : "none",
					zIndex: 1,
					opacity: isSent ? 1 : 0,
					transition: "opacity 0.5s ease-in-out",
					backgroundColor: "rgba(23, 28, 36, 0.95)",
				}}
			>
				<Text type="h3" size="lg">
					Merci pour votre message !
				</Text>
				<Text type="p" size="md">
					Je vous répondrais dans les plus brefs délais.
				</Text>
			</div>
			<form onSubmit={handleSubmit} noValidate>
				<div className={styles["form-flex"]}>
					{fields.map((field, index) => {
						const fieldData = emailDataMap.get(field);
						const placeholder = fieldData?.placeholder;
						const value = fieldData?.value as string;
						const error = fieldData?.error as string;
						const size = fieldData?.size as string;
						const component = fieldData?.component as FunctionComponent<{
							name: string;
							placeholder?: string;
							required?: boolean;
							value: string;
							error?: string;
						}>;
						return (
							<div key={index} className={`${styles["form-wrap"]} ${styles[`size-${size}`]}`}>
								{React.createElement(component, {
									name: field,
									placeholder,
									value,
									error,
								})}
								{errors.status && errors.errors.has(field) && <span className={styles.error}>{errors.errors.get(field)}</span>}
							</div>
						);
					})}
				</div>
				<div className="text-center">
					<Button type="submit">
						<span className="flex items-center">Envoyer {loading && <span className={styles.spinner}></span>}</span>
					</Button>
				</div>
			</form>
		</div>
	);
};

export default FormsHOC;
