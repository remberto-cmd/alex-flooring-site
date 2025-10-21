export type PortfolioItem = {
	src: string;
	alt: string;
	title: string;
	location: string; // City, State
	description: string; // materials / type of service
};

export type PortfolioService = {
	slug: string;
	title: string;
	blurb: string;
	heroImage: string;
	seoTitle: string;
	seoDescription: string;
	items: PortfolioItem[];
};

export const portfolioServices: PortfolioService[] = [
	{
		slug: 'flooring-installation',
		title: 'Flooring Installation',
		blurb: 'Professional installation of hardwood, LVP/vinyl, tile, and stairs for durable, beautiful floors.',
		heroImage: '/logo2.jpg',
		seoTitle: 'Flooring Installation Portfolio | Alex Flooring & Carpentry LLC',
		seoDescription: 'See professional hardwood, LVP/vinyl, tile, and stair flooring installations completed across Northern Virginia.',
		items: [
			{ src: '/logo2.jpg', alt: 'Flooring installation project placeholder', title: 'Oak Hardwood', location: 'Northern Virginia', description: 'Solid oak planks with satin polyurethane finish.' },
			{ src: '/logo2.jpg', alt: 'Flooring installation project placeholder', title: 'Kitchen Tile', location: 'Northern Virginia', description: 'Porcelain tile in herringbone layout with epoxy grout.' },
			{ src: '/logo2.jpg', alt: 'Flooring installation project placeholder', title: 'Basement LVP', location: 'Northern Virginia', description: 'Waterproof LVP over sound-reducing underlayment.' },
			{ src: '/logo2.jpg', alt: 'Flooring installation project placeholder', title: 'Stair Refinishing', location: 'Northern Virginia', description: 'Sanded and stained treads with painted risers.' },
			{ src: '/logo2.jpg', alt: 'Flooring installation project placeholder', title: 'Bathroom Tile', location: 'Northern Virginia', description: 'Slip-resistant porcelain tile with waterproof membrane.' },
			{ src: '/logo2.jpg', alt: 'Flooring installation project placeholder', title: 'Wide Plank Hardwood', location: 'Northern Virginia', description: 'Engineered wide-plank floating installation.' },
		],
	},
	{
		slug: 'deck-construction',
		title: 'Deck Construction',
		blurb: 'Composite and wood decks with stairs, railings, and lighting—built for safety and outdoor living.',
		heroImage: '/logo2.jpg',
		seoTitle: 'Deck Construction Portfolio | Alex Flooring & Carpentry LLC',
		seoDescription: 'Explore custom composite and wood decks, stairs, railings, lighting, and repairs by our team.',
		items: [
			{ src: '/logo2.jpg', alt: 'Deck construction project placeholder', title: 'Composite Deck', location: 'Northern Virginia', description: 'Low-maintenance composite boards with hidden fasteners.' },
			{ src: '/logo2.jpg', alt: 'Deck construction project placeholder', title: 'Stair Rebuild', location: 'Northern Virginia', description: 'Pressure-treated stringers with secure treads and risers.' },
			{ src: '/logo2.jpg', alt: 'Deck construction project placeholder', title: 'Deck Resurfacing', location: 'Northern Virginia', description: 'New decking and rails over sound structure.' },
			{ src: '/logo2.jpg', alt: 'Deck construction project placeholder', title: 'Pergola Add-on', location: 'Northern Virginia', description: 'Shade pergola integrated into deck frame.' },
			{ src: '/logo2.jpg', alt: 'Deck construction project placeholder', title: 'Deck Lighting', location: 'Northern Virginia', description: 'LED post caps and stair lighting on dimmers.' },
			{ src: '/logo2.jpg', alt: 'Deck construction project placeholder', title: 'Railing Replacement', location: 'Northern Virginia', description: 'Modern aluminum railings with clean sightlines.' },
		],
	},
	{
		slug: 'bathroom-remodeling',
		title: 'Bathroom Remodeling',
		blurb: 'Partial or full remodels including tile showers, vanities, waterproofing, fixtures, and finishes.',
		heroImage: '/stafford-full-bathroom-remodel.webp.jpg',
		seoTitle: 'Bathroom Remodeling Portfolio | Alex Flooring & Carpentry LLC',
		seoDescription: 'View partial and full bathroom remodeling projects: tile showers, vanities, waterproofing, and modern finishes.',
		items: [
			{ src: '/dumfries-blue-marble-bathroom.webp.jpg', alt: 'Bathroom remodel project in Dumfries, VA', title: 'Blue Marble Bathroom', location: 'Dumfries, VA', description: 'Blue marble-look porcelain with niche and glass.' },
			{ src: '/fredericksburg-bathroom-remodel.webp.jpg', alt: 'Bathroom remodel project in Fredericksburg, VA', title: 'Bathroom Remodel', location: 'Fredericksburg, VA', description: 'New vanity, lighting, and waterproof shower surround.' },
			{ src: '/lake-anna-marble-bathroom.webp.jpg', alt: 'Bathroom remodel project in Lake Anna, VA', title: 'Marble Bathroom', location: 'Lake Anna, VA', description: 'Large-format marble-look tile with matte fixtures.' },
			{ src: '/woodbridge-porcelain-bathroom-tile.webp.jpeg', alt: 'Bathroom remodel project in Woodbridge, VA', title: 'Porcelain Tile Shower', location: 'Woodbridge, VA', description: 'Rectified porcelain tile with contrasting grout lines.' },
			{ src: '/alexandria-porcelain-bathroom-tile.webp.jpg', alt: 'Bathroom remodel project in Alexandria, VA', title: 'Porcelain Tile Bath', location: 'Alexandria, VA', description: 'Clean porcelain surround with inset niche.' },
			{ src: '/warrenton-small-bathroom-remodel.webp.jpg', alt: 'Bathroom remodel project in Warrenton, VA', title: 'Small Bathroom Remodel', location: 'Warrenton, VA', description: 'Space-saving vanity and waterproof flooring.' },
		],
	},
	{
		slug: 'painting',
		title: 'Painting',
		blurb: 'Interior and exterior painting with durable finishes, trim work, and clean, precise lines.',
		heroImage: '/logo2.jpg',
		seoTitle: 'Painting Portfolio | Alex Flooring & Carpentry LLC',
		seoDescription: 'See interior and exterior painting work with smooth, long-lasting finishes and detailed trim.',
		items: [
			{ src: '/logo2.jpg', alt: 'Painting project placeholder', title: 'Living Room Refresh', location: 'Northern Virginia', description: 'Low-VOC paint with crisp cut lines.' },
			{ src: '/logo2.jpg', alt: 'Painting project placeholder', title: 'Exterior Repaint', location: 'Northern Virginia', description: 'Weather-resistant exterior coatings.' },
			{ src: '/logo2.jpg', alt: 'Painting project placeholder', title: 'Trim Finishing', location: 'Northern Virginia', description: 'Sprayed doors, baseboards, and crown.' },
			{ src: '/logo2.jpg', alt: 'Painting project placeholder', title: 'Cabinet Painting', location: 'Northern Virginia', description: 'Durable enamel finish on cabinets.' },
			{ src: '/logo2.jpg', alt: 'Painting project placeholder', title: 'Bedroom Update', location: 'Northern Virginia', description: 'Calming neutral palette with satin sheen.' },
			{ src: '/logo2.jpg', alt: 'Painting project placeholder', title: 'Fence Staining', location: 'Northern Virginia', description: 'UV-protective exterior stain and sealer.' },
		],
	},
	{
		slug: 'fence-building',
		title: 'Fence Building',
		blurb: 'Wood and composite fences, gates, staining, and repairs for privacy and curb appeal.',
		heroImage: '/logo2.jpg',
		seoTitle: 'Fence Building Portfolio | Alex Flooring & Carpentry LLC',
		seoDescription: 'Browse wood and composite fence builds, gates, staining, and repairs completed around Northern Virginia.',
		items: [
			{ src: '/logo2.jpg', alt: 'Fence building project placeholder', title: 'Privacy Fence', location: 'Northern Virginia', description: 'Board-on-board wood privacy fence.' },
			{ src: '/logo2.jpg', alt: 'Fence building project placeholder', title: 'Cedar Gate', location: 'Northern Virginia', description: 'Cedar gate with black hardware.' },
			{ src: '/logo2.jpg', alt: 'Fence building project placeholder', title: 'Fence Repair', location: 'Northern Virginia', description: 'Post replacement and rail reinforcement.' },
			{ src: '/logo2.jpg', alt: 'Fence building project placeholder', title: 'Board-on-Board Fence', location: 'Northern Virginia', description: 'Overlap panels for added privacy.' },
			{ src: '/logo2.jpg', alt: 'Fence building project placeholder', title: 'Stained Fence', location: 'Northern Virginia', description: 'Oil-based stain for long-lasting color.' },
			{ src: '/logo2.jpg', alt: 'Fence building project placeholder', title: 'Composite Fence', location: 'Northern Virginia', description: 'Low-maintenance composite panels.' },
		],
	},
	{
		slug: 'carpentry-windows-doors-custom-cabinetry',
		title: 'Carpentry: Windows, Doors & Custom Cabinetry',
		blurb: 'Precision installation and custom carpentry for windows, doors, built-ins, and cabinetry.',
		heroImage: '/logo2.jpg',
		seoTitle: 'Carpentry Portfolio — Windows, Doors & Custom Cabinetry | Alex Flooring & Carpentry LLC',
		seoDescription: 'See carpentry projects including window and door installs, built-ins, trim, and custom cabinetry.',
		items: [
			{ src: '/logo2.jpg', alt: 'Carpentry project placeholder', title: 'Window Installation', location: 'Northern Virginia', description: 'Energy-efficient window replacements.' },
			{ src: '/logo2.jpg', alt: 'Carpentry project placeholder', title: 'Door Replacement', location: 'Northern Virginia', description: 'Prehung interior and exterior doors.' },
			{ src: '/logo2.jpg', alt: 'Carpentry project placeholder', title: 'Built-in Shelving', location: 'Northern Virginia', description: 'Custom shelving and media built-ins.' },
			{ src: '/logo2.jpg', alt: 'Carpentry project placeholder', title: 'Crown Molding', location: 'Northern Virginia', description: 'Precision mitered crown and trim.' },
			{ src: '/logo2.jpg', alt: 'Carpentry project placeholder', title: 'Custom Cabinetry', location: 'Northern Virginia', description: 'Paint-grade or stained custom cabinets.' },
			{ src: '/logo2.jpg', alt: 'Carpentry project placeholder', title: 'Wainscoting', location: 'Northern Virginia', description: 'Applied molding and panel details.' },
		],
	},
];
