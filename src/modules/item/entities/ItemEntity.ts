import { IItem } from "./IItem";


export class Item implements IItem {
    uid!: string;
    orderId!: string;
    platform!: number;
    

    constructor(props: Item) {
        Object.assign(this, props);
    }

    
}
