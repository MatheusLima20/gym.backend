import { CreateUserResponseDTO } from "../dtos/create-user.dto";
import { UserResponseDTO } from "../dtos/user-response.dto copy";
import { UserProps } from "../entities/user.props";
import { UserType } from "../enum/user-type.enum";

export interface IUserRepository {
    findByEmail(email: string): Promise<UserResponseDTO | null>;
    findByType(type: UserType): Promise<UserResponseDTO[]>;
    find(platform: number): Promise<UserResponseDTO[]>;
    register(user: UserProps): Promise<CreateUserResponseDTO | null>;
    update(user: UserProps): Promise<UserProps | null>;
    delete(uid: string): Promise<boolean>;
}
