export const validateEmail = value => {
	let url;

	try {
		url = new URL(value);
	} catch (_) {
		return false;  
	}

	return url.protocol === "http:" || url.protocol === "https:";
}