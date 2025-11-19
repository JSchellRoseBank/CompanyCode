/**
 * Lazy Loading for Images - Improves page speed and performance
 * Uses Intersection Observer API for modern browsers with fallback
 */

document.addEventListener("DOMContentLoaded", function () {
	initializeLazyLoading();
});

function initializeLazyLoading() {
	// Get all images with loading="lazy" attribute or data-src
	const lazyImages = document.querySelectorAll(
		'img[loading="lazy"], img[data-src]'
	);

	// Check if browser supports Intersection Observer
	if ("IntersectionObserver" in window) {
		// Use Intersection Observer for efficient lazy loading
		const imageObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const img = entry.target;
						loadImage(img);
						observer.unobserve(img);
					}
				});
			},
			{
				// Start loading when image is 50px from viewport
				rootMargin: "50px 0px",
				threshold: 0.01,
			}
		);

		// Observe all lazy images
		lazyImages.forEach((img) => {
			imageObserver.observe(img);
		});
	} else {
		// Fallback for older browsers - load all images immediately
		lazyImages.forEach((img) => {
			loadImage(img);
		});
	}

	// Also handle background images with lazy loading
	initializeBackgroundLazyLoading();
}

/**
 * Load an image by setting its src from data-src
 */
function loadImage(img) {
	// If image has data-src, use it
	if (img.dataset.src) {
		img.src = img.dataset.src;
	}

	// If image has data-srcset, use it
	if (img.dataset.srcset) {
		img.srcset = img.dataset.srcset;
	}

	// Add loaded class for CSS transitions
	img.classList.add("lazy-loaded");

	// Remove data attributes after loading
	delete img.dataset.src;
	delete img.dataset.srcset;
}

/**
 * Lazy load background images
 */
function initializeBackgroundLazyLoading() {
	const lazyBackgrounds = document.querySelectorAll(".lazy-background");

	if ("IntersectionObserver" in window) {
		const backgroundObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const element = entry.target;
						const bgUrl = element.dataset.bg;

						if (bgUrl) {
							element.style.backgroundImage = `url('${bgUrl}')`;
							element.classList.add("lazy-loaded");
							delete element.dataset.bg;
						}

						observer.unobserve(element);
					}
				});
			},
			{
				rootMargin: "50px 0px",
				threshold: 0.01,
			}
		);

		lazyBackgrounds.forEach((element) => {
			backgroundObserver.observe(element);
		});
	} else {
		// Fallback for older browsers
		lazyBackgrounds.forEach((element) => {
			const bgUrl = element.dataset.bg;
			if (bgUrl) {
				element.style.backgroundImage = `url('${bgUrl}')`;
				element.classList.add("lazy-loaded");
			}
		});
	}
}

/**
 * Preload critical images (above the fold)
 */
function preloadCriticalImages() {
	const criticalImages = document.querySelectorAll(".preload-image");

	criticalImages.forEach((img) => {
		if (img.dataset.src) {
			const link = document.createElement("link");
			link.rel = "preload";
			link.as = "image";
			link.href = img.dataset.src;
			document.head.appendChild(link);

			// Load the image immediately
			loadImage(img);
		}
	});
}

// Preload critical images immediately
preloadCriticalImages();

/**
 * Add responsive image loading based on screen size
 */
function getResponsiveImageSrc(img) {
	const width = window.innerWidth;

	// Check if image has responsive sources
	if (img.dataset.srcSmall && width < 768) {
		return img.dataset.srcSmall;
	} else if (img.dataset.srcMedium && width < 1200) {
		return img.dataset.srcMedium;
	} else if (img.dataset.srcLarge) {
		return img.dataset.srcLarge;
	}

	return img.dataset.src;
}

/**
 * Performance monitoring - measure lazy loading impact
 */
if (window.performance && window.performance.timing) {
	window.addEventListener("load", () => {
		setTimeout(() => {
			const perfData = window.performance.timing;
			const pageLoadTime =
				perfData.loadEventEnd - perfData.navigationStart;
			const domReadyTime =
				perfData.domContentLoadedEventEnd - perfData.navigationStart;

			console.log(
				`Page Load Time: ${(pageLoadTime / 1000).toFixed(2)}s`
			);
			console.log(
				`DOM Ready Time: ${(domReadyTime / 1000).toFixed(2)}s`
			);

			// Count lazy loaded images
			const lazyLoadedImages =
				document.querySelectorAll(".lazy-loaded").length;
			console.log(
				`Lazy Loaded Images: ${lazyLoadedImages}`
			);
		}, 0);
	});
}

