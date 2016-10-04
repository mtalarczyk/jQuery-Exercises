$(function(){
   //Wersja 1 
//    var next = $('#nextPicture');
//    var prev = $('#prevPicture');
//    var li = $('li');
//    
//    var index = 0;
//    var width = li.first('img').width();
//
//    console.log(width);
//    li.css("float", "left");
//    
//    $('ul').css('width', width * li.length-1;
//    $('ul').parent().css('width', width);
//    
//    next.on('click', function(){
//        if(index < li.length-1){
//         index++;
//         
//            $('ul').animate({
//                left: '-='+width
//            }, 1000);       
//        }; 
//    });
//    
//    prev.on('click', function(){
//        if(index > 0){
//         index--;
//         
//            $('ul').animate({
//                left: '+='+width
//            }, 1000);       
//        };
//    });
    
    
    //Wersja 2 (podpunkt 7 - jedna funkcja dla wszystkich buttonów)
    var li = $('li');
    var ul = $('ul');
    
    var btn = $('button');
    var index = 0;      //wartość początkowa index'u
    
    var width = li.first('img').width();    //pobranie szerokości obrazka

    console.log(width);
    li.css("float", "left");        //usunięcie wolnych przestrzeni pomiędzy elementami li
    
    ul.css('width', width * li.length );    //ustawienie szerokości całego elementu ul(całej listy), czyli szerokość jednego obrazka przemnożona przez liczbę elementów (wówczas obrazki ustawią się w jednej linii)
    ul.parent().css('width', width);        //ustawienie elementu nadrzędnego na szerokość jednego obrazka (trzeba pamiętać tylko aby w css dodać overflown: hide), spowoduje to że będziemy widzieć tylko jeden obrazek
    
    
    btn.on('click', function(){
        if($(this).attr('id') == 'nextPicture'){
            
            if(index < li.length-1){
             index++;

                ul.animate({
                    left: '-=' + width  //przesunięcie elementu o szerokość obrazka (inaczej: zmniejszenie odległości od lewej strony o width), działamy na left dlatego przy zwiększaniu też musi być left
                }, 1000);       
            }; 
            
        } else if($(this).attr('id') == 'prevPicture') {
            
            if(index > 0){
             index--;

                ul.animate({
                    left: '+=' + width
                }, 1000);       
            };
        }
    });
    
});