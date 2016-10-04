$(function(){
    
    console.log('Działa');

    var nav = $('nav');
    var ul = nav.find('.menu');
    var top = nav.position().top; //pobiera wartość położenia elementu nav od góry dokumentu
    
    console.log(top);
    
    $(window).on('scroll', function(){
        var distanceTop = $(document).scrollTop(); //sprawdza wartość położenia dokumentu od góry okna
        console.log(distanceTop);
        
        (distanceTop > top) ? ul.addClass('sticky') : ul.removeClass('sticky'); //sprawdzenie czy wartość pozycji położenia okna jest większa od wartości położenia nav
    });
    
    $(window).on('resize', function(){
        var distanceTop = $(document).scrollTop(); //sprawdza wartość położenia dokumentu od góry okna
        
        top = nav.position().top; //pobiera ponownie wartość położenia elementu nav od góry dokumentu (ponieważ ta wartość każdorazowo się zmienia wraz ze zmianą szerokości okna)
        console.log("Pozycja top: " + top);
        
        (distanceTop > top) ? ul.addClass('sticky') : ul.removeClass('sticky');
    });
    
});