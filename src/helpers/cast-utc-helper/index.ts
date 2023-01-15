export const CastDateUTC = {
	/**
	 * Format's a local date to UTC
	 * @param {Date} date
	 */
	toUTC: (date: Date) => {
		const utc = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
		return utc;
	},
	/**
	 * Format's an UTC date to local
	 * @param {Date} date
	 */
	toLocal: (date: Date) => {
		const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
		return local;
	},
};
