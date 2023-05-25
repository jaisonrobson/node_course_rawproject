module.exports = function(app) {
    app.get('/noticias', function(req, res) {
        app.app.controllers.admin.noticias(app, req, res);
    })

    app.get('/noticia', function(req, res) {
        app.app.controllers.admin.noticia(app, req, res);
    })
}
