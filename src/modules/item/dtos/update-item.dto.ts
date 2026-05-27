import { ItemEntity } from "../entities/ItemEntity";

export type UpdateItemDTO = Pick<
    ItemEntity,
    "uid" | "orderId" | "name" | "description" | "value" 
>;

export type UpdateItemResponseDTO = Pick<ItemEntity, "name" | "description" | "updatedAt" >;