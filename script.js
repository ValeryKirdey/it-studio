(document).ready(function() {
    ('footer .container .info h3').click(function(event) {
        (this).toggleClass('active').next().slideToggle(300);
    });
});