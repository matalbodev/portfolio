import { RefObject, useCallback, useEffect } from "react";

const useScrollTo = () => {
	const scrollTo = useCallback((hash: string) => {
		const el = document.querySelector(hash) as HTMLElement;
		if (el) el.scrollIntoView({ behavior: "smooth" });
	}, []);

	return scrollTo;
};

export default useScrollTo;
