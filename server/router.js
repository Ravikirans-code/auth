const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });


module.exports = function (app) {
    app.post('/signup', Authentication.signup);
    app.get('/signin', requireSignIn,Authentication.signin);
    app.get('/', requireAuth, function (req, res, next) {
        res.send(['Hello', 'World', "!"])
    });
}