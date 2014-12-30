/** FUNCTIONS **/

/**
 * Generates the information necessary for the website to decide what outfit to suggest
 */
function randomStyle() {

    // the basis for deciding on an outfit
    return (Math.floor(Math.random() * 20) + 1);

}

/** SCRIPTS **/

/**
 * When the document is ready, write the result of the randomStyle function to the h1
 * tag with the "target" id.
 */
$(document).ready(function () {
    $("#target").html(randomStyle);
});