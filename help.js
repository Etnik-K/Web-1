
    function callHelp() {
        window.location.href = 'tel:+38345225394';
    }

    $(document).ready(function() {
        $('#help-button').click(function() {
            callHelp();
        });
    });
