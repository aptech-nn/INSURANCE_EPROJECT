$(document).ready(function(){
    $("#contactForm").on('submit', function(event){
        event.preventDefault();
        let isValid = true;

        // Validate Name
        if($("#name").val().trim() === ''){
            $('#name').addClass('is-invalid');
            isValid = false;
        } else {
            $('#name').removeClass('is-invalid');
        }

        // Validate Email
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailPattern.test($('#email').val().trim())) {
            $('#email').addClass('is-invalid');
            isValid = false;
        } else {
            $('#email').removeClass('is-invalid');
        }

        // Validate Message (Fixed ID)
        if ($('#comment').val().trim() === '') {
            $('#comment').addClass('is-invalid');
            isValid = false;
        } else {
            $('#comment').removeClass('is-invalid');
        }

        // Submit if valid
        if (isValid) {
            this.submit();
        }
    });
});