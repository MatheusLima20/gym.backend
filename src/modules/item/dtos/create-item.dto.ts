import { ItemEntity } from "../entities/item.entity";

export type CreateItemDTO = Pick<
    ItemEntity,
    "name" | "description" | "orderId" | "platform" | "value" | "isForSale"
>;

export type ItemCreateResponseDTO = Pick<ItemEntity, "uid" | "name" | "description" | "orderId" | "value" | "updatedAt">;