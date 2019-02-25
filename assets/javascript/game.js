//Create array for words that will be guessed
var guessMe = [
    {
        name: "TARDIS",
        url: "assets/images/tardis.jpg"
    },
    {
        name: "ROSE",
        url: "assets/images/rose.jpg"
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


    //Create an key up event to display hint image and word
    $(document).on("click", function () {


        //Display new image
        var hintImage = document.getElementsByClassName("hint-image")[0];
        hintImage.setAttribute('src', guessMe[0].url);

        //display underscores matching word length
        //returns character length of name of object
        var guessMeLength = guessMe[0].name.length;
        console.log(guessMeLength);

        for (i = 0; i < guessMeLength; i++) {
            var underscore = $("<div>" + "_" + "</div>");
            underscore.addClass("set-underscore");
            underscore.attr("data-letter", guessMe[0].name.charAt(i));
            $(".word-to-guess").append(underscore);
        }

        //Create on key up event to display user guess 
            $(document).on("keyup",function (){
                //gets the key that is pressed
                $(document).keydown(function(event) {
                    var keyPressed = (String.fromCharCode(event.which));
                
                //if statement logic  
                    //if keypressed is equal to letter in word replace with letter
                    if (keyPressed === $('.set-underscore').attr("data-letter")){
                    
                    }

                var userGuess = $("<div class='letters-guessed'>" + keyPressed + "</div>" );   
                $(".wrong-guesses").append(userGuess);
                console.log(userGuess)
                });
            })

        //display letter if it matches word

        //display letter if it doesn't match word

        //display piece of dalek if it doesn't match

        //Win or loss actions

        //If user losses play Exterminate sound

        //If user wins play allons y

        //If user wins display next word and picture


    })




})



