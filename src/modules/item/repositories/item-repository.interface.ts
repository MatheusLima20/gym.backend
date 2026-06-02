
import { ItemCreateResponseDTO } from "../dtos/create-item.dto";
import { ItemResponseDTO } from "../dtos/item-response.dto";
import { UpdateItemResponseDTO } from "../dtos/update-item.dto";
import { ItemProps } from "../entities/item.props";

export interface IItemRepository {
    findItemByOrderUID(orderUID: string): Promise<ItemResponseDTO[]>;
    findByUID(uid: string): Promise<ItemResponseDTO | null>;
    findByName(name: string): Promise<ItemResponseDTO | null>;
    register(item: ItemProps): Promise<ItemCreateResponseDTO | null>;
    update(item: ItemProps): Promise<UpdateItemResponseDTO | null>;
    delete(uid: string): Promise<boolean | null>;
}
