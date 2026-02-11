import jwt from 'jsonwebtoken'

export const adminLoginController = (req,res) => {

    const {email, password} = req.body

    if(email != process.env.ADMIN_EMAIL || password != process.env.ADMIN_PASSWORD){
        return res.json({
            status: false,
            message: 'Incorrect email or password'
        })
    }

    const token = jwt.sign({email}, process.env.JWT_SECRET)
    
    return res.json({
        status:true,
        token
    })
}