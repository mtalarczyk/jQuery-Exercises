$(function(){
    
    console.log('Działa!');
    
    //Zdefiniowanie zmiennych
    var form = $('form');
    var name = $('#nameInput');
    var email = $('#emailInput');
    var message =$('#messageInput');
  
    var error = $('.error');
    
    
    //Wersja 1
    
    form.on('submit', function(event){
        
        //Pobranie wartości pól z formularza
        var nameVal = name.val()
        var emailVal = email.val();
        var messageVal = message.val();
        error.text(""); //Wyczyszczenie div'a odpowiedzialnego za wyświeltanie błędów

        //Sprawdzenie kolejnych warunków podanych zadaniu
        if(nameVal.length <= 5){
            error.text("Podaj poprawne imie!"); //wypisanie błędów w divie o klasie error
            event.preventDefault(); //zastopowanie domyślnej akcji formularza, czyli wysyłania na serwer    
        }
        
        //poniżej zastosowana metoda indexOf() odpowiedzialna za wyszukiwanie pozycji litery podanej jako argument, jeśli szukanej litery nie ma w przeszukiwanym stringu to wyrzuci wartość -1
        
        if((emailVal.indexOf('@') == -1) || (emailVal.indexOf('.') == -1)){
            error.text(error.text()+"Podaj prawdziwy e-mail! ");
            event.preventDefault(); 
        }
        
        if(messageVal <= 10){
            error.text(error.text()+"Wpisz wiadomość!");
            event.preventDefault(); 
        }
            
    });
    
    
    
    //Wersja 2 - metoda zabezpieczająca przed wysłaniem na serwer po wciśnięciu ENTER, dlatego po wciśnięciu submit jest blokowana od razu domyślna akcja formularza, potem są sprawdzane warunki, a dopiero na końcu formularz jest wysyłany.
    
//    form.on('submit', function(event){
//        event.preventDefault(); //zastopowanie domyślnej akcji formularza, czyli wysyłania na serwer   
//        
//        //Pobranie wartości pól z formularza
//        var nameVal = name.val()
//        var emailVal = email.val();
//        var messageVal = message.val();
//        error.text(""); //Wyczyszczenie div'a odpowiedzialnego za wyświeltanie błędów
//
//        //Sprawdzenie kolejnych warunków podanych zadaniu
//        if(nameVal.length <= 5){
//            error.text("Podaj poprawne imie!"); //wypisanie błędów w divie o klasie error
//        }
//        
//        //poniżej zastosowana metoda indexOf() odpowiedzialna za wyszukiwanie pozycji litery podanej jako argument, jeśli szukanej litery nie ma w przeszukiwanym stringu to wyrzuci wartość -1
//        
//        if((emailVal.indexOf('@') == -1) || (emailVal.indexOf('.') == -1)){
//            error.text(error.text()+"Podaj prawdziwy e-mail! ");
//        }
//        
//        if(messageVal <= 10){
//            error.text(error.text()+"Wpisz wiadomość!");
//        }
//        
//        if(error.text() == ''){     //sprawdzenie czy nie ma żadnych błędów
//            form[0].submit();       //odwołujemy się do naszej zmiennej form, która wyszukuje w drzewie DOM wszystkie formularze, czyli tak naprawdę odwołujemy się do tablicy formularzy stąd zapis form[0], ponieważ jest to jedyny i pierwszy element tablicy  
//        }
//            
//    });
 
});