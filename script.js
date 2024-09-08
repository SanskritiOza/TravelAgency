// Trip Cost Calculator with Validations
function calculateCost() {
    const destination = document.getElementById('destination').value;
    const days = parseInt(document.getElementById('days').value);
    const people = parseInt(document.getElementById('people').value);

    // Validation checks
    if (!destination) {
        alert('Please select a destination.');
        return;
    }
    if (isNaN(days) || days <= 0) {
        alert('Please enter a valid number of days.');
        return;
    }
    if (isNaN(people) || people <= 0) {
        alert('Please enter a valid number of people.');
        return;
    }

    let costPerDay = 0;
    
    switch (destination) {
        case 'Victoria':
            costPerDay = 150;
            break;
        case 'New South Wales':
            costPerDay = 500;
            break;
        case 'Queensland':
            costPerDay = 300;
            break;
        case 'South Australia':
            costPerDay = 200;
            break;
        case 'Western Australia':
            costPerDay = 250;
            break;
        case 'Northern Territory':
            costPerDay = 250;
            break;
        case 'Tasmania':
            costPerDay = 100;
            break;
        default:
            alert('Invalid destination selected.');
            return;
    }

    const totalCost = costPerDay * days * people;
    document.getElementById('result').textContent = `Total Cost: $${totalCost}`;
}

// Contact Form Submission with Validations
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation checks
    if (!name) {
        alert('Please enter your name.');
        return;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!message) {
        alert('Please enter your message.');
        return;
    }

    // Simulate email sending
    alert(`Thank you, ${name}! Your message has been sent.`);
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function toggleParagraph(card) {
    const description = card.querySelector('.service-desc');
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';  // Show the description
    } else {
        description.style.display = 'none';  // Hide the description
    }
}


