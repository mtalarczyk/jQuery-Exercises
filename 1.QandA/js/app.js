$(function(){ //Wywoływanie DOM'u

    //Wersja 1
//    console.log('Działa');
//    $('div').addClass('QA');
//    
//    var h1 = $('div').find('h1');
//    var p = $('div').find('p');
//    
//    console.log(h1);
//    console.log(p);
//    
//    h1.on('click', function(){
//        $(this).next().slideToggle();
//        $(this).next().siblings('p').slideUp();
//        console.log('KLIK');
//    });
    
    //Wersja 2
    var allP=$('p');
    var allH1=$('h1');
    allP.hide();
    
    allH1.on('click', function(){
        allP.not($(this).next()).hide(); // funkcja not działa na zasadzie że bierze wszystkie elementy z allP (czyli wszystkie 'p'), za wyjątkiem tej wskazanej w nawiasie, czyli aktualnego 'p'
        $(this).next().toggle();
    });
    
    
});