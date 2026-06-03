import { UserEntity } from "../entities/user.entity";

export type UpdateUserDTO = Pick<
    UserEntity,
    | "uid"
    | "name"
    | "email"
    | "password"
    | "docNumberBusiness"
    | "docNumberPerson"
    | "gender"
    | "userType"
>;

export type UpdateUserResponseDTO = Pick<
    UserEntity,
    "uid" | "name" | "email" | "userType" | "updatedAt"
>;
