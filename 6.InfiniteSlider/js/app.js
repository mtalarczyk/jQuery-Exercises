$(function(){
    
    var next = $('#nextPicture');
    var prev = $('#prevPicture');
    var li = $('li');
    var ul = $('ul');
    
    var index = 0;
    var width = li.first('img').width(); //pobranie wartości szerokości obrazka
    
    //sklonowanie elementów
    var cloneFirst = li.first().clone();
    var cloneLast = li.last().clone();
    
    //przypisanie sklonowanych elementów
    cloneFirst.appendTo(ul);    //na koniec listy
    cloneLast.prependTo(ul);    //na początek listy

    li = $('li');   //ponowne utworzenie kolekcji listy poszerzone o sklonowane elementy
    
    li.css("float", "left");    //usunięcie przerw między elementami 'li' poprzez dodanie do każdego elementu w css float:leftS
    ul.css('width', width * li.length );    //ustalenie szerokości całej listy w zależności od ilości obrazków
    ul.parent().css('width', width);    //przypisanie szerokości div'a przechowującego całą listę ul na szerokość jednego obrazka (width), należy pamiętać aby przypisać też w css własność overflow: hidden - spowoduje to że będziemy widzieć w danym momencie tylko jeden obrazek
    
    ul.css('left', -width); //ustawienie wartości początkowej, czyli chcemy widzieć pierwszy obrazek a nie klona, stąd przesunięcie całego elementu ul o 1 obrazek, czyli jedną szerokość obrazka
    
    
    
    next.on('click', function(){
        if(index < li.length-2){    // li.length-2 - zatrzymamy się w ten sposóba na ostatnim obrazku, taka numeracja bierze się stąd, że nasz index zaczyna się od zera, ale w tablicy z elementami jest to nr 1
            console.log('Wejsćie do IFa '+index);
            index++;               
            
            console.log('Po inkrementacji '+index);
            ul.animate({
                left: '-='+width
            }, 1000, function(){    //wywołanie funkcji complete, czyli po każdej zakończonej animacji wykonywana jest jeszcze jedna funkcja
                    console.log('Przed complete '+index); 
                   if (index == li.length-2){   // w tym przypadku funkcja complete zostanie wykonana, tylko jeśli dojdziemy do ostatniego obrazka, który jest klonem pierwszego (o indeksie 0). następuje wówczas natychmiastowe przesunięcie obrazka na pierwszy o indeksie 0 (czyli cofnięcie do pozycji wyjściowej). Odbywa się to bez zwłoki czasowej ponieważ obrazki są identyczne. Następuje wyzerowanie indeksu.
                       
                        index = 0;
                        ul.animate({
                            left: -width
                        }, 0); 
                       console.log('Po complete'+index);
                    }
            }); 
        }
        console.log("Po NextOn" + index);
    });
    
    
    
    prev.on('click', function(){
        if(index > -1){ // -1 - zatrzymamy się w ten sposób na klonie ostatniego obrazka umieszczonego przed obrazkiem o indeksie 0
            index--;
         
            ul.animate({
                left: '+='+width
            }, 1000, function(){
                
                   if (index == -1){ // w tym przypadku funkcja complete zostanie wykonana, tylko jeśli dojdziemy do klona ostatniego obrazka umieszczonego przed obrazkiem o indeksie 0. Następuje wówczas natychmiastowe przesunięcie obrazka na przedostatni (ponieważ ostatni jest klonem o indeksie 0, zatem przedostatni to oryginał sklonowanego obrazka na pozycji -1). Odbywa się to bez zwłoki czasowej ponieważ obrazki są identyczne. Następuje wyzerowanie indeksu. Stąd też przypisanie indeksu na przedostatnią pozycję (li.length-3), należy pamiętać że numeracja indexu zaczyna się od 0.
                       
                        console.log('Complete' + index);
                        index = (li.length-3);
                        console.log('Po complete' + index);
                        var value = width * (li.length-2);
                        ul.animate({
                            left: -value
                        }, 0); 
                    }
            }); 
        }
        
        console.log(index);
    });
    
    
   
});