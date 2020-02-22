const RSVP_API_URL = process.env.REACT_APP_RSVP_API_URL;
if (typeof RSVP_API_URL !== 'string') {
	throw new Error(
		`Config "RSVP_API_URL" has unexpected value "${RSVP_API_URL}", expected to be of type string`
	);
}

const config = {
	RSVP_API_URL,
};

export default config;
