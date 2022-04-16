import { Channel } from "../../../entities/Channel";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";
import { IChannelsRepository } from "../../../repositories/IChannelsRepository";
import { inject, injectable } from "tsyringe";
import { ICreateChannelRequestDTO } from "./CreateChannelDTO";
import { ValidationError } from "../../../base/errors/ValidationError";

@injectable()
export class CreateChannelUseCase {
    constructor(
        @inject('CategoriesRepository') private categoriesRepository: ICategoriesRepository,
        @inject('ChannelsRepository') private channelsRepository: IChannelsRepository
    ) { }

    async execute(data: ICreateChannelRequestDTO) {
        const { categories, ...values } = data;
        
        const { slug } = values;
        const slugAlreadyTaken = !!await this.channelsRepository.findBySlug(slug);

        if(slugAlreadyTaken) {
            throw new ValidationError(`Channel with slug '${slug}' already exists'`);
        }

        const newCategories = await Promise.all(
            categories.map(
                categoryId => this.categoriesRepository.findById(categoryId)
            )
        )

        const newData = Object.assign({}, values, { categories: newCategories });
        const channel = new Channel(newData);

        await this.channelsRepository.save(channel);
    }
}