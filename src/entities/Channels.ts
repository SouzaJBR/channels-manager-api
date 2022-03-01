import { v4 as uuid } from "uuid";
import { Category } from "./Category";

export class Channel {
    id: string;
    name: string;
    slug: string;
    number: number;
    logoUrl: string;
    categories: Category[];

    constructor(props: Omit<Channel, 'id'>, id?: string) {
        Object.assign(this, props);
        
        if(!id)
            id = uuid();
    }
}