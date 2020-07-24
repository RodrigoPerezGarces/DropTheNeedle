module.exports = app => {

    // Base URLS
    app.use('/vinyls', require('./vinyl.routes'))
    app.use('/', require('./auth.routes'))
}