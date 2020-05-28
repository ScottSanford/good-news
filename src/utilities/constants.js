/**
 * This file contains constant variables throughout the application.
 * I prefer to have a separate file to maintain primitive values ('strings', numbers, booleans)
 * because these values can be easily mistyped (especially when working on a team).
 *
 * Since this is a smaller application, one file is fine but as the application
 * grows I might use individual files stored in each component folder.
 */
const constants = {
	apiKey: process.env.REACT_APP_NYTAPIKEY,
	articleDateFormat: 'MMM DD, YYYY',
	documentTitle: 'Good News',
	large: 'large',
	maxLargeCardTitleLength: 65,
	maxSmallCardTitleLength: 70,
	pageTitle: 'Explore',
	small: 'small',
	superJumbo: 'superJumbo',
	thumbLarge: 'thumbLarge'
}

export default constants