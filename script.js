

// for every hour from 9 to 5, create a time block row
    // while/for loop that loops starting at 9 and ends at 5
        // for each loop generate or build html time block
            // append time-block to container
                // hour
                    // a number corresponding with the 12 hour format
                // textarea
                    // show existing event text, if any and allow user to input event text
                // save button
                    // when clicked, store/reset all current hourly event text corresponding with the hour to localStorage
            // increase hour by one
            // check if hour is past, current or future and apply corresponding css class to time-block
            

            var input = document.querySelector('#todo-input');
            var output = document.querySelector('#todo-output');
            
            function saveTodos(arr) {
              localStorage.setItem('todos', JSON.stringify(arr));
            }
            
            function getTodos() {
              return JSON.parse(localStorage.getItem('todos')) || [];
            }