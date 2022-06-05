import { IChannelsRepository } from "src/repositories/IChannelsRepository";
import { inject, injectable } from "tsyringe";
import { DeleteChannelRequestDto } from "./DeleteChannelDTO";

@injectable()
export class DeleteChannelUseCase {
    constructor(@inject('ChannelsRepository') private channelsRepository: IChannelsRepository) { }

    async execute(data: DeleteChannelRequestDto) {
        const { id } = data;
        const channel = await this.channelsRepository.findById(id);

        await this.channelsRepository.delete(channel);
    }
}