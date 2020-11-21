export interface NYTResponse {
	copyright: string
	last_updated: string
	num_results: number
	results: NYTArticle[]
	section: string
	status: string
}

export interface NYTArticle {
	abstract: string
	byline: string
	created_date: string
	des_facet: string[]
	geo_facet: string[]
	item_type: string
	kicker: string
	material_type_facet: string
	multimedia: Multimedia[]
	org_facet: string[]
	per_facet: string[]
	published_date: string
	section: string
	short_url: string
	subsection: string
	title: string
	updated_date: string
	uri: string
	url: string
}

export interface Multimedia {
	caption: string
	copyright: string
	format: string
	height: number
	subtype: string
	type: string
	url: string
	width: number
}