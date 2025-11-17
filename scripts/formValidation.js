document.addEventListener("DOMContentLoaded", function () {
	initializeFormValidation();
	setupFormHelpers();
});

/**
 * Initialize form validation for all forms
 */
function initializeFormValidation() {
	// Set minimum date for date inputs to today
	const dateInputs = document.querySelectorAll('input[type="date"]');
	const today = new Date().toISOString().split("T")[0];
	dateInputs.forEach((input) => {
		input.setAttribute("min", today);
	});

	// Character counter for textareas
	const messageField = document.getElementById("message");
	if (messageField) {
		messageField.addEventListener("input", updateCharacterCount);
	}

	// Real-time validation on blur
	const formInputs = document.querySelectorAll(
		"input, select, textarea"
	);
	formInputs.forEach((input) => {
		input.addEventListener("blur", function () {
			validateField(this);
		});
	});
}

/**
 * Setup form helper functions
 */
function setupFormHelpers() {
	// Format phone number as user types
	const phoneInputs = document.querySelectorAll('input[type="tel"]');
	phoneInputs.forEach((input) => {
		input.addEventListener("input", formatPhoneNumber);
	});
}

/**
 * Update character count for textarea
 */
function updateCharacterCount() {
	const charCountSpan = document.getElementById("charCount");
	if (charCountSpan) {
		charCountSpan.textContent = this.value.length;

		// Change color when approaching limit
		if (this.value.length > 900) {
			charCountSpan.style.color = "#dd0303";
		} else if (this.value.length > 800) {
			charCountSpan.style.color = "#fa812f";
		} else {
			charCountSpan.style.color = "#333";
		}
	}
}

/**
 * Format phone number input
 */
function formatPhoneNumber(e) {
	let value = e.target.value.replace(/\D/g, "");

	// South African format: +27 21 123 4567
	if (value.startsWith("27")) {
		value = value.substring(2);
	} else if (value.startsWith("0")) {
		value = value.substring(1);
	}

	if (value.length <= 2) {
		e.target.value = value;
	} else if (value.length <= 5) {
		e.target.value = `${value.slice(0, 2)} ${value.slice(2)}`;
	} else if (value.length <= 9) {
		e.target.value = `${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5)}`;
	} else {
		e.target.value = `${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5, 9)}`;
	}
}

/**
 * Validate individual field
 */
function validateField(field) {
	const errorElement = document.getElementById(`${field.id}-error`);
	let errorMessage = "";

	// Clear previous error
	if (errorElement) {
		errorElement.textContent = "";
		field.classList.remove("error");
	}

	// Check if field is required and empty
	if (field.hasAttribute("required") && !field.value.trim()) {
		errorMessage = "This field is required.";
	}
	// Email validation
	else if (field.type === "email" && field.value) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(field.value)) {
			errorMessage = "Please enter a valid email address.";
		}
	}
	// Phone validation
	else if (field.type === "tel" && field.value) {
		const phoneRegex = /^[0-9+\s\-()]{10,15}$/;
		if (!phoneRegex.test(field.value)) {
			errorMessage =
				"Please enter a valid phone number (10-15 digits).";
		}
	}
	// Min length validation
	else if (
		field.hasAttribute("minlength") &&
		field.value.length < parseInt(field.getAttribute("minlength"))
	) {
		errorMessage = `Minimum ${field.getAttribute("minlength")} characters required.`;
	}
	// Max length validation
	else if (
		field.hasAttribute("maxlength") &&
		field.value.length > parseInt(field.getAttribute("maxlength"))
	) {
		errorMessage = `Maximum ${field.getAttribute("maxlength")} characters allowed.`;
	}
	// Number range validation
	else if (field.type === "number" && field.value) {
		const min = field.getAttribute("min");
		const max = field.getAttribute("max");
		const value = parseInt(field.value);

		if (min && value < parseInt(min)) {
			errorMessage = `Value must be at least ${min}.`;
		} else if (max && value > parseInt(max)) {
			errorMessage = `Value must not exceed ${max}.`;
		}
	}
	// Checkbox validation
	else if (field.type === "checkbox" && field.hasAttribute("required")) {
		if (!field.checked) {
			errorMessage = "You must agree to continue.";
		}
	}

	// Display error if any
	if (errorMessage && errorElement) {
		errorElement.textContent = errorMessage;
		field.classList.add("error");
		return false;
	}

	return true;
}

