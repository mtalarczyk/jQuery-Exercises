$(function(){
    
    console.log('Działa!');
   
    var scene = $('div.scene');
    var elements = $('div.element');
    
    var oldMousePositionX = 0;
    var oldMousePositionY = 0;
    
    console.log(scene);
    console.log(elements);
    
    function parallax(){
        
        elements.each(function(){
            $(this).css('z-index', $(this).data('z')).css('left', $(this).data('x')).css('top', $(this).data('y'));            
        });
        
        scene.on('mouseenter', function(event){
            //ustawienie wartości pozycji myszki po najechaniu na div o klasie scene, czyli jak gdyby ustawienie punktu odniesienia
            oldMousePositionX = event.offsetX;
            oldMousePositionY = event.offsetY;
        });
        
        scene.on('mousemove', function(event){
            
            //bieżąca pozycja kursora myszki względem rodzica
            var currentMousePositionX = event.offsetX;
            var currentMousePositionY = event.offsetY;
            
            //zwiększenie pozycji po najechaniu na element o klasie 'element', o odległość elementu od okna gdyż inaczej to liczy pozycję względem tego div'a o klasie 'element'
            if($(event.target).hasClass('element')){
                    currentMousePositionX += $(event.target).position().left;
                    currentMousePositionY += $(event.target).position().top;
            }
            
            //wyliczenie różnicy między aktualną pozycją kursora myszki, a pozycją w momencie najechania na div o klasie scene
            var mouseMoveX = currentMousePositionX - oldMousePositionX;     
            var mouseMoveY = currentMousePositionY - oldMousePositionY;
            
            elements.each(function(){
                $(this).css('left', '+=' + mouseMoveX * $(this).data('speed'));     //przesunięcie danego kwadratu o daną odległość od kursora myszki w osi X (w zależności od wartości data-speed)
                $(this).css('top', '+=' + mouseMoveY * $(this).data('speed'));      //przesunięcie danego kwadratu o daną odległość od kursora myszki w osi Y
            });
            
            //ponowne ustawienie punktu odeniesienia
            oldMousePositionX = currentMousePositionX;
            oldMousePositionY = currentMousePositionY;
        
        });
    }
    
    parallax();
});