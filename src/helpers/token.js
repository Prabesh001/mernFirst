import jwt from 'jsonwebtoken'

const createToken = (payload)=>{
    return jwt.sign(payload,process.env.JWT_SECRET)
}

export {createToken}


export const verifyToken = (token)=>{
    return jwt.verify(token,process.env.JWT_SECRET)
}
