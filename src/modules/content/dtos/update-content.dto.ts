import { ContentEntity } from "../entities/content.entity";


export type UpdateContentDTO = Pick<
    ContentEntity,
    | "uid"
    | "description"
    | "value"
    | "amount"
>;

export type UpdateContentResponseDTO = Pick<
    ContentEntity,
    "uid" | "description" | "photo" | "amount" | "value" | "updatedAt"
>;
