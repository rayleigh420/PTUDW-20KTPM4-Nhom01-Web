import userService from "../services/userService"

let signIn = async (req, res) => {
    try {
        let result = await userService.handleSignIn(req.body)
        console.log(result)
        if (result.errCode == 0) {
            res.redirect('/')
        }
        else if (result.errCode == 1) {
            return res.status(500).json(result)
        }
        else if (result.errCode == 2) {
            return res.status(500).json(result)
        }
        else {
            return res.status(500).json(result)
        }
    } catch (e) {
        console.log(e);
    }
}

let apiSignIn = async (req, res) => {
    try {
        let result = await userService.handleSignIn(req.body)
        console.log(result)
        res.json(result)
    } catch (e) {
        console.log(e);
    }
}

let signUp = async (req, res) => {
    try {
        let result = await userService.handleSignUp(req.body)
        console.log(result)
        if (result.errCode == 0) {
            res.redirect('/')
        }
        else {
            res.status(500).json(result)
        }
    } catch (e) {
        console.log(e);
    }
}

let apiSignUp = async (req, res) => {
    try {
        let result = await userService.handleCheckSignUp(req.body)
        console.log("Result: ", result)
        res.json(result)
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    signIn, signUp, apiSignIn, apiSignUp
}