/**
 * Validate entire form
 */
function validateForm(formId) {
	const form = document.getElementById(formId);
	let isValid = true;

	// Validate all required fields
	const fields = form.querySelectorAll("[required]");
	fields.forEach((field) => {
		if (!validateField(field)) {
			isValid = false;
		}
	});

	return isValid;
}

/**
 * Handle enquiry type change to show/hide conditional fields
 */
function handleEnquiryTypeChange() {
	const enquiryType = document.getElementById("enquiryType").value;
	const serviceDetails = document.getElementById("serviceDetails");

	// Show service details for service-related enquiries
	const serviceTypes = [
		"funeral-service",
		"cremation",
		"burial",
		"memorial-service",
		"pre-planning",
	];

	if (serviceTypes.includes(enquiryType)) {
		serviceDetails.style.display = "block";
	} else {
		serviceDetails.style.display = "none";
	}
}

/**
 * Handle enquiry form submission
 */
function handleEnquirySubmit(event) {
	event.preventDefault();

	// Validate form
	if (!validateForm("enquiryForm")) {
		showFormResponse(
			"Please correct the errors in the form.",
			"error"
		);
		return false;
	}

	// Show loading state
	const submitButton = event.target.querySelector('button[type="submit"]');
	const originalText = submitButton.textContent;
	submitButton.disabled = true;
	submitButton.innerHTML =
		'<span class="spinner"></span> Processing...';

	// Collect form data
	const formData = new FormData(event.target);
	const enquiryData = Object.fromEntries(formData.entries());

	// Simulate processing (replace with actual AJAX call)
	setTimeout(() => {
		processEnquiry(enquiryData, submitButton, originalText);
	}, 1500);

	return false;
}

/**
 * Process enquiry data and display response
 */
function processEnquiry(data, button, originalText) {
	// Calculate estimated cost based on enquiry type
	const costEstimates = {
		"funeral-service": "R15,000 - R35,000",
		cremation: "R8,000 - R15,000",
		burial: "R12,000 - R25,000",
		products: "R3,000 - R20,000",
		"memorial-service": "R5,000 - R15,000",
		"pre-planning": "R10,000 - R50,000",
		volunteer: "No cost - Volunteer position",
		sponsorship: "Partnership opportunities available",
		other: "Please contact us for details",
	};

	const estimatedCost = costEstimates[data.enquiryType] || "Contact for quote";

	// Build response message
	let responseHTML = `
        <div class="enquiry-summary">
            <h3>✓ Enquiry Submitted Successfully</h3>
            <p>Thank you, <strong>${data.fullName}</strong>! We have received your enquiry.</p>
            
            <div class="summary-details">
                <h4>Enquiry Summary:</h4>
                <ul>
                    <li><strong>Enquiry Type:</strong> ${formatEnquiryType(data.enquiryType)}</li>
                    <li><strong>Contact Method:</strong> ${formatContactMethod(data.preferredContact)}</li>
                    <li><strong>Urgency:</strong> ${formatUrgency(data.urgency || "low")}</li>
                    <li><strong>Estimated Cost:</strong> ${estimatedCost}</li>
                </ul>
            </div>

            <div class="next-steps">
                <h4>Next Steps:</h4>
                <ol>
                    <li>Our team will review your enquiry</li>
                    <li>We'll contact you via ${data.preferredContact === "email" ? "email" : data.preferredContact === "phone" ? "phone" : "your preferred method"}</li>
                    <li>We'll provide detailed pricing and availability</li>
                    <li>You can schedule a consultation if needed</li>
                </ol>
            </div>

            <p class="response-time">
                <strong>Expected Response Time:</strong> 
                ${getResponseTime(data.urgency || "low")}
            </p>

            <p class="emergency-note">
                ${data.urgency === "urgent" ? '<strong style="color: #dd0303;">For immediate emergencies, please call us directly at +27 21 123 4567</strong>' : ""}
            </p>
        </div>
    `;

	showFormResponse(responseHTML, "success");

	// Reset button
	button.disabled = false;
	button.textContent = originalText;

	// Scroll to response
	document
		.getElementById("formResponse")
		.scrollIntoView({ behavior: "smooth", block: "center" });
}

