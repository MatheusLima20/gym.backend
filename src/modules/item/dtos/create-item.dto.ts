import { ItemEntity } from "../entities/ItemEntity";

export type CreateItemDTO = Pick<
    ItemEntity,
    "name" | "description" | "orderId" | "platform" | "value"
>;

export type ItemCreateResponseDTO = Pick<ItemEntity, "uid" | "name" | "description" | "orderId" | "value" | "updatedAt">;