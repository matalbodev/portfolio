import getConfig from "next/config";

const config = getConfig();

export const API_HOST = config?.publicRuntimeConfig?.apiHost || "";
export const API_TOKEN = config?.publicRuntimeConfig?.apiToken || "";

export const fetcher = (endpoint: string, method: "GET" | "POST" | "PUT" | "DELETE") =>
	fetch(`${API_HOST}/${endpoint}`, {
		method: method,
		headers: {
			"Content-Type": "application/json",
			Authorization: `bearer ${API_TOKEN}`,
		},
	}).then((res) => res.json());
