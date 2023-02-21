import { FunctionComponent } from "react";
import styles from "./forms.module.scss";
import React from "react";
import useEmail from "@/hooks/useEmail";
import Button from "../Button/Button";

const FormsHOC = ({ fields }: { fields: string[] }) => {
	const { emailDataMap, handleSubmit } = useEmail();

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles["form-flex"]}>
				{fields.map((field, index) => {
					const fieldData = emailDataMap.get(field);
					const placeholder = fieldData?.placeholder;
					const required = fieldData?.required;
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
								required,
								value,
								error,
							})}
						</div>
					);
				})}
			</div>
			<div className="text-center">
				<Button type="submit">Envoyer</Button>
			</div>
		</form>
	);
};

export default FormsHOC;
