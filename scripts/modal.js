document.addEventListener("DOMContentLoaded", function () {
	initializeModals();
});

function initializeModals() {
	// Get modal elements
	const modal = document.getElementById("detailModal");
	const modalTitle = document.getElementById("modalTitle");
	const modalBody = document.getElementById("modalBody");
	const closeBtn = document.querySelector(".modal-close");
	const modalOverlay = document.querySelector(".modal-overlay");

	// Get all "Learn More" buttons
	const learnMoreButtons = document.querySelectorAll(".learn-more-btn");

	// Add click event to each "Learn More" button
	learnMoreButtons.forEach((button) => {
		button.addEventListener("click", function (e) {
			e.stopPropagation(); // Prevent accordion from toggling
			const modalId = this.getAttribute("data-modal");
			openModal(modalId, modalTitle, modalBody, modal);
		});
	});

	// Close modal when clicking the X button
	if (closeBtn) {
		closeBtn.addEventListener("click", function () {
			closeModal(modal);
		});
	}

	// Close modal when clicking the overlay
	if (modalOverlay) {
		modalOverlay.addEventListener("click", function () {
			closeModal(modal);
		});
	}

	// Close modal when pressing ESC key
	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape" && modal.classList.contains("active")) {
			closeModal(modal);
		}
	});
}

/**
 * Open modal with specific content
 */
function openModal(modalId, modalTitle, modalBody, modal) {
	const modalData = getModalContent(modalId);

	if (modalData) {
		modalTitle.textContent = modalData.title;
		modalBody.innerHTML = modalData.content;
		modal.classList.add("active");
		document.body.style.overflow = "hidden"; // Prevent background scrolling
	}
}

/**
 * Close modal
 */
function closeModal(modal) {
	modal.classList.remove("active");
	document.body.style.overflow = ""; // Restore scrolling
}

/**
 * Get modal content based on ID
 */
