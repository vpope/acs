/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {
/***************************************************************************
 *                                                                          *
 * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
 * etc. depending on your default view engine) your home page.              *
 *                                                                          *
 * (Alternatively, remove this and add an `index.html` file in your         *
 * `assets` directory)                                                      *
 *                                                                          *
 ***************************************************************************/

'/': {
view: 'homepage'
},
        '/graphic': {
        view: 'graphic'
        },
        '/illustration': {
        view: 'illustration'
        },
        '/ball-carousel' : {
        view: 'ball-carousel'
        },
        '/cutouts-carousel' : {
        view: 'cutouts-carousel'
        },
        '/grafic-carousel' : {
        view: 'grafic-carousel'
        },
        '/kitchen-carousel' : {
        view: 'kitchen-carousel'
        },
        '/alergy-carousel' : {
        view: 'alergy-carousel'
        },
        '/autocruise-carousel': {
        view: 'autocruise-carousel'
        },
        '/boutique-carousel': {
        view: 'boutique-carousel'
        },
        '/crazy-machine-carousel': {
        view: 'crazy-machine-carousel'
        },
        '/editorial-carousel': {
        view: 'editorial-carousel'
        },
        '/faces-carousel': {
        view: 'faces-carousel'
        },
        '/ice-cream-girls-carousel': {
        view: 'ice-cream-girls-carousel'
        },
        '/outsider-carousel': {
        view: 'outsider-carousel'
        },
        '/primitive-carousel': {
        view: 'primitive-carousel'
        },
        '/retro-carousel': {
        view: 'retro-carousel'
        },
        '/sharpie-carousel': {
        view: 'sharpie-carousel'
        },
        '/speed-carousel': {
        view: 'speed-carousel'
        },
        '/technical-carousel': {
        view: 'technical-carousel'
        }


/***************************************************************************
 *                                                                          *
 * Custom routes here...                                                    *
 *                                                                          *
 * If a request to a URL doesn't match any of the custom routes above, it   *
 * is matched against Sails route blueprints. See `config/blueprints.js`    *
 * for configuration options and examples.                                  *
 *                                                                          *
 ***************************************************************************/

};
