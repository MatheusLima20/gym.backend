import { ItemEntity } from "../entities/item.entity";

export type UpdateItemDTO = Pick<
    ItemEntity,
    | "uid"
    | "orderUID"
    | "name"
    | "description"
    | "value"
    | "amount"
    | "isForSale"
>;

export type UpdateItemResponseDTO = Pick<
    ItemEntity,
    "name" | "description" | "updatedAt"
>;
