import { ItemEntity } from "../entities/ItemEntity";

export type CreateItemDTO = Pick<
    ItemEntity,
    "name" | "description" | "orderId" | "platform" | "value"
>;

export type ItemResponseDTO = Pick<ItemEntity, "uid" | "name" | "description" | "orderId" | "value">;