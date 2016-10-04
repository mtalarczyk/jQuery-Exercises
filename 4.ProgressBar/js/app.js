$(function(){
    //poprawić używając data-id od 1
    
    
    var btn = $('button');
    var div = $('div');
    

    function barAnimation(){
        var dataId = $(this).attr('data-id');
        var dataWidth = $(this).attr('data-width');   
        var dataColor = $(this).attr('data-color');
        var span = div.find('span').eq(dataId); //wyszukanie spanu którego chcemy zmieniać
        
        span.removeClass().addClass(dataColor); // usunięcie wszystkich poprzednich klas i dodanie nowej
        span.animate({
            width: dataWidth
        }, 2000);
    }
    
    btn.on('click', barAnimation);

});