function getModalContent(modalId) {
	const modalContents = {
		"body-handling": {
			title: "Body Handling & Preparation",
			content: `
				<div class="modal-section">
					<h3>Professional Care When It Matters Most</h3>
					<p>Our experienced team provides dignified and respectful body handling services 24 hours a day, 7 days a week. We understand the importance of treating your loved one with the utmost care during this difficult time.</p>
				</div>

				<div class="modal-section">
					<h3>What's Included</h3>
					<ul>
						<li><strong>24/7 Body Collection:</strong> Our professional staff is available around the clock to collect your loved one from the hospital, nursing home, or private residence.</li>
						<li><strong>Refrigeration Facilities:</strong> State-of-the-art temperature-controlled storage to preserve dignity.</li>
						<li><strong>Embalming Services:</strong> Professional embalming performed by certified embalmers following international standards.</li>
						<li><strong>Cosmetic Preparation:</strong> Careful restoration and presentation to ensure your loved one looks peaceful.</li>
						<li><strong>Dressing & Presentation:</strong> We dress your loved one in their chosen attire with care and respect.</li>
						<li><strong>Viewing Arrangements:</strong> Private viewing rooms available for family and friends.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Our Process</h3>
					<p>We follow strict protocols and guidelines to ensure the highest standards of care. Our team is trained in cultural sensitivity and can accommodate specific religious or cultural requirements.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Body handling and preparation services start from <strong>R3,500</strong>. Contact us for a detailed quote based on your specific needs.</p>
				</div>
			`,
		},
		"funeral-planning": {
			title: "Funeral Planning Services",
			content: `
				<div class="modal-section">
					<h3>Comprehensive Planning Support</h3>
					<p>Let our experienced funeral directors guide you through every step of the planning process. We handle all the details so you can focus on honoring your loved one's memory.</p>
				</div>

				<div class="modal-section">
					<h3>Services Include</h3>
					<ul>
						<li><strong>Initial Consultation:</strong> One-on-one meeting to discuss your wishes, budget, and specific requirements.</li>
						<li><strong>Death Certificate Processing:</strong> We handle all paperwork and liaise with Home Affairs on your behalf.</li>
						<li><strong>Burial or Cremation Coordination:</strong> Arrangements with cemeteries or crematoriums throughout Cape Town.</li>
						<li><strong>Venue Booking:</strong> Assistance in securing churches, halls, or other venues for the service.</li>
						<li><strong>Officiant Arrangements:</strong> Connection with religious leaders or celebrants.</li>
						<li><strong>Music & Multimedia:</strong> Setup of audio-visual equipment for music, slideshows, and video tributes.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Personalization Options</h3>
					<p>We believe every funeral should be as unique as the person being remembered. We can incorporate special music, readings, cultural traditions, and personal touches to create a meaningful ceremony.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Full funeral planning services start from <strong>R5,000</strong>. This includes consultation, coordination, and on-the-day management.</p>
				</div>
			`,
		},
		"vehicles-transport": {
			title: "Vehicles & Transport",
			content: `
				<div class="modal-section">
					<h3>Dignified Transportation</h3>
					<p>Our fleet of professional vehicles ensures a respectful and smooth journey for your loved one and family members.</p>
				</div>

				<div class="modal-section">
					<h3>Available Vehicles</h3>
					<ul>
						<li><strong>Traditional Hearses:</strong> Classic black Mercedes-Benz hearses for a timeless, dignified procession.</li>
						<li><strong>Modern Hearses:</strong> Contemporary vehicles for those preferring a more modern aesthetic.</li>
						<li><strong>Luxury Limousines:</strong> Comfortable transportation for immediate family members (seats 6-8).</li>
						<li><strong>Minibuses:</strong> Air-conditioned coaches for larger family groups (seats 14-20).</li>
						<li><strong>Motorcycle Hearse:</strong> Unique option for motorcycle enthusiasts - a dignified alternative.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Professional Service</h3>
					<p>All vehicles are maintained to the highest standards and driven by professional, uniformed chauffeurs who understand the importance of this journey.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Hearse rental starts from <strong>R2,500</strong>. Limousine and minibus packages available. Contact us for distance-based quotes.</p>
				</div>
			`,
		},
		"catering-services": {
			title: "Catering Services",
			content: `
				<div class="modal-section">
					<h3>Thoughtful Catering for Memorial Gatherings</h3>
					<p>Sharing a meal after a funeral service is an important part of the grieving process. Our catering services take the stress out of feeding your guests.</p>
				</div>

				<div class="modal-section">
					<h3>Menu Options</h3>
					<ul>
						<li><strong>Traditional South African Menu:</strong> Vetkoek, braaivleis, pap, stews, and salads.</li>
						<li><strong>Buffet Service:</strong> Hot and cold options including roasted meats, vegetable dishes, rice, and potatoes.</li>
						<li><strong>Tea & Coffee Service:</strong> Complete beverage service with tea, coffee, juice, and water.</li>
						<li><strong>Snack Platters:</strong> Sandwiches, wraps, samosas, and pastries for smaller gatherings.</li>
						<li><strong>Dietary Requirements:</strong> Vegetarian, vegan, halal, and kosher options available.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Service Included</h3>
					<p>Our catering package includes delivery, setup, serving staff (for larger events), and cleanup. Tables, chairs, and crockery can be provided if needed.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Catering starts from <strong>R80 per person</strong> for basic refreshments, <strong>R150 per person</strong> for full buffet service.</p>
				</div>
			`,
		},
		"floral-arrangements": {
			title: "Floral Arrangements",
			content: `
				<div class="modal-section">
					<h3>Beautiful Floral Tributes</h3>
					<p>Flowers bring comfort and beauty to funeral services. Our experienced florists create elegant arrangements that honor your loved one's memory.</p>
				</div>

				<div class="modal-section">
					<h3>Available Arrangements</h3>
					<ul>
						<li><strong>Casket Sprays:</strong> Large arrangements designed to rest on top of the casket.</li>
						<li><strong>Standing Wreaths:</strong> Circular or heart-shaped wreaths on easel stands.</li>
						<li><strong>Cross Tributes:</strong> Floral arrangements in the shape of crosses.</li>
						<li><strong>Bouquets & Sheaves:</strong> Hand-tied bouquets for family members to carry or place.</li>
						<li><strong>Single Stem Tributes:</strong> Individual roses for guests to place during the service.</li>
						<li><strong>Custom Designs:</strong> Personalized arrangements reflecting hobbies, interests, or favorite colors.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Fresh, Seasonal Flowers</h3>
					<p>We source fresh flowers locally and use seasonal blooms for the best quality. Popular choices include roses, lilies, carnations, gerberas, and proteas.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Floral arrangements start from <strong>R500</strong> for bouquets, <strong>R1,500</strong> for casket sprays, and <strong>R2,000</strong> for elaborate standing tributes.</p>
				</div>
			`,
		},
		"memorial-products": {
			title: "Memorial Products",
			content: `
				<div class="modal-section">
					<h3>Lasting Tributes & Keepsakes</h3>
					<p>Preserve precious memories with our range of memorial products, from urns to keepsake jewelry.</p>
				</div>

				<div class="modal-section">
					<h3>Product Range</h3>
					<ul>
						<li><strong>Cremation Urns:</strong> Available in ceramic, metal, wood, and biodegradable materials. Sizes from full-size to keepsake.</li>
						<li><strong>Memorial Jewelry:</strong> Pendants, bracelets, and rings that can hold a small amount of ashes or a fingerprint.</li>
						<li><strong>Photo Frames & Albums:</strong> Premium quality frames and memory albums for cherished photographs.</li>
						<li><strong>Headstones & Plaques:</strong> Custom engraved granite or bronze markers (see separate modal).</li>
						<li><strong>Memory Boxes:</strong> Beautiful wooden or metal boxes to store keepsakes and mementos.</li>
						<li><strong>Memorial Cards & Bookmarks:</strong> Professionally printed remembrance cards for distribution at services.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Customization</h3>
					<p>Most products can be personalized with names, dates, photos, or special messages. We offer laser engraving and photo printing services.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Urns from <strong>R800</strong>, memorial jewelry from <strong>R500</strong>, photo frames from <strong>R200</strong>, memory boxes from <strong>R600</strong>.</p>
				</div>
			`,
		},
		"event-management": {
			title: "Event Management",
			content: `
				<div class="modal-section">
					<h3>Seamless Coordination</h3>
					<p>Our event management team ensures every aspect of the funeral service runs smoothly, allowing you to focus on saying goodbye.</p>
				</div>

				<div class="modal-section">
					<h3>Management Services</h3>
					<ul>
						<li><strong>Guest Coordination:</strong> RSVP management, guest list compilation, and attendance tracking.</li>
						<li><strong>Seating Arrangements:</strong> Strategic seating plans for family, VIPs, and general guests.</li>
						<li><strong>Program Design:</strong> Creation and printing of order-of-service programs.</li>
						<li><strong>AV Equipment:</strong> Setup and operation of microphones, speakers, projectors, and screens.</li>
						<li><strong>Photography & Videography:</strong> Professional documentation of the service (if desired).</li>
						<li><strong>Timeline Management:</strong> Ensuring the service starts on time and flows smoothly.</li>
						<li><strong>Ushers & Assistants:</strong> Professional staff to guide guests and manage logistics.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Day-of Coordination</h3>
					<p>A dedicated coordinator will be present throughout the service to handle any issues, manage vendors, and ensure everything proceeds according to plan.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Event management services start from <strong>R3,000</strong> for basic coordination, <strong>R8,000</strong> for comprehensive management including AV and staff.</p>
				</div>
			`,
		},
		"grief-support": {
			title: "Grief Support Resources",
			content: `
				<div class="modal-section">
					<h3>Supporting You Beyond the Funeral</h3>
					<p>Grief doesn't end after the funeral. We provide resources and connections to help you and your family navigate the grieving process.</p>
				</div>

				<div class="modal-section">
					<h3>Support Services</h3>
					<ul>
						<li><strong>Grief Counseling Referrals:</strong> Connections to qualified grief counselors and therapists in Cape Town.</li>
						<li><strong>Support Groups:</strong> Information about local bereavement support groups and meetings.</li>
						<li><strong>Educational Materials:</strong> Booklets and resources explaining the grieving process and coping strategies.</li>
						<li><strong>Children's Resources:</strong> Age-appropriate materials to help children understand and process loss.</li>
						<li><strong>Follow-up Care:</strong> Check-in calls and emails at 1 month, 3 months, and 1 year anniversaries.</li>
						<li><strong>Memorial Reminders:</strong> Thoughtful remembrance messages on birthdays and anniversaries.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Online Resources</h3>
					<p>Access to our online portal with articles, videos, and guided meditations to support your healing journey.</p>
				</div>

				<div class="modal-section">
					<h3>Availability</h3>
					<p>These support resources are provided <strong>free of charge</strong> to all families we serve. We're here for you long after the funeral ends.</p>
				</div>
			`,
		},
		"caskets-coffins": {
			title: "Caskets & Coffins",
			content: `
				<div class="modal-section">
					<h3>Quality Caskets for Every Budget</h3>
					<p>Choose from our wide selection of caskets and coffins, each crafted with dignity and respect. From simple and affordable to elegant and ornate, we have options to suit every preference and budget.</p>
				</div>

				<div class="modal-section">
					<h3>Available Options</h3>
					<ul>
						<li><strong>Solid Wood Caskets:</strong> Premium oak, mahogany, or pine with high-gloss finish. Includes brass or silver handles.</li>
						<li><strong>Veneer Caskets:</strong> Wood veneer over composite material - elegant appearance at a more affordable price.</li>
						<li><strong>Eco-Friendly Coffins:</strong> Biodegradable options made from bamboo, wicker, cardboard, or sustainable wood.</li>
						<li><strong>Metal Caskets:</strong> Steel or bronze caskets with protective seals for enhanced preservation.</li>
						<li><strong>Custom Options:</strong> Choice of interior lining (satin, velvet, cotton), colors, and hardware.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Viewing Available</h3>
					<p>Visit our showroom to view casket options in person and discuss customization. Our consultants will help you choose the perfect casket without pressure.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Coffins from <strong>R3,000</strong>, veneer caskets from <strong>R8,000</strong>, solid wood caskets from <strong>R15,000</strong>, metal caskets from <strong>R20,000</strong>.</p>
				</div>
			`,
		},
		urns: {
			title: "Cremation Urns",
			content: `
				<div class="modal-section">
					<h3>Beautiful Urns for Ashes</h3>
					<p>Our collection of cremation urns offers families a meaningful way to preserve and honor their loved one's ashes.</p>
				</div>

				<div class="modal-section">
					<h3>Urn Collection</h3>
					<ul>
						<li><strong>Ceramic & Porcelain:</strong> Hand-painted designs, glazed finishes in various colors and patterns.</li>
						<li><strong>Metal Urns:</strong> Brass, bronze, and copper urns with engraved designs. Durable and elegant.</li>
						<li><strong>Wooden Urns:</strong> Crafted from oak, rosewood, or mahogany. Can be personalized with engraving.</li>
						<li><strong>Biodegradable Urns:</strong> For water or earth burial. Made from salt, sand, gelatin, or plant materials.</li>
						<li><strong>Keepsake Urns:</strong> Smaller urns for sharing ashes among family members. Perfect for memorial jewelry.</li>
						<li><strong>Custom Urns:</strong> Unique shapes including hearts, books, angels, or custom-designed pieces.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Personalization</h3>
					<p>Add names, dates, photos, or meaningful messages through laser engraving, photo transfer, or hand-painting.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Standard urns from <strong>R800</strong>, premium urns from <strong>R2,500</strong>, custom designs from <strong>R4,000</strong>, keepsake urns from <strong>R300</strong>.</p>
				</div>
			`,
		},
		headstones: {
			title: "Headstones & Grave Markers",
			content: `
				<div class="modal-section">
					<h3>Permanent Memorials</h3>
					<p>Create a lasting tribute at the graveside with our custom-designed headstones and markers.</p>
				</div>

				<div class="modal-section">
					<h3>Monument Options</h3>
					<ul>
						<li><strong>Granite Headstones:</strong> Available in black, grey, pink, or red granite. Highly durable and weather-resistant.</li>
						<li><strong>Marble Monuments:</strong> Classic white or colored marble for an elegant appearance.</li>
						<li><strong>Bronze Plaques:</strong> Cast bronze markers mounted on granite bases. Traditional and timeless.</li>
						<li><strong>Flat Markers:</strong> Ground-level markers for cemeteries with restrictions on upright monuments.</li>
						<li><strong>Upright Monuments:</strong> Traditional standing headstones in various shapes and sizes.</li>
						<li><strong>Custom Designs:</strong> Unique shapes, religious symbols, or personalized artwork.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Design Services</h3>
					<p>Our designers will work with you to create a memorial that reflects your loved one's personality. We offer photo engraving, laser etching, hand-carving, and gold-leaf lettering.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Flat markers from <strong>R5,000</strong>, upright headstones from <strong>R12,000</strong>, custom monuments from <strong>R25,000</strong>. Installation included.</p>
				</div>
			`,
		},
		"funeral-programs": {
			title: "Funeral Programs",
			content: `
				<div class="modal-section">
					<h3>Professional Service Programs</h3>
					<p>Guide your guests through the funeral service with beautifully designed programs that honor your loved one's life.</p>
				</div>

				<div class="modal-section">
					<h3>Program Features</h3>
					<ul>
						<li><strong>Design Templates:</strong> Choose from dozens of professional templates or create a custom design.</li>
						<li><strong>Photo Layouts:</strong> Single or multiple photo options, including cover photos and photo collages.</li>
						<li><strong>Format Options:</strong> Bi-fold (4 pages), tri-fold (6 panels), or booklet (8-16 pages).</li>
						<li><strong>Content Sections:</strong> Order of service, obituary, life story, poem or prayer, pallbearers, acknowledgments.</li>
						<li><strong>Premium Printing:</strong> High-quality paper stock (matte or glossy), full-color printing.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Design Process</h3>
					<p>Provide us with photos, text, and any special requests. We'll create a proof for your approval before printing. Rush orders available.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Bi-fold programs from <strong>R15 per copy</strong>, tri-fold from <strong>R20 per copy</strong>, booklets from <strong>R35 per copy</strong>. Minimum order 25 copies.</p>
				</div>
			`,
		},
		"floral-tributes": {
			title: "Floral Tributes",
			content: `
				<div class="modal-section">
					<h3>Express Your Sympathy with Flowers</h3>
					<p>Fresh, beautiful floral arrangements to bring comfort and honor the memory of your loved one.</p>
				</div>

				<div class="modal-section">
					<h3>Tribute Options</h3>
					<ul>
						<li><strong>Sympathy Wreaths:</strong> Circular wreaths on easel stands - classic and dignified.</li>
						<li><strong>Standing Sprays:</strong> Tall arrangements designed for easel display at the service or graveside.</li>
						<li><strong>Casket Flowers:</strong> Full or half-casket sprays designed to drape over the casket.</li>
						<li><strong>Floral Garlands:</strong> Fresh flower garlands for traditional cultural ceremonies.</li>
						<li><strong>Single Stems:</strong> Roses or other flowers for guests to place individually during the service.</li>
						<li><strong>Delivery Included:</strong> We deliver directly to the venue or graveside.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Seasonal Flowers</h3>
					<p>We use the freshest seasonal blooms including roses, lilies, carnations, gerberas, chrysanthemums, and indigenous South African proteas.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Bouquets from <strong>R500</strong>, wreaths from <strong>R1,200</strong>, standing sprays from <strong>R1,800</strong>, casket sprays from <strong>R2,500</strong>.</p>
				</div>
			`,
		},
		"memorial-keepsakes": {
			title: "Memorial Keepsakes",
			content: `
				<div class="modal-section">
					<h3>Keep Memories Close</h3>
					<p>Cherish the memory of your loved one with personalized keepsakes that keep them close to your heart.</p>
				</div>

				<div class="modal-section">
					<h3>Keepsake Collection</h3>
					<ul>
						<li><strong>Memorial Jewelry:</strong> Pendants, bracelets, and rings that can hold ashes, hair, or fingerprints. Available in sterling silver and gold.</li>
						<li><strong>Fingerprint Keepsakes:</strong> Jewelry or ornaments featuring an actual fingerprint engraving.</li>
						<li><strong>Photo Frames:</strong> Premium wood or metal frames with optional engraving.</li>
						<li><strong>Memory Albums:</strong> Leather-bound books for photos, letters, and memories.</li>
						<li><strong>Memory Boxes:</strong> Beautiful wooden or metal boxes with compartments for treasured items.</li>
						<li><strong>Memorial Cards:</strong> Wallet-sized remembrance cards with photo and prayer.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Personalization</h3>
					<p>All keepsakes can be customized with names, dates, messages, photos, or fingerprints. Engraving completed within 5-7 business days.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Memorial cards from <strong>R10 each</strong>, photo frames from <strong>R200</strong>, jewelry from <strong>R500</strong>, memory boxes from <strong>R600</strong>.</p>
				</div>
			`,
		},
		"candles-decor": {
			title: "Candles & Ceremonial Décor",
			content: `
				<div class="modal-section">
					<h3>Create a Peaceful Atmosphere</h3>
					<p>Set the tone for a meaningful ceremony with our selection of candles, stands, and decorative elements.</p>
				</div>

				<div class="modal-section">
					<h3>Décor Items</h3>
					<ul>
						<li><strong>Memorial Candles:</strong> White pillar candles, taper candles, or votive candles. Available in various sizes.</li>
						<li><strong>LED Flameless Candles:</strong> Safe battery-operated candles with realistic flickering effect.</li>
						<li><strong>Candle Holders:</strong> Brass, silver, or glass holders and candelabras.</li>
						<li><strong>Pedestals & Stands:</strong> Display stands for photos, flowers, or the urn.</li>
						<li><strong>Fabric Draping:</strong> Elegant table runners and backdrop draping in white, cream, or chosen colors.</li>
						<li><strong>Memorial Guest Books:</strong> Beautiful bound books for guests to sign and leave messages.</li>
						<li><strong>Signage & Displays:</strong> Welcome signs, directional signs, and memory display boards.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Rental or Purchase</h3>
					<p>Most décor items are available for rental (returned after the service) or purchase (keep as a memorial item).</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Candles from <strong>R50</strong>, guest books from <strong>R200</strong>, pedestal rental from <strong>R150</strong>, fabric draping from <strong>R500</strong>.</p>
				</div>
			`,
		},
		"digital-memorials": {
			title: "Digital Memorial Pages",
			content: `
				<div class="modal-section">
					<h3>Online Memorials for the Digital Age</h3>
					<p>Create a lasting online tribute that family and friends can visit from anywhere in the world to share memories and celebrate a life well-lived.</p>
				</div>

				<div class="modal-section">
					<h3>Digital Features</h3>
					<ul>
						<li><strong>Memorial Website:</strong> Personalized webpage with custom URL (e.g., inmemoryofname.com).</li>
						<li><strong>Photo Galleries:</strong> Upload unlimited photos organized in albums. Support for high-resolution images.</li>
						<li><strong>Video Tributes:</strong> Embed videos, slideshows, or livestream the funeral service.</li>
						<li><strong>Online Guestbook:</strong> Visitors can leave condolences, share memories, and light virtual candles.</li>
						<li><strong>Life Timeline:</strong> Interactive timeline showcasing important life events and milestones.</li>
						<li><strong>Social Sharing:</strong> Easy sharing to Facebook, Twitter, WhatsApp, and email.</li>
						<li><strong>QR Codes:</strong> Generate QR codes for headstones linking directly to the memorial page.</li>
					</ul>
				</div>

				<div class="modal-section">
					<h3>Privacy & Control</h3>
					<p>You control who can view and contribute to the memorial. Options for public, private, or password-protected pages.</p>
				</div>

				<div class="modal-section">
					<h3>Pricing</h3>
					<p>Basic memorial page: <strong>R500</strong> (1 year hosting), Premium page with custom domain: <strong>R1,500</strong> (lifetime hosting).</p>
				</div>
			`,
		},
	};

	return modalContents[modalId] || null;
}
