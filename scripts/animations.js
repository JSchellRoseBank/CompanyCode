document.addEventListener("DOMContentLoaded", function () {
	initializeAnimations();
});

function initializeAnimations() {
	// Scroll animations
	setupScrollAnimations();

	// Fade in on page load
	fadeInOnLoad();

	// Parallax effect for hero section
	setupParallaxEffect();

	// Counter animation for stats (if you add them later)
	setupCounterAnimations();

	// Smooth scroll for anchor links
	setupSmoothScroll();
}

/**
 * Setup Intersection Observer for scroll animations
 */
function setupScrollAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animate-in");
				// Optional: stop observing after animation
				// observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe all sections
	const sections = document.querySelectorAll(
		"section:not(#hero-section), .card, .location-card, .accordion-container"
	);
	sections.forEach((section) => {
		section.classList.add("animate-on-scroll");
		observer.observe(section);
	});
}

/**
 * Fade in elements on page load
 */
function fadeInOnLoad() {
	// Navbar slide down
	const navbar = document.querySelector(".navbar");
	if (navbar) {
		navbar.style.transform = "translateY(-100%)";
		setTimeout(() => {
			navbar.style.transition = "transform 0.6s ease-out";
			navbar.style.transform = "translateY(0)";
		}, 200);
	}
}

/**
 * Parallax scrolling effect for hero section
 */
function setupParallaxEffect() {
	// Parallax effect disabled for hero section
	// Can be re-enabled if needed
}

/**
 * Counter animation for numbers (e.g., years of service, families served)
 */
function setupCounterAnimations() {
	const counters = document.querySelectorAll(".counter");

	counters.forEach((counter) => {
		const target = parseInt(counter.getAttribute("data-target"));
		const duration = 2000; // 2 seconds
		const increment = target / (duration / 16); // 60fps
		let current = 0;

		const updateCounter = () => {
			current += increment;
			if (current < target) {
				counter.textContent = Math.floor(current);
				requestAnimationFrame(updateCounter);
			} else {
				counter.textContent = target;
			}
		};

		// Start animation when element is in viewport
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && current === 0) {
						updateCounter();
					}
				});
			},
			{ threshold: 0.5 }
		);

		observer.observe(counter);
	});
}

/**
 * Smooth scrolling for anchor links
 */
function setupSmoothScroll() {
	const links = document.querySelectorAll('a[href^="#"]');

	links.forEach((link) => {
		link.addEventListener("click", function (e) {
			const href = this.getAttribute("href");

			// Skip if it's just "#"
			if (href === "#") return;

			const targetId = href.substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				e.preventDefault();

				const navbarHeight = document.querySelector(".navbar")
					? document.querySelector(".navbar").offsetHeight
					: 0;

				const targetPosition =
					targetElement.getBoundingClientRect().top +
					window.pageYOffset -
					navbarHeight -
					20;

				window.scrollTo({
					top: targetPosition,
					behavior: "smooth",
				});
			}
		});
	});
}

/**
 * Add pulse animation to important buttons
 */
function addButtonPulse() {
	const importantButtons = document.querySelectorAll(
		'#hero-buttons button, .learn-more-btn[data-modal="body-handling"]'
	);

	importantButtons.forEach((button) => {
		// Add subtle pulse every 3 seconds
		setInterval(() => {
			button.classList.add("pulse");
			setTimeout(() => {
				button.classList.remove("pulse");
			}, 600);
		}, 3000);
	});
}

// Optional: Add button pulse effect after page loads
setTimeout(addButtonPulse, 2000);

/**
 * Add floating animation to cards on hover
 */
function enhanceCardHovers() {
	const cards = document.querySelectorAll(".card, .location-card");

	cards.forEach((card) => {
		card.addEventListener("mouseenter", function () {
			this.style.transform = "translateY(-10px) scale(1.02)";
		});

		card.addEventListener("mouseleave", function () {
			this.style.transform = "translateY(0) scale(1)";
		});
	});
}

enhanceCardHovers();

/**
 * Loading animation for images
 */
function setupImageLoadAnimation() {
	const images = document.querySelectorAll("img");

	images.forEach((img) => {
		if (!img.complete) {
			img.style.opacity = "0";
			img.addEventListener("load", function () {
				this.style.transition = "opacity 0.5s ease-in";
				this.style.opacity = "1";
			});
		}
	});
}

setupImageLoadAnimation();

/**
 * Stagger animation for accordion items
 */
function staggerAccordionAnimation() {
	const accordions = document.querySelectorAll(".accordion-container");

	accordions.forEach((accordion, index) => {
		accordion.style.animationDelay = `${index * 0.1}s`;
	});
}

staggerAccordionAnimation();

