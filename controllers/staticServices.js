const staticRouter = require('express').Router()
require('express-async-errors')
const path = require('path')
staticRouter.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
staticRouter.get('/Articles', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
staticRouter.get('/Dashboard', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
staticRouter.get('/Login', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
staticRouter.get('/Users/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
staticRouter.get('/signup', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
staticRouter.get('/Watchlist', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


module.exports = staticRouter