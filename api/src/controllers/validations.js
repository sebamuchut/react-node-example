const validateCredentials = (req, res) => {
    if (req.body) {
        const { email, password } = req.body
        if(email === 'demo@tipieapp.com' && password === 'Tipie2022') {
            res.json({success: true});
        } else {
            res.json({success: false, message: 'incorrect email or password'});
        }
    } else {
        res.json({success: false, message: 'email and password are required'});
    }
}

module.exports = validateCredentials;