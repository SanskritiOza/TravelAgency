// Trip Cost Calculator
function calculateCost() {
    const destination = document.getElementById('destination').value;
    const days = parseInt(document.getElementById('days').value);
    const people = parseInt(document.getElementById('people').value);

    let costPerDay = 0;

    switch (destination) {
        case 'Victoria':
            costPerDay = 150
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
    }

    const totalCost = costPerDay * days * people;
    document.getElementById('result').textContent = `Total Cost: $${totalCost}`;
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate email sending
    alert(`Thank you, ${name}! Your message has been sent.`);
});

