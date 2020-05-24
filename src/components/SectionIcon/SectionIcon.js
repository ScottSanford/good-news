import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBriefcase,
	faBookReader,
	faCalendarDay,
	faCommentDots,
	faFilm,
	faFlask,
	faFootballBall,
	faGlobe,
	faGraduationCap,
	faHamburger,
	faHome,
	faNewspaper,
	faPaintBrush,
	faPodcast,
	faRunning,
	faSun,
	faTshirt,
} from '@fortawesome/free-solid-svg-icons'


function sectionIcon(sectionType) {
	switch (sectionType) {
		case 'at-home':
			return faHome

		case 'arts':
			return faPaintBrush

		case 'books':
			return faBookReader

		case 'business':
			return faBriefcase

		case 'climate':
			return faSun

		case 'dining':
			return faHamburger

		case 'fashion':
			return faTshirt

		case 'health':
			return faRunning

		case 'movies':
			return faFilm

		case 'opinion':
			return faCommentDots

		case 'podcasts':
			return faPodcast

		case 'science':
			return faFlask

		case 'smarter-living':
			return faGraduationCap

		case 'sports':
			return faFootballBall

		case 'style':
			return faTshirt

		case 'sunday-review':
			return faCalendarDay

		case 'well':
			return faRunning

		case 'world':
			return faGlobe

		default:
			return faNewspaper
	}
}

const SectionIcon = ({ section, styleClass }) => <FontAwesomeIcon icon={sectionIcon(section)} className={styleClass} />

export default SectionIcon