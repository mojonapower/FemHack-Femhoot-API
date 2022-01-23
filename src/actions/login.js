function loginForm(req, res){
    //valida cuerpo de la solicitud
    if (!req.body.email)
        throw new utils_1.Exception("Verifique el email", 400);
    if (!req.body.password)
        throw new utils_1.Exception("Verifique el password", 400);

    //validar si existe en base de datos
    return res.send('oki')
}
function registerForm(req, res){
    //valida cuerpo de la solicitud
    if (!req.body.email)
        throw new utils_1.Exception("Verifique el email", 400);
    if (!req.body.password)
        throw new utils_1.Exception("Verifique el password", 400);
    if (!req.body.nombre)
        throw new utils_1.Exception("Verifique el nombre", 400);
        
    
   
    //validar si existe en base de datos
    return res.send('oki')

    }



exports.loginForm= loginForm;
exports.registerForm= registerForm;
