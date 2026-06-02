import { UserEntity } from "../entities/user.entity";

export type UserResponseDTO = Pick<
    UserEntity,
    | "uid"
    | "name"
    | "email"
    | "userType"
    | "gender"
    | "platform"
    | "docNumberBusiness"
    | "docNumberPerson"
    | "createdAt"
    | "updatedAt"
>;
