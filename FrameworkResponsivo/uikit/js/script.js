document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.form-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        UIkit.modal('#modal1').show();
        form.reset();
    });
});