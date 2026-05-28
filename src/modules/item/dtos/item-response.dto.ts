import { ItemEntity } from "../entities/item.entity";

export type ItemResponseDTO = Pick<
    ItemEntity,
    "uid" | "name" | "description" | "platform" | "orderId" | "value" | "createdAt" | "updatedAt"
>;
