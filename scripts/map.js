document.addEventListener("DOMContentLoaded", function () {
	initializeMap();
});

function initializeMap() {
	// Cape Town CBD coordinates (approximate location)
	const capeTownLat = -33.9249;
	const capeTownLng = 18.4241;

	// Initialize the map centered on Cape Town
	const map = L.map("map").setView([capeTownLat, capeTownLng], 13);

	// Add OpenStreetMap tiles
	L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		maxZoom: 19,
	}).addTo(map);

	// Custom icon for the marker (using rose icon theme)
	const customIcon = L.divIcon({
		className: "custom-marker",
		html: '<div class="marker-pin"></div>',
		iconSize: [30, 42],
		iconAnchor: [15, 42],
		popupAnchor: [0, -42],
	});

	// Add a marker for Grim Reaper & Co location
	const marker = L.marker([capeTownLat, capeTownLng], {
		icon: customIcon,
	}).addTo(map);

	// Add popup to the marker
	marker.bindPopup(`
        <div class="map-popup">
            <h3>Grim Reaper & Co</h3>
            <p><strong>Funeral Services</strong></p>
            <p>123 Main Road<br>Cape Town CBD<br>Cape Town, 8001</p>
            <p>📞 +27 (0)21 123 4567</p>
            <a href="https://maps.google.com/?q=-33.9249,18.4241" target="_blank" rel="noopener noreferrer">
                Open in Google Maps
            </a>
        </div>
    `);

	// Open popup by default
	marker.openPopup();

	// Add additional points of interest (optional - cemeteries, hospitals)
	const pointsOfInterest = [
		{
			name: "Maitland Cemetery",
			lat: -33.9513,
			lng: 18.4992,
			type: "cemetery",
		},
		{
			name: "Groote Schuur Hospital",
			lat: -33.9445,
			lng: 18.4627,
			type: "hospital",
		},
		{
			name: "Pinelands Cemetery",
			lat: -33.9415,
			lng: 18.4965,
			type: "cemetery",
		},
	];

	// Add smaller markers for points of interest
	pointsOfInterest.forEach((poi) => {
		const poiIcon = L.divIcon({
			className: `poi-marker poi-${poi.type}`,
			html: `<div class="poi-icon">${poi.type === "cemetery" ? "🪦" : "🏥"}</div>`,
			iconSize: [24, 24],
			iconAnchor: [12, 12],
		});

		L.marker([poi.lat, poi.lng], { icon: poiIcon })
			.addTo(map)
			.bindPopup(`<strong>${poi.name}</strong>`);
	});

	// Add a circle to show service area (10km radius)
	L.circle([capeTownLat, capeTownLng], {
		color: "#fa812f",
		fillColor: "#fab12f",
		fillOpacity: 0.1,
		radius: 10000, // 10km in meters
	}).addTo(map);
}

