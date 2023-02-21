import FormsEmail from "@/components/ui/Forms/Email";
import FormsText from "@/components/ui/Forms/Text";
import FormsTextArea from "@/components/ui/Forms/TextArea";
import { ComponentClass, FunctionComponent } from "react";

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
				error: "Veuillez indiquer une adresse email valide",
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
				error: "Veuillez indiquer un message",
				component: FormsTextArea,
				size: "full",
			},
		],
	]);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		// get form data
		const formData = new FormData(event.target);
		// get form data as object
		const data = Object.fromEntries(formData.entries());

		try {
			const response = await sendEmail(data);
			console.log(data);
			const json = await response.json();
			console.log(json);
		} catch (error: unknown) {
			throw new Error("Error while sending email");
		}
	};

	return { emailDataMap, handleSubmit };
};

export default useEmail;
