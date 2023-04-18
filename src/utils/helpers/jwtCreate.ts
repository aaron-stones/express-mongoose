import * as jwt from 'jsonwebtoken';

export const createJwt = (userId: string): string => {
    return jwt.sign({ _id: userId }, (process.env.JWT_ENCRYPTION_KEY as jwt.Secret), {
        expiresIn: '2 days',
    });
}