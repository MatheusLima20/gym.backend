import { OrderProps } from "./order.props";

export class OrderEntity implements OrderProps {

    uid!: string;
    platform!: number;
    description!: string;
    createdAt!: Date;
    updatedAt!: Date;    

    constructor(props: OrderProps) {
        Object.assign(this, props);
    }
    
}
