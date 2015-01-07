/** DATA OBJECTS **/
var everydayKnots = ["Four-in-Hand", "Half Windsor"];
var fancyKnots = ["Onassis", "Eldredge", "Trinity", "Novotny", "Caldwell Swag", "Viper", "Deivao Twist", "Arrow", "Cape"];
var extraFancyKnots = ["Double Eldredge", "Harlequin", "FinFrock", "Pekada", "Tulip"];

/** FUNCTIONS **/

/**
 * Helper function to return a random number; helps make the code a little cleaner
 * Logic help came from: http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
 *
 * @param (integer) min - the smallest number you wish the function to return (so this is inclusive)
 * @param (integer) max - the largest number you wish the function to return (so this is inclusive)
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
    var choice = "";
    
    // the basis for deciding on an outfit, which is based on me originally rolling a d20
    if (randomNumber(1, 20) < 9) {
        // if it's less than 9, it's a casual day, dressy otherwise
        choice = "Casual";
    } else {
        choice += "Dress shirt";
        
        // now we see about other acoutrements
        if (randomNumber(1, 10) > 8) {
            choice += ", neat collars";
        } else {
            choice += ", sloppy collars";
        }
        if (randomNumber(1, 10) > 3) {
            choice += ", tie";
            
            if (randomNumber(1, 10) <= 8) {

            }
        }
        if (randomNumber(1, 10) > 4) {
            choice += ", vest";
        }
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