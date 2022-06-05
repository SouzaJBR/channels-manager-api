import { Channel } from '../entities/Channel';

export interface IChannelsRepository {
    all() : Promise<Channel[]>;
    save(category: Channel) : Promise<void>;
    delete(category: Channel) : Promise<void>;
    findById(id: string) : Promise<Channel>;
    findBySlug(slug: string): Promise<Channel>;
}