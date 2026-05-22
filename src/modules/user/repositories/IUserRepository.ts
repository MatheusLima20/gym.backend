import { IUser } from "../entities/IUser";


export interface IUserRepository {
    getByEmail(email: string): Promise<IUser | null>;
    register(user: IUser): Promise<IUser | null>;
    change(user: IUser): Promise<IUser | null>;
}
