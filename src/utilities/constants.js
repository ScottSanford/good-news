/**
 * This file contains constant variables throughout the application.
 * I prefer to have a separate file to maintain primitive values ('strings', numbers, booleans)
 * because these values can be easily mistyped.
 * Also, it's easier to maintain the list in one file.
 *
 * Since this is a smaller application, one file is fine but as the application
 * grows I might use individual files stored in each component folder.
 */
const constants = {
	apiKey: process.env.REACT_APP_NYTAPIKEY,
	articleDateFormat: 'MMM DD, YYYY',
	documentTitle: 'Good News',
	pageTitle: 'Explore',
	firstArticleImage: 0,
}

export default constants