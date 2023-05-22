const staticRouter = require('express').Router()
require('express-async-errors')

staticRouter.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', "index.html"));
});
staticRouter.get('/articles', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', "index.html"));
});
staticRouter.get('/dashboard', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', "index.html"));
});
staticRouter.get('/users', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', "index.html"));
});
staticRouter.get('/watchlist', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', "index.html"));
});


module.exports = staticRouter