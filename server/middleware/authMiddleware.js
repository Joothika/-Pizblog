import jwt from 'jsonwebtoken'

export const authMiddleware = (req,res,next) => {

    const token = req.headers.authorization
    res.setHeader('Content-Type', 'application/json');

    try{
       jwt.verify(token, process.env.JWT_SECRET)
       next()
    }catch(err){
        res.json({
            status:false,
            data: token,
            message:'Invalid token'
        })
    }
}