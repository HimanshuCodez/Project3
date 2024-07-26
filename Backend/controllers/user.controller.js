import User from "../models/user.model.js";

export const signup = (req, res) => {
    try {
        const { fullname, email, passowrd } = req.body
        const user = User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }
        const createdUser = new User
            ({
                fullname,
                email,
                password
            })
            createdUser.save()
        return res.status(201).json({ messsage: "User created" })
    } catch (error) {
console.log("user creation error",error)
res.status (500) .json({message:"signup error"})
    }
}
