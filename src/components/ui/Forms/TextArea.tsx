"use client";
import styles from "./forms.module.scss";

type PropsType = {
	name: string;
	placeholder?: string;
	required?: boolean;
};
const FormsTextArea: React.FC<PropsType> = ({ required, name, placeholder }) => {
	return <textarea className={`${styles.input__textarea} ${styles.input}`} name={name} placeholder={placeholder ? placeholder : ""} required={required} />;
};

export default FormsTextArea;
