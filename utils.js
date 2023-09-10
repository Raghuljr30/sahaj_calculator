import jwt from 'jsonwebtoken';
export const generateToken=(user)=>{
    console.log(user);
    return jwt.sign(
        {

                name: user.name,
                email:user.email,

        }
        ,process.env.JWT_SECRET,{
        expiresIn:'30d',
    });
}