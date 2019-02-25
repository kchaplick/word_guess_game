//Create array for words that will be guessed
var guessMe = [
    {
        name: "TARDIS",
        url: "assets/images/tardis.jpg"
    },
    {
        name: "ROSE",
        url: "assets/images/rose.jpeg"
    },
    {
        name: "ANGEL",
        url: "assets/images/angel.jpg"
    },
    {
        name: "BAD WOLF",
        url: "assets/images/badwolf.jpg"
    },
    {
        name: "PONDS",
        url: "assets/images/ponds.jpg"
    },
    {
        name: "SWEETIE",
        url: "assets/images/sweetie.jpg"
    }
];


$(document).ready(function () {

    var playGame = 0;
    var badGuesses = [];
    var wins = 0;
    var guesses = 10;

    //Create an key up event to display hint image and word
    $(document).keyup(function (e) {
        if (e.keyCode == 13) {

         function gameSetup(){
            $(".replacement").remove()
            $(".set-underscore").remove()
            $(".wrong-letters").remove()
         $("#wins").html(wins);    
        //Display new image
        var hintImage = document.getElementsByClassName("hint-image")[0];
        hintImage.setAttribute('src', guessMe[playGame].url);

        //display underscores matching word length
        //returns character length of name of object
        var guessMeLength = guessMe[playGame].name.length;
        

        for (i = 0; i < guessMeLength; i++) {
            var underscore = $("<div>" + "_" + "</div>");
            underscore.addClass("set-underscore");
            underscore.attr("data-letter", guessMe[playGame].name.charAt(i));
            $(".word-to-guess").append(underscore);
        }
        badGuesses = [0];
        guesses = 10;
        $("#guesses").html(guesses);
        
        //Create on key up event to display user guess 
        
        }   
        gameSetup()
                
                //gets the key that is pressed
                $(document).keydown(function(event) {
                    var keyPressed = (String.fromCharCode(event.which));
                    var isHit = false;
                    
                //if statement logic  
                    //if keypressed is equal to letter in word replace with letter
                    $(".set-underscore").each(function(){
                        if($(this).data("letter") == keyPressed){
                            isHit = true;
                            $(this).replaceWith("<div class='replacement'>" + keyPressed + "</div>");
                        }
                     
                      })
                     //if key pressed is not equal to letter in word
                      if (isHit !== true && ($.inArray(keyPressed,badGuesses)==-1)){
                          var userGuess = $("<div class='wrong-letters'>" + keyPressed + "</div>");
                          $(".wrong-guesses").append(userGuess);
                          badGuesses.push(keyPressed);
                          guesses--;
                          $("#guesses").html(guesses);
                          if(guesses == 0){
                              alert("You Lose");
                              playGame = 0;
                              gameSetup()
                          }
                          console.log(badGuesses);
                      }
                      //Win or loss actions
                        if ($(".set-underscore").length == 0){
                            wins++;
                            
                            
                            playGame++;
                            gameSetup();
                        }
                });       
           

        

        //If user losses play Exterminate sound

        //If user wins play allons y

        //If user wins display next word and picture


    }




});

});



