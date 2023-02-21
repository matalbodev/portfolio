import FormsEmail from "@/components/ui/Forms/Email";
import FormsText from "@/components/ui/Forms/Text";
import { ComponentClass, FunctionComponent } from "react";

const useEmail = () => {
	const emailDataMap: Map<
		string,
		{
			value: string;
			placeholder: string;
			required: boolean;
			error?: string;
			component: string | FunctionComponent<any> | ComponentClass<any, any>;
		}
	> = new Map([
		[
			"name",
			{
				value: "",
				placeholder: "Votre nom*",
				required: true,
				component: FormsText,
			},
		],
		[
			"surname",
			{
				value: "",
				placeholder: "Votre prénom",
				required: false,
				component: FormsText,
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
			},
		],
	]);

	return { emailDataMap };
};

export default useEmail;
