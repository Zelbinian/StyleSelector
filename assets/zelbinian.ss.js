/**
 * Generates the information necessary for the website to decide what outfit to suggest
 */
function randomStyle() {

    // the basis for deciding on an outfit
    return Math.floor(Math.random() % 20) + 1;

}