const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'https://angelsrestaurantapp.herokuapp.com/' }));
    app.use(proxy('/auth/google/callback', { target: 'https://angelsrestaurantapp.herokuapp.com/' }));
    app.use(proxy('/api', { target: 'https://angelsrestaurantapp.herokuapp.com/' }))
}