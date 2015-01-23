/** DATA OBJECTS **/
var everydayKnots = ["Four-in-Hand", "Half Windsor"],
    fancyKnots = ["Onassis", "Eldredge", "Trinity", "Caldwell Swag", "Viper", "Deivao Twist", "Arrow", "Cape", "Velvet", "Van Wijk", "Fishbone", "Glennie Braided"],
    extraFancyKnots = ["Double Eldredge", "Harlequin", "FinFrock", "Pekada", "Tulip", "Merovingian"],
    weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** FUNCTIONS **/

/**
 * Helper function to return a random number; helps make the code a little cleaner
 * Somehow works even if max and min are reversed
 * Logic help came from: http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
 *
 * @param (integer) min - the smallest number you wish the function to return (so this is inclusive)
 * @param (integer) max - the largest number you wish the function to return (so this is inclusive)
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Helper function that takes a list of knots (or anything really) and returns a randomly
 * chosen element of the list
 *
 * @param (array) list - list from which an element should be chosen
 */
function chooseKnot(list) {

    // protecting against a null or empty list being tossed in
    if (list === null || list.length === 0) {
        throw new Error("The list cannot be empty");
    }

    var randomIndex = randomNumber(0, list.length - 1);

    return list[randomIndex];
}

/**
 * Generates the information necessary for the website to decide what outfit to suggest
 * This is the decision tree the code is following (hopefully)

   +-------------------------------------+begin                                         
   |                                       +                                            
   v                                       v                                            
casual              +-------------------+dressy+-------------------+                    
                    |                                              |                    
                    v                                              v                    
        +----+messy collars+----------+------------+---------+clean collars+-+          
        |           +                 |            |               +         |          
        |           |                 |            |               |         |          
        |           |                 |            |               |         |          
        |           |                 |            |               |         |          
        |           |                 |            |               |         |          
        |           |                 |            |               |         |          
        |           |                 |            |               |         |          
        |           |                 |            |               |         |          
        v           v                 v            v               v         v          
      tie          tie &           no tie,       vest            tie &      tie         
      only +--+--+ vest            no vest       only          + vest+--+--+only+       
              |                                                |        |       |       
              |                                                |        |       |       
              |                                                |        |       |       
              v                                                v        v       v       
          everyday                                           fancy++  fancy     everyday
          knots only                                         knots    knots     knots   

 */
function randomStyle() {

    // this will return the randomly created choice; eventually will be a JSON object
    // but for now is just a string variable
    var choice = "",
        tie = false,
        vest = false,
        neatCollars = false;

    // the basis for deciding on an outfit, which is based on me originally rolling a d20
    if (randomNumber(1, 20) <= 7) {
        // if it's less than 9, it's a casual day, dressy otherwise
        choice = "Casual";
    } else { // 8 or above
        choice += "Dress shirt";

        // now we see about other acoutrements

        // crisp and traditional, or sloppy and fashion forward?
        if (randomNumber(1, 10) >= 8) {
            choice += ", neat collars";
            neatCollars = true;
        } else { // 7 or less
            choice += ", sloppy collars";
        }

        // how about a vest?
        if (randomNumber(1, 20) >= 8) {
            choice += ", vest";
            vest = true;
        }

        // wearing a tie today?
        if (randomNumber(1, 20) >= 6) {
            choice += ", tie";
            try {
                choice += " (";

                // k, handsome, but what kind of knot? how baller we gonna be?
                if (neatCollars) {

                    // clean and trim, huh? we also wearing a vest?
                    if (vest) {

                        // baller! we can be fancy or even super fancy!
                        if (randomNumber(1, 20) >= 8) {
                            choice += chooseKnot(fancyKnots);
                        } else { // 7 or less
                            choice += chooseKnot(extraFancyKnots);
                        }
                    } else {

                        // still cool, we can be still fancy sometimes
                        if (randomNumber(1, 10) >= 4) {
                            choice += chooseKnot(everydayKnots);
                        } else { // 3 or less
                            choice += chooseKnot(fancyKnots);
                        }
                    }

                } else {
                    // if we're doin' sloppy collars, don't get too crazy with it
                    choice += chooseKnot(everydayKnots);
                }
                choice += " knot)";

            } catch (e) {
                console.log(e.message);
            }
        }
    }

    return choice;
}

/**
 * This builds the panels on the page that display the style forcast
 * Each panel looks like this
 * <div class="col-sm-15">
 *     <div class="panel panel-default" id=""> // first one will be panel-primary, ids are variable
            <div class="panel-heading">
                <h3 class="panel-title"></h3> // innerHTML here is variable
            </div>
            <div class="panel-body"></div>
            <div class="panel-footer">
                <button class="btn btn-default btn-block">Click</button>
            </div>            
        </div>
    </div>
 */
function forecastStyles() {

    var panelsToBuild = 5, // yeah, this is hard-coded for now - deal with it B-)
        panelsBuilt = 0;

    while (panelsBuilt < panelsToBuild) {

        var dayOfWeek = new Date().getDay(), // we use this to update the titles
            panelType = "default"; // most will use default panel styling

        if (panelsBuilt === 0) { // first panel

            panelType = "primary";

            dayOfWeek = "Today";

        } else if (panelsBuilt === 1) { // second panel

            dayOfWeek = "Tomorrow";

        } else { // rest of the panels

            // the modulus lets the array work like a wrapping list without any extra code
            dayOfWeek = weekdays[(dayOfWeek + panelsBuilt) % 7];

        }

        var colDiv = $("<div></div>", {
                "class": "col-sm-15"
            }),
            
            panelDiv = $("<div></div>", {
                "class": "panel panel-" + panelType,
                id: "day" + (panelsBuilt + 1)
            }).appendTo(colDiv),

            panelHeadingDiv = $("<div></div>", {
                "class": "panel-heading"
            }).appendTo(panelDiv),

            panelTitleH3 = $("<h3></h3>", {
                text: dayOfWeek,
                "class": "panel-title"
            }).appendTo(panelHeadingDiv),

            panelBodyDiv = $("<div></div>", {
                "class": "panel-body",
                text: randomStyle()
            }).appendTo(panelDiv),
            
            panelFooterDiv = $("<div></div>", {
                type: "button",
                role: "button",
                "class": "panel-footer text-center",
                html: '<i class="fa fa-refresh"></i> Reroll Outfit',
                onclick: '$(".panel-body", $(this).closest("div.panel")).text(randomStyle())'
            }).appendTo(panelDiv);

            $(".row:first-child").append(colDiv);

        panelsBuilt++;
    }

}

/** SCRIPTS **/

/**
 * When the document is ready, write the result of the randomStyle function to the h1
 * tag with the "
                    target " id.
 */
$(document).ready(function () {
    forecastStyles();
});