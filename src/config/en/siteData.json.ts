import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "{Perlo Homes}",
	// Your website's title and description (meta fields)
	title: "Perlo Homes - Building Faith, Family and Homes.",
	description:
		"PERLO Homes (CRC1334317) offers high-scale renovations, custom home builds and a heart for the local community in which they serve. Reach out to us about your home needs and we will be happy to help.",

	// used on contact page and footer
	contact: {
		address1: "1234 Main Street",
		address2: "Dunedin, FL 34698",
		phone: "(727) 773-7231",
		email: "wade@perlohomes.com",
	},

	// Your information for blog post purposes
	author: {
		name: "Perlo Homes",
		email: "wade@perlohomes.com",
		// facebook: "PerloHomes",
		// instagram: "PerloHomes",
		twitter: "PerloHomes",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/perlo-homes-logo.jpg",
		alt: "Perlo Homes logo",
	},
};

export default siteData;