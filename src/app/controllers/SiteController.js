class SiteController{

    // [GET] /
    index(req, res){
        res.render('Home')
    }

    // [GET] /Site/:slug
    search(req, res){
        res.render('search')
    }
}

module.exports = new SiteController