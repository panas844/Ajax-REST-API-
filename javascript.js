$(document).ready(function () {


    $("#newJoke").click(function (e) { 
        e.preventDefault();
        $.getJSON("http://api.icndb.com/jokes/random", function (data) {
                console.log(data.value.joke)
                $("#jokesList").html(data.value.joke);
             
           
            }
        );
    });
                
            
    
});