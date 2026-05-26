import { ItemEntity } from "../entities/ItemEntity";

export type UpdateItemDTO = Pick<
    ItemEntity,
    "uid" | "name" | "description" | "platform" | "value" 
>;
