export const fetcher = (endpoint: string, method: "GET" | "POST" | "PUT" | "DELETE") =>
	fetch(`${process.env.API_HOST}/${endpoint}`, {
		method: method,
		headers: {
			"Content-Type": "application/json",
			Authorization: `bearer ${process.env.API_TOKEN}`,
		},
	}).then((res) => res.json());
