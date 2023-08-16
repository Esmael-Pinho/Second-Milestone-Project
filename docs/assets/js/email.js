/*jshint esversion: 6 */

// form
const originalFormContent = $('#contact-container').html();
showForm();


function sendEmail(contactForm) {
$('#contact-btn').val('Sending...'); // extra feedback for the user
emailjs.send("gmail", "pinho", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.email.value,
    "message": contactForm.message.value
})
.then(
    function(response) {
        console.log("SUCCESS", response);
        $('#contact-btn').val('Msg Sent');
        showThankYou();
    },
    function(error) {
        console.log("FAILED", error);
    }
);
return false;
}

// message to display after Feedback/Message sent
function showThankYou() {
    let thankyouMessage = `
        <h2>YOUR MESSAGE HAS BEEN SENT</h2>
        <br>
        <p>Thank you for the Feedback | Message<br>I appreciate your contribution and will be in touch if necessary.<br>Have a good day! 🤗</p>`;
    $('#contact-container').html(thankyouMessage);
}

// Function to show form again after close-btn clicked
function showForm() {
    $('.close-btn').click(function() {
        $('#contact-container').html(originalFormContent);
    });
}
