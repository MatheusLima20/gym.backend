import { Gender } from "../enum/GenderEnum";

export interface IUser {
    uid: string;
    name: string;
    docNumberPerson: number;
    docNumberBusiness: number;
    gender: Gender;
    email: string;
    password: string;
    platform: number;
}
