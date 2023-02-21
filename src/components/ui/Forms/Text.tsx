"use client";
import styles from "./forms.module.scss";

type PropsType = {
	name: string;
	placeholder?: string;
	required?: boolean;
};
const FormsText: React.FC<PropsType> = ({ required, name, placeholder }) => {
	return <input className={`${styles.input__text} ${styles.input}`} type="text" name={name} placeholder={placeholder ? placeholder : ""} required={required} />;
};

export default FormsText;
