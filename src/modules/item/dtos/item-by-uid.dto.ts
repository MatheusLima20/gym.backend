import { ItemEntity } from "../entities/ItemEntity";

export type FindItemByUidDTO = Pick<
    ItemEntity,
    "uid" | "name" | "description" | "value" | "createdAt" | "updatedAt"
>;
