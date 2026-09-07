document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');

    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });

    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var botao = document.querySelector('#meuBotao');
    
    botao.addEventListener('click', function() {
        var instance = M.Carousel.getInstance(elems[0]);
        instance.next(); 
    });
});