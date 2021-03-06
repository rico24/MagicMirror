/* Magic Mirror Test config custom calendar
 *
 * By Rejas
 * MIT Licensed.
 */
let config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: "en",
	timeFormat: 12,
	units: "metric",
	electronOptions: {
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true
		}
	},

	modules: [
		{
			module: "calendar",
			position: "bottom_bar",
			config: {
				calendars: [
					{
						maximumEntries: 6,
						maximumNumberOfDays: 3650,
						url: "http://localhost:8080/tests/configs/data/calendar_test_recurring.ics"
					}
				]
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
