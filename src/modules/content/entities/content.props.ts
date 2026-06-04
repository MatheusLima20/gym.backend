import { ContentType } from "../enum/content.enum";

export interface ContentProps {
    uid: string;
    userUID: string | null;
    photo: string | null;
    description: string | null;
    amount: number | null;
    value: number | null;
    platform: number;
    type: ContentType;
    createdAt: Date;
    updatedAt: Date;
}
