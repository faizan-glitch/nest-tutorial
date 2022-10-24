import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProductService {

    constructor(private readonly userService: UserService) {}

    getProductsOfUser() {
        // this.userService.getUser();
    }
}
