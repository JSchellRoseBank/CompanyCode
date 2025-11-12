document.addEventListener("DOMContentLoaded", function () {
	// Initialize accordions when the page loads
	initializeAccordions();
});

function initializeAccordions() {
	// Get all accordion headers
	const accordionHeaders = document.querySelectorAll(".accordion-header");

	accordionHeaders.forEach((header) => {
		header.addEventListener("click", function () {
			// Check if this accordion is currently active
			const isActive = this.classList.contains("active");

			// Close all accordions in the same section (services or products)
			const parentSection = this.closest(
				".services-accordion, .products-accordion"
			);
			const siblingHeaders =
				parentSection.querySelectorAll(".accordion-header");

			siblingHeaders.forEach((siblingHeader) => {
				if (siblingHeader !== this) {
					siblingHeader.classList.remove("active");
					const siblingContent = siblingHeader.nextElementSibling;
					siblingContent.style.maxHeight = null;
					const siblingIcon =
						siblingHeader.querySelector(".accordion-icon");
					siblingIcon.classList.remove("rotated");
				}
			});

			// Toggle the clicked accordion
			if (!isActive) {
				// Open this accordion
				this.classList.add("active");
				const content = this.nextElementSibling;
				content.style.maxHeight = content.scrollHeight + "px";
				const icon = this.querySelector(".accordion-icon");
				icon.classList.add("rotated");
			} else {
				// Close this accordion (if clicking on already open accordion)
				this.classList.remove("active");
				const content = this.nextElementSibling;
				content.style.maxHeight = null;
				const icon = this.querySelector(".accordion-icon");
				icon.classList.remove("rotated");
			}
		});
	});
}
