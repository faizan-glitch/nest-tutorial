import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ){}

    async login(email: string, password: string) {
        const user: any = await this.userService.findByEmail(email);

        if (!user) {
            throw new UnauthorizedException("Invalid Credentials");
        }

        const isMatched = await bcrypt.compare(password, user.password);

        if (!isMatched) {
            throw new UnauthorizedException("Invalid Credentials");
        }

        const payload = {
            id: user._id,
            email: user.email
        };

        return {
            user,
            accessToken: this.jwtService.sign(payload)
        }
    }

    signup(email: string, password: string, name: string) {

    }
}
