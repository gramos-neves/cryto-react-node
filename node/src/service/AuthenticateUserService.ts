import { sign } from 'jsonwebtoken'
import auth from '../config/auth'

interface UserRequest {
    email: string;
    password: string;
}

interface ResponseUserToken {
    user: UserRequest;
    token: string;
}


class AuthenticateuserService {

    public async validationSession(data: UserRequest): Promise<ResponseUserToken> {

        const { email, password } = data

        if (!email) {
            throw new Error('Campos inválidos.')
        } else if (!password) {
            throw new Error('Campos inválidos.')
        }

        const token = sign({}, auth.jwt.secret, {
            subject: `${email}`,
            expiresIn: auth.jwt.expiresIn
        })

        return { user: { email, password }, token }
    }
}

export default AuthenticateuserService