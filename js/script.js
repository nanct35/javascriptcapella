// Get the form element
const form = document.querySelector('form');

// const formArray = document.getElementsByTagName('form')
// const form = formArray[0]

// Get the input field values
const recipientNameInput = document.getElementById('recipientNameEl');
const organizationNameInput = document.getElementById('organizationNameEl');
const eventDateInput = document.getElementById('eventDateEl');
const websiteURLInput = document.getElementById('websiteURLEl');
const hostNameInput = document.getElementById('hostNameEl');


// varialbes for display

const recipientNameDisplay = document.getElementById('recipientName');
const organizationNameDisplay = document.getElementById('organizationName');
const eventDateDisplay = document.getElementById('eventDate');
const websiteURLDisplay = document.getElementById('websiteURL');
const hostNameDisplay = document.getElementById('hostName');

const displayDiv = document.getElementById('display');

// Add an event listener for form submission
form.addEventListener('submit', function (event) {
	event.preventDefault(); // Prevent form submission

	const recipientName = recipientNameInput.value;
	const organizationName = organizationNameInput.value;
	const eventDate = eventDateInput.value;
	const websiteURL = websiteURLInput.value;
	const hostName = hostNameInput.value;

	// Manipulate the DOM to display the data
	// displayDiv.innerHTML = `Name: ${recipientName}<br>Organization: ${organizationName}`;

	recipientNameDisplay.innerHTML = recipientName;
	organizationNameDisplay.innerHTML = organizationName;
	eventDateDisplay.innerHTML = eventDate;
	websiteURLDisplay.innerHTML = websiteURL;
	hostNameDisplay.innerHTML = hostName;

	// Clear the input fields
	recipientNameInput.value = '';
	organizationNameInput.value = '';
	eventDateInput.value = '';
	websiteURLInput.value = '';
	hostNameInput.value = '';
});

