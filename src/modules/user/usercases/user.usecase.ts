import { randomUUID } from "crypto";
import { CreateUserDTO } from "../dtos/create-user.dto";
import { UserEntity } from "../entities/user.entity";
import { IUserRepository } from "../repositories/user-repository-interface";
import { UserResponseDTO } from "../dtos/user-response.dto copy";
import { UserType } from "../enum/user-type.enum";

export class UserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async find(platform: number): Promise<UserResponseDTO[]> {
        return await this.userRepository.find(platform);
    }

    async findByType(userType: UserType): Promise<UserResponseDTO[]> {
        return await this.userRepository.findByType(userType);
    }

    async findByEmail(email: string): Promise<UserResponseDTO> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("User not found.");
        }

        return user;
    }

    async create(data: CreateUserDTO) {
        const user = new UserEntity({
            uid: randomUUID(),
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        const result = await this.userRepository.register(user);

        if (!result) {
            throw new Error("User Not Register");
        }

        return result;
    }
}
