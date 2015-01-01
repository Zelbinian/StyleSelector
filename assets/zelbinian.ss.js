/** FUNCTIONS **/

/**
 * Generates the information necessary for the website to decide what outfit to suggest
 */
function randomStyle() {
    
    // this will return the randomly created choice; eventually will be a JSON object
    // but for now is just a string variable
    var choice = "";
    
    // the basis for deciding on an outfit, which is based on me originally rolling a d20
    if ((Math.floor(Math.random() * 20) + 1) < 9) {
        // if it's less than 9, it's a casual day, dressy otherwise
        choice = "Casual";
    } else {
        choice = "Dressy";
    }
    
    return choice;
}

/** SCRIPTS **/

/**
 * When the document is ready, write the result of the randomStyle function to the h1
 * tag with the "target" id.
 */
$(document).ready(function () {
    $("#target").html(randomStyle);
});