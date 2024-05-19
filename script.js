document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var number = document.getElementById('number').value;
    // Compose email content
    var subject = 'Session Booking Confirmation';
    var body = `Dear ${name},\n\nYour session on ${date} has been booked successfully.`;

    // Send email using Gmail SMTP
    window.location.href = `mailto:hirdu812@gmail.com ?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Show confirmation message
    document.getElementById('confirmation').innerText = 'Booking confirmed. Check your email for confirmation.';
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;

    // EmailJS configuration
    emailjs.init("YOUR_EMAILJS_USER_ID");

    // Compose email content
    var templateParams = {
        from_name: 'Your Name',
        to_name: name,
        email: email,
        date: date
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('Email sent:', response);
            document.getElementById('confirmation').innerText = 'Booking confirmed. Check your email for confirmation.';
        }, function(error) {
            console.error('Error sending email:', error);
            document.getElementById('confirmation').innerText = 'Error sending email. Please try again later.';
        });
});