/**
 * Handle contact form submission
 */
function handleContactSubmit(event) {
	event.preventDefault();

	// Validate form
	if (!validateForm("contactForm")) {
		showFormResponse(
			"Please correct the errors in the form.",
			"error"
		);
		return false;
	}

	// Show loading state
	const submitButton = event.target.querySelector('button[type="submit"]');
	const originalText = submitButton.textContent;
	submitButton.disabled = true;
	submitButton.innerHTML =
		'<span class="spinner"></span> Sending...';

	// Collect form data
	const formData = new FormData(event.target);
	const contactData = Object.fromEntries(formData.entries());

	// Simulate processing
	setTimeout(() => {
		// Generate mailto link
		const mailtoLink = generateMailtoLink(contactData);
		window.location.href = mailtoLink;

		showFormResponse(
			"Your email client should open shortly. If not, please send an email to info@grimreaperandco.co.za",
			"success"
		);

		// Reset button
		submitButton.disabled = false;
		submitButton.textContent = originalText;
	}, 1000);

	return false;
}

/**
 * Generate mailto link for contact form
 */
function generateMailtoLink(data) {
	const to = "info@grimreaperandco.co.za";
	const subject = encodeURIComponent(
		`${data.messageType || "General"} Message from ${data.fullName}`
	);

	const body = encodeURIComponent(`
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Message Type: ${data.messageType || "General"}

Message:
${data.message}

---
Sent via Grim Reaper & Co Contact Form
    `);

	return `mailto:${to}?subject=${subject}&body=${body}`;
}

/**
 * Show form response message
 */
function showFormResponse(message, type) {
	const responseDiv = document.getElementById("formResponse");
	if (responseDiv) {
		responseDiv.innerHTML = message;
		responseDiv.className = `form-response ${type}`;
		responseDiv.style.display = "block";
	}
}

/**
 * Reset form and clear messages
 */
function resetForm() {
	const responseDiv = document.getElementById("formResponse");
	if (responseDiv) {
		responseDiv.style.display = "none";
		responseDiv.innerHTML = "";
	}

	// Clear all error messages
	const errorMessages = document.querySelectorAll(".error-message");
	errorMessages.forEach((msg) => (msg.textContent = ""));

	// Remove error classes
	const errorFields = document.querySelectorAll(".error");
	errorFields.forEach((field) => field.classList.remove("error"));

	// Reset character count
	const charCount = document.getElementById("charCount");
	if (charCount) {
		charCount.textContent = "0";
		charCount.style.color = "#333";
	}
}

/**
 * Helper functions for formatting display text
 */
function formatEnquiryType(type) {
	return type
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

function formatContactMethod(method) {
	const methods = {
		email: "Email",
		phone: "Phone Call",
		either: "Email or Phone",
	};
	return methods[method] || method;
}

function formatUrgency(urgency) {
	const urgencies = {
		low: "Low (General Enquiry)",
		medium: "Medium (Within a week)",
		high: "High (Within 48 hours)",
		urgent: "Urgent (Within 24 hours)",
	};
	return urgencies[urgency] || urgency;
}

function getResponseTime(urgency) {
	const times = {
		low: "Within 3-5 business days",
		medium: "Within 1-2 business days",
		high: "Within 24-48 hours",
		urgent: "Within 2-4 hours",
	};
	return times[urgency] || "Within 3-5 business days";
}

