import { IChannelsRepository } from "../../../repositories/IChannelsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListChannelsUseCase {
    constructor(@inject('ChannelsRepository') private channelsRepository: IChannelsRepository) { }

    async execute() {
        const channels = await this.channelsRepository.all();
        return channels;
    }
}