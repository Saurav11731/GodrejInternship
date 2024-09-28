$(document).ready(function(){
    // Smooth scroll for navigation links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});
$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        
        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
            event.preventDefault();
        } else {
            alert('Form submitted successfully!');
        }
    });
});
