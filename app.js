/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

$(document).ready(function(){

    
    
    var card = $(".cards");
    
    
    for  (var i = 0; i <  data.length; i ++) {
        
        var new_el = document.createElement("li");
        new_el.setAttribute("id",i+1);
        new_el.setAttribute("class","done");
        new_el.innerHTML = "<h3>"+data[i]+"</h3>";
        card.append(new_el);
        
    
    }//caricamento carte.
    
    
    $(".opt-start").on("click",function(event){
        for  (var i = 0; i <= data.length; i ++) {
    
            document.getElementById(i+1).setAttribute("class","hidden");
        }
    })
    
    var i = 1 ;
        
    $(".cards").on("click","li",function(event){
        
        
        if((i < 10) && (String(i) == event.currentTarget.textContent)){
            i = i + 1;
            event.currentTarget.setAttribute("class","done");
        
        }
        else if(i == 10 ){
            event.currentTarget.setAttribute("class","done");
            alert("Hai vinto!!!, per giocare ancora refresha la pagina");
            i = 1;
        }
        else
        {
            i = 1;
            alert("oh no u lost!");
        }
            
    });
        
            
    

});

      





