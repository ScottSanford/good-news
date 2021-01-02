/**
 * This file contains constant variables throughout the application.
 * I prefer to have a separate file to maintain primitive values ('strings', numbers, booleans)
 * because these values can be easily mistyped (especially when working on a team).
 *
 * Since this is a smaller application, one file is fine but as the application
 * grows I might use individual files stored in each component folder.
 */

interface Constants {
	apiKey: string | undefined
	articleDateFormat: string
	baseApiUrl: string
	documentTitle: string
	large: string
	maxLargeCardTitleLength: number
	maxSmallCardTitleLength: number
	pageTitle: string
	small: string
	superJumbo: string
	thumbLarge: string
	topArticleIndex: number
}

const constants: Constants = {
	apiKey: process.env.REACT_APP_NYTAPIKEY,
	articleDateFormat: 'MMM DD, YYYY',
	baseApiUrl: 'https://api.nytimes.com/svc/topstories/v2',
	documentTitle: 'Feature Branch - Good News!!',
	large: 'large',
	maxLargeCardTitleLength: 65,
	maxSmallCardTitleLength: 70,
	pageTitle: 'Explore',
	small: 'small',
	superJumbo: 'superJumbo',
	thumbLarge: 'thumbLarge',
	topArticleIndex: 5,
}

export default constants