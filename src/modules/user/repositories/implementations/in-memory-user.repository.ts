import { CreateUserResponseDTO } from "../../dtos/create-user.dto";
import { UserResponseDTO } from "../../dtos/user-response.dto copy";
import { UserEntity } from "../../entities/user.entity";
import { UserProps } from "../../entities/user.props";
import { UserType } from "../../enum/user-type.enum";
import { UserMapper } from "../../mappers/user.mapper";
import { IUserRepository } from "../user-repository-interface";

export class InMemoryUserRepository implements IUserRepository {
    private users: UserEntity[] = [];

    async findByEmail(email: string): Promise<UserResponseDTO | null> {
        const user = this.users.find((users) => users.email === email);

        if (!user) {
            throw new Error("User not found.");
        }

        return UserMapper.toUserFindResponse(user);
    }
    async findByType(type: UserType): Promise<UserResponseDTO[]> {
        const users = this.users.filter((users) => users.userType === type);

        return UserMapper.toUserFindResponseList(users);
    }
    async find(platform: number): Promise<UserResponseDTO[]> {
        const users = this.users.filter((users) => users.platform === platform);

        return UserMapper.toUserFindResponseList(users);
    }
    async register(user: UserEntity): Promise<CreateUserResponseDTO | null> {
        this.users.push(user);

        return user;
    }
    async update(user: UserProps): Promise<UserProps | null> {
        throw new Error("Method not implemented.");
    }
    async delete(uid: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
