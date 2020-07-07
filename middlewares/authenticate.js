module.exports = function(req,res,next){

    let headerKey = req.header('X-Key');
    let headerRoute = req.header('X-Route');

    if( headerKey != null && headerRoute != null) return next();

    res.status(403).json('Acceso no autorizado');
    next(new Error('Acceso no autorizado'));
}
