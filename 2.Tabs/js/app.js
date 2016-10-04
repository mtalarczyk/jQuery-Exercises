$(function(){ //Wywoływanie DOM'u
    
    $('div:first-child').addClass('tabs');
    
    console.log('Działa');
    
    var li = $('ul').find('li');
    console.log(li);
    
    var div = $('div:first-child').children('div');
    console.log(div);
        
    li.on('click', function(){
        console.log('KLIK');
        
        var index = $(this).index();
        div.eq(index).slideDown();
        div.eq(index).siblings('div').hide();
        
    });
    
    
});