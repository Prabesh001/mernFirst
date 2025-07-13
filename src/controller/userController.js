import userService from "../services/userService.js"

const createUser = async (req, res)=>{

    const {userName, password, phone, email, confirmPassword} = req.body

    try {
    if(!userName){
        return res.send("UserName required:")
    }
    if(!password){
        return res.send("password cannot be empty")
    }
    if(!email){
        return res.send("Pleaser enter the correct email:")
    }
    if(password !== confirmPassword) 
    {
        return res.send("Password do not match.")
    }

    const data = await userService.createUser(req.body)

    res.send(data)
}
    catch(error) {
    console.log(error.message)
    res.status(400).json({
        message: "error occured",
        error: error.message
    })

}
}



export {createUser} // Named export 