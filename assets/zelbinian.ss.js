/** FUNCTIONS **/

/**
 * Generates the information necessary for the website to decide what outfit to suggest
 */
function randomStyle() {
    
    // this will return the randomly created choice; eventually will be a JSON object
    // but for now is just a string variable
    var choice = "";
    
    // the basis for deciding on an outfit, which is based on me originally rolling a d20
    if (randomNumber(1, 20) < 9) {
        // if it's less than 9, it's a casual day, dressy otherwise
        choice = "Casual";
    } else {
        choice = "Dressy";
    }
    
    return choice;
}

/**
 * Helper function to return a random number; helps make the code a little cleaner
 * Logic help came from: http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
 *
 * @param (integer) min - the smallest number you wish the function to return (so this is inclusive)
 * @param (integer) max - the largest number you wish the function to return (so this is inclusive)
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

/** SCRIPTS **/

/**
 * When the document is ready, write the result of the randomStyle function to the h1
 * tag with the "target" id.
 */
$(document).ready(function () {
    $("#target").html(randomStyle);
});