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
		heroImage: '/lvp-flooring-dumfries-va.webp',
		seoTitle: 'Flooring Installation Portfolio | Alex Flooring & Carpentry LLC',
		seoDescription: 'See professional hardwood, LVP/vinyl, tile, and stair flooring installations completed across Northern Virginia.',
		items: [
			{ src: '/ceramic-tile-flooring-fairfax-va.webp', alt: 'Flooring installation project in Fairfax, VA', title: 'Ceramic Tile Flooring', location: 'Fairfax, VA', description: 'Durable ceramic tile installation for high-traffic areas.' },
			{ src: '/hardwood-flooring-installation-manassas-va.webp', alt: 'Flooring installation project in Manassas, VA', title: 'Hardwood Flooring Installation', location: 'Manassas, VA', description: 'Premium hardwood installation for timeless appeal.' },
			{ src: '/hardwood-steps-installation-fredericksburg-va.webp', alt: 'Flooring installation project in Fredericksburg, VA', title: 'Hardwood Steps Installation', location: 'Fredericksburg, VA', description: 'Custom hardwood stair installation with matching finishes.' },
			{ src: '/sanding-and-refinishing-hardwood-lakeridge.webp', alt: 'Flooring installation project in Lake Ridge, VA', title: 'Sanding and Refinishing', location: 'Lake Ridge, VA', description: 'Restored hardwood floors with smooth satin finish.' },
			{ src: '/stair-tread-installation-reston-va.webp', alt: 'Flooring installation project in Reston, VA', title: 'Stair Tread Installation', location: 'Reston, VA', description: 'Precision-crafted stair tread installation for seamless design flow.' },
			{ src: '/bristow-hardwood-herringbone-pattern-flooring-installation.webp', alt: 'Flooring installation project in Bristow, VA', title: 'Hardwood Herringbone Pattern', location: 'Bristow, VA', description: 'Custom herringbone hardwood flooring installation for a high-end finish.' },
		],
	},
	{
		slug: 'deck-construction',
		title: 'Deck Construction',
		blurb: 'Composite and wood decks with stairs, railings, and lighting—built for safety and outdoor living.',
		heroImage: '/dumfries-composite-wood-deck-with-metal-railing.webp',
		seoTitle: 'Deck Construction Portfolio | Alex Flooring & Carpentry LLC',
		seoDescription: 'Explore custom composite and wood decks, stairs, railings, lighting, and repairs by our team.',
		items: [
			{ src: '/dumfries-composite-wood-deck-with-metal-railing.webp', alt: 'Deck construction project in Dumfries, VA', title: 'Composite Wood Deck with Metal Railing', location: 'Dumfries, VA', description: 'Modern composite deck installation featuring black metal railings and weatherproof structure.' },
			{ src: '/dumfries-pressure-treated-wood-deck.webp', alt: 'Deck construction project in Dumfries, VA', title: 'Pressure-Treated Wood Deck', location: 'Dumfries, VA', description: 'Classic pressure-treated wood deck with custom trim and sealed surface.' },
			{ src: '/bull-run-pressure-treated-wood-deck.webp', alt: 'Deck construction project in Bull Run, VA', title: 'Pressure-Treated Deck', location: 'Bull Run, VA', description: 'Durable pressure-treated deck for backyard entertaining.' },
			{ src: '/haymarket-va-wood-deck-construction.webp', alt: 'Deck construction project in Haymarket, VA', title: 'Wood Deck Construction', location: 'Haymarket, VA', description: 'Custom-built wooden deck designed to complement existing architecture.' },
			{ src: '/gainesville-custom-deck-with-stairs.webp', alt: 'Deck construction project in Gainesville, VA', title: 'Custom Deck with Stairs', location: 'Gainesville, VA', description: 'Multi-level deck design with integrated stairs and handrails.' },
			{ src: '/springfield-low-maintenance-composite-deck.webp', alt: 'Deck construction project in Springfield, VA', title: 'Low-Maintenance Composite Deck', location: 'Springfield, VA', description: 'Composite deck built for longevity and easy maintenance.' },
		],
	}, 
	{
		slug: 'bathroom-remodeling',
		title: 'Bathroom Remodeling',
		blurb: 'Partial or full remodels including tile showers, vanities, waterproofing, fixtures, and finishes.',
		heroImage: '/stafford-full-bathroom-remodel.webp',
		seoTitle: 'Bathroom Remodeling Portfolio | Alex Flooring & Carpentry LLC',
		seoDescription: 'View partial and full bathroom remodeling projects: tile showers, vanities, waterproofing, and modern finishes.',
		items: [
			{ src: '/dumfries-blue-marble-bathroom.webp', alt: 'Bathroom remodel project in Dumfries, VA', title: 'Blue Marble Bathroom', location: 'Dumfries, VA', description: 'Blue marble-look porcelain with niche and glass.' },
			{ src: '/fredericksburg-bathroom-remodel.webp', alt: 'Bathroom remodel project in Fredericksburg, VA', title: 'Bathroom Remodel', location: 'Fredericksburg, VA', description: 'New vanity, lighting, and waterproof shower surround.' },
			{ src: '/lake-anna-marble-bathroom.webp', alt: 'Bathroom remodel project in Lake Anna, VA', title: 'Marble Bathroom', location: 'Lake Anna, VA', description: 'Large-format marble-look tile with matte fixtures.' },
			{ src: '/woodbridge-porcelain-bathroom-tile.webp', alt: 'Bathroom remodel project in Woodbridge, VA', title: 'Porcelain Tile Shower', location: 'Woodbridge, VA', description: 'Rectified porcelain tile with contrasting grout lines.' },
			{ src: '/alexandria-porcelain-bathroom-tile.webp', alt: 'Bathroom remodel project in Alexandria, VA', title: 'Porcelain Tile Bath', location: 'Alexandria, VA', description: 'Clean porcelain surround with inset niche.' },
			{ src: '/warrenton-small-bathroom-remodel.webp', alt: 'Bathroom remodel project in Warrenton, VA', title: 'Small Bathroom Remodel', location: 'Warrenton, VA', description: 'Space-saving vanity and waterproof flooring.' },
		],
	},
	{
		slug: 'painting',
		title: 'Painting',
		blurb: 'Interior and exterior painting with durable finishes, trim work, and clean, precise lines.',
		heroImage: '/herndon-va-gray-wall-paint-with-accent-wall.webp',
		seoTitle: 'Painting Portfolio | Alex Flooring & Carpentry LLC',
		seoDescription: 'See interior and exterior painting work with smooth, long-lasting finishes and detailed trim.',
		items: [
			{ src: '/dumfries-interior-painting-living-room-and-laundry-area.webp', alt: 'Interior painting project in Dumfries, VA', title: 'Living Room & Laundry Area Painting', location: 'Dumfries, VA', description: 'Brightened living space with durable, low-VOC paint for walls and ceilings.' },
			{ src: '/dumfries-va-freshly-painted-bedroom-with-natural-light.webp', alt: 'Bedroom painting project in Dumfries, VA', title: 'Bedroom Painting', location: 'Dumfries, VA', description: 'Soft neutral wall tones with premium interior paint providing a smooth finish.' },
			{ src: '/fredericksburg-va-basement-painted-white.webp', alt: 'Finished basement carpentry project in Fredericksburg, VA', title: 'Basement Finish & Trim Work', location: 'Fredericksburg, VA', description: 'Basement remodel featuring detailed trim, fresh paint, and door installations.' },
			{ src: '/dumfries-va-corner-wall-with-white-molding-and-neutral-painted-wall.webp', alt: 'Interior molding and wall painting in Dumfries, VA', title: 'Interior Molding & Paint', location: 'Dumfries, VA', description: 'Interior trim and wall molding completed with smooth paint finishes.' },
		],
	},
	{
		slug: 'fence-building',
		title: 'Fence Building',
		blurb: 'Wood and composite fences, gates, staining, and repairs for privacy and curb appeal.',
		heroImage: '/triangle-va-privacy-fence-installation.webp',
		seoTitle: 'Fence Building Portfolio | Alex Flooring & Carpentry LLC',
		seoDescription: 'Browse wood and composite fence builds, gates, staining, and repairs completed around Northern Virginia.',
		items: [
			{ src: '/montclair-va-tall-wooden-privacy-fence.webp', alt: 'Wooden privacy fence installation in Montclair, VA', title: 'Tall Wooden Privacy Fence', location: 'Montclair, VA', description: 'Tall wooden privacy fence providing strength, durability, and style.' },
			{ src: '/springfield-va-vinyl-fence-installation.webp', alt: 'Vinyl fence installation project in Springfield, VA', title: 'Vinyl Fence Installation', location: 'Springfield, VA', description: 'Low-maintenance vinyl fence built for long-lasting protection and curb appeal.' },
		],
	},
	{
		slug: 'kitchens-and-custom-carpentry',
		title: 'Kitchens & Custom Carpentry',
		blurb: 'Precision carpentry and kitchen remodeling, including cabinetry, trim work, doors, and built-ins designed for quality and style.',
		heroImage: '/alexandria-va-white-custom-cabinets.webp',
		seoTitle: 'Kitchens & Custom Carpentry Portfolio | Alex Flooring & Carpentry LLC',
		seoDescription: 'Explore kitchen remodeling and custom carpentry projects featuring cabinetry, doors, trim work, and precision finishes.',
		items: [
			{ src: '/alexandria-va-white-custom-cabinets.webp', alt: 'Custom kitchen cabinetry in Alexandria, VA', title: 'White Custom Cabinets', location: 'Alexandria, VA', description: 'Shaker-style white cabinets installed with premium hardware and crown trim.' },
			{ src: '/dumfries-va-custom-cabinets-and-kitchen.webp', alt: 'Custom cabinets and kitchen remodel in Dumfries, VA', title: 'Custom Cabinets & Kitchen Remodel', location: 'Dumfries, VA', description: 'Full kitchen cabinetry and trim installation with coordinated finishes and backsplash.' },
			{src: '/silverspring-md-kitchen-and-custom-cabinets.webp', alt: 'Kitchen and custom cabinet installation in Silver Spring, MD', title: 'Kitchen and Custom Cabinets', location: 'Silver Spring, MD', description: 'Complete kitchen remodel with custom-built cabinets, new countertops, and detailed trim finishes.'},  
		],
	},
];
