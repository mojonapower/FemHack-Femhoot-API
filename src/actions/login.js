function loginForm(req, res){

    let {email, password} = req.body;
    
    return res.send("everything is ok")

}

exports.loginForm= loginForm;
