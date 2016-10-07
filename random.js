function ran_col() { //function name
                var color = '#'; // hexadecimal starting symbol
                var letters = ['7550FB','ff0000','66ff66','669900','9999ff','3366ff','990099','C0C0C0']; //Set your colors here
                color += letters[Math.floor(Math.random() * letters.length)];
                document.getElementById('ENTER ELEMENT NAME').style.background = color; // Setting the random color on your div element.
            }
