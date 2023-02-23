import FormsEmail from "@/components/ui/Forms/Email";
import FormsText from "@/components/ui/Forms/Text";
import FormsTextArea from "@/components/ui/Forms/TextArea";
import { ComponentClass, FunctionComponent, useState } from "react";

const sendEmail = async (data: { [k: string]: FormDataEntryValue }) => {
	const response = await fetch("/api/contact", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return response;
};

const useEmail = () => {
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({
		status: false,
		errors: new Map(),
	});
	const [isSent, setIsSent] = useState(false);
	const emailDataMap: Map<
		string,
		{
			value: string;
			placeholder: string;
			required: boolean;
			error?: string;
			component: string | FunctionComponent<any> | ComponentClass<any, any>;
			size: "1/2" | "full";
		}
	> = new Map([
		[
			"name",
			{
				value: "",
				placeholder: "Votre nom*",
				required: true,
				component: FormsText,
				size: "1/2",
			},
		],
		[
			"surname",
			{
				value: "",
				placeholder: "Votre prénom",
				required: false,
				component: FormsText,
				size: "1/2",
			},
		],
		[
			"email",
			{
				value: "",
				placeholder: "Votre email*",
				required: true,
				component: FormsEmail,
				size: "full",
			},
		],
		[
			"message",
			{
				value: "",
				placeholder: "Votre message*",
				required: true,
				component: FormsTextArea,
				size: "full",
			},
		],
	]);

	const checkForErrors = (data: { [k: string]: FormDataEntryValue }) => {
		const errors = new Map();
		for (const [key, value] of Object.entries(data)) {
			const fieldData = emailDataMap.get(key);
			if (fieldData?.required && value.length === 0) {
				errors.set(key, "Ce champ est requis");
			}

			if (key === "email" && value.length > 0) {
				const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
				if (!emailRegex.test(value as string)) {
					console.log("not ok");
					errors.set(key, "Veuillez entrer une adresse email valide");
				}
			}
		}
		return errors;
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		setLoading(true);
		// get form data
		const formData = new FormData(event.target);
		// get form data as object
		const data = Object.fromEntries(formData.entries());

		// check for errors
		const errors = checkForErrors(data);
		const errorsArray = Array.from(errors.entries());
		// if errors, set errors
		if (errorsArray.length > 0) {
			console.log("errors", errors);
			setLoading(false);
			setErrors((prev) => ({ ...prev, status: true, errors }));
			return;
		}

		try {
			const response = await sendEmail(data);
			if (response.status === 200) {
				setLoading(false);
				setErrors((prev) => ({ ...prev, status: false, errors: new Map() }));
				setIsSent(true);
				// wait 1 sec and reset setIsSent
				setTimeout(() => {
					setIsSent(false);
				}, 3000);
				// event target reset
				event.target.reset();
			} else {
				throw new Error("Error while sending email");
			}
		} catch (error: unknown) {
			throw new Error("Error while sending email");
		}
	};

	return { emailDataMap, handleSubmit, loading, setLoading, errors, isSent };
};

export default useEmail;
