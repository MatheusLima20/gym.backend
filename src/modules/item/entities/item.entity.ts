import { ItemProps } from "./item.props";


export class ItemEntity implements ItemProps {
    uid!: string;
    orderUID!: string;
    platform!: number;
    name!: string;
    description!: string;
    isForSale!: boolean;
    value!: number;
    createdAt!: Date;
    updatedAt!:Date;
    

    constructor(props: ItemProps) {
        Object.assign(this, props);
    }

}
