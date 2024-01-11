
    function callHelp() {
        window.location.href = 'tel:+1234567890';
    }

    $(document).ready(function() {
        $('#help-button').click(function() {
            callHelp();
        });
    });