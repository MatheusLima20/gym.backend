import { Gender } from "../enum/GenderEnum";

export class Order {
    uid!: string;
    name!: string;
    description!: string;
    value!: number;
    amount!: number;
    platform!: number;

    constructor(props: Order) {
        Object.assign(this, props);
    }

    
}
