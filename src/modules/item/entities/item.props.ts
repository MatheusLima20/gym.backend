

export interface ItemProps {
    uid: string;
    orderUID: string;
    platform: number;
    name: string;
    description: string;
    isForSale: boolean;
    value: number;
    amount: number;
    createdAt: Date;
    updatedAt:Date;
}
