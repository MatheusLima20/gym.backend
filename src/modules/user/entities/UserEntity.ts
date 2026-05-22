import { Gender } from "../enum/GenderEnum";

export class User {
    uid!: string;
    name!: string;
    docNumberPerson!: number;
    docNumberBusiness!: number;
    gender!: Gender;
    email!: string;
    password!: string;
    platform!: number;

    constructor(props: User) {
        Object.assign(this, props);
    }

    
}
