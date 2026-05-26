import { ItemEntity } from "../entities/ItemEntity";

export type CreateItemDTO = Pick<
    ItemEntity,
    "name" | "description" | "orderId" | "platform" | "value"
>;

export type ResultCreateItemDTO = Pick<ItemEntity, "uid" | "name" | "description" | "orderId" | "value">;