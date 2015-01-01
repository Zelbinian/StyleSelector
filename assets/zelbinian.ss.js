/** FUNCTIONS **/

/**
 * Generates the information necessary for the website to decide what outfit to suggest
 */
function randomStyle() {
    
    // the basis for deciding on an outfit, which is based on me originally rolling a d20
    var choice = Math.floor(Math.random() * 20) + 1;
    
    return (choice);

}

/** SCRIPTS **/

/**
 * When the document is ready, write the result of the randomStyle function to the h1
 * tag with the "target" id.
 */
$(document).ready(function () {
    $("#target").html(randomStyle);
});