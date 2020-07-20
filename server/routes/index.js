module.exports = app => {

    // Base URLS
    app.use('/vinyls', require('./vinyl.routes.js'))
}