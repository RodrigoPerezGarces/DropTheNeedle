module.exports = app => {

    // Base URLS
    app.use('/api/vinyls', require('./vinyl.routes'))
    app.use('/api', require('./auth.routes'))
}