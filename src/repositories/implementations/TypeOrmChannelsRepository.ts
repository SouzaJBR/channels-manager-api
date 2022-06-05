import { EntityRepository, Repository } from "typeorm";
import { Channel } from "../../entities/Channel";
import { IChannelsRepository } from "../IChannelsRepository";

@EntityRepository(Channel)
export class TypeOrmChannelssRepository extends Repository<Channel> implements IChannelsRepository {
    async findBySlug(slug: string): Promise<Channel> {
        const channels = await this.find({ slug });
        return channels[0] ? channels[0] : null;
    } 
    async all() {
        return this.find();
    }

    async findById(id: string): Promise<Channel> {
        return this.findOneOrFail(id);
    }

    async delete(category: Channel): Promise<any> {
        return super.delete({ id: category.id });
    }
}