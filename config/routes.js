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
        '/ball' : {
        view: 'ball-carousel'
        },
        '/cutouts' : {
        view: 'cutouts-carousel'
        },
        '/grafic' : {
        view: 'grafic-carousel'
        },
        '/kitchen' : {
        view: 'kitchen-carousel'
        },
        '/alergy' : {
        view: 'alergy-carousel'
        },
        '/autocruise': {
        view: 'autocruise-carousel'
        },
        '/boutique': {
        view: 'boutique-carousel'
        },
        '/crazy-machine': {
        view: 'crazy-machine-carousel'
        },
        '/editorial': {
        view: 'editorial-carousel'
        },
        '/faces': {
        view: 'faces-carousel'
        },
        '/ice-cream-girls': {
        view: 'ice-cream-girls-carousel'
        },
        '/outsider': {
        view: 'outsider-carousel'
        },
        '/primitive': {
        view: 'primitive-carousel'
        },
        '/retro': {
        view: 'retro-carousel'
        },
        '/sharpie': {
        view: 'sharpie-carousel'
        },
        '/speed': {
        view: 'speed-carousel'
        },
        '/technical': {
        view: 'technical-carousel'
        },
        '/birds': {
        view: 'birds-carousel'
        },
        '/black-chalk': {
        view: 'blackchalk-carousel'
        },
        '/book-covers': {
        view: 'book-covers-carousel'
        },
        '/botanicals': {
        view: 'botanicals-carousel'
        },
        '/business': {
        view: 'business-carousel'
        },
        '/circus': {
        view: 'circus-carousel'
        },
        '/great-books': {
        view: 'great-books-carousel'
        },
        '/hands': {
        view:'hands-carousel'
        },
        '/metropolitan': {
        view: 'metropolitan-carousel'
        },
        '/oneliners': {
        view: 'oneliners-carousel'
        },
        '/sarcasm': {
        view: 'sarcasm-carousel'
        },
        '/storyboards': {
        view: 'storyboards-carousel'
        },
        '/winter-trees': {
        view: 'winter-trees-carousel'
        },
        '/ae-marketing': {
        view: 'ae-marketing-carousel'
        },
        '/dentistry': {
        view: 'dentistry-carousel'
        },
        '/motion': {
        view:'motion-carousel'
        },
        '/foot-tools': {
        view: 'foot-tool-carousel'
        },
        '/labels': {
        view: 'labels-carousel'
        },
        '/logos-a': {
        view: 'logos-a-carousel'
        },
        '/logos-b': {
        view: 'logos-b-carousel'
        },
        '/mobility': {
        view: 'mobility-carousel'
        },
        '/packaging': {
        view: 'packaging-carousel'
        },
        '/typographic': {
        view: 'typographic-carousel'
        },
        '/contact': {
        view: 'contact'
